import React, { FC } from 'react'
import { Dialog, Box, List, AppBar, Card, IconButton, Slide, Toolbar, CardContent, CardMedia, Typography } from '@shared'
import { CloseIcon } from '@shared'
import { TransitionProps } from '@material-ui/core/transitions'
import { getById } from '@services/Query';
import { useQuery } from '@apollo/client'
import { Progress } from '@shared'
import { Project } from '@types'
import Moment from 'react-moment'
import { styles } from './ProjectDetail.style';
/* import styles */
type Props = {
  open: boolean,
  setOpen: (value: boolean) => void,
  id: string
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const ProjectDetail: FC<Props> = ({ open, setOpen, id }) => {
  const { data, loading } = useQuery<Project>(getById, {
    variables: {
      id
    }
  })
  const handleClose = () => {
    setOpen(false);
  };
  const classes = styles();

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">
            Project Details
          </Typography>
        </Toolbar>
      </AppBar>
      <List className={classes.list}>
        {loading ? <Progress /> : <Card className={classes.card}>
          <Box mb={1} pl={1}>
            <Box mt={1}>
              <Typography align="center" variant="h4" component="h4">
                {data?.UI__getProject.title}
              </Typography>
            </Box>
            <Typography align="center" variant="subtitle1">
              {data?.UI__getProject.subtitle}
            </Typography>
          </Box>
          <CardMedia
            component="img"
            height="140"
            image={data?.UI__getProject.thumbnail}
            title={data?.UI__getProject.title}
          />
          <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="summary"><strong>Summary </strong>: </label>
              {data?.UI__getProject.summary}
            </Typography><hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}><strong>Role </strong>: </label>{data?.UI__getProject.role}
            </Typography><hr />
            <Box>
              <Typography variant="h5" align="center" color="textPrimary" component="h4">
                Company Details
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                <label htmlFor="Role" className={classes.label}><strong>Name </strong>: </label> {data?.UI__getProject.client.name}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                <label htmlFor="logo" className={classes.label}><strong>Logo </strong> </label>
                <img className={classes.logo} src={data?.UI__getProject.client.logo} alt="" />
              </Typography>
            </Box>
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Start" className={classes.label}><strong>Start Date </strong>: </label> <Moment format="DD/MM/YYYY">{data?.UI__getProject.start}
              </Moment>
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Start" className={classes.label}><strong>End Date </strong>: </label> <Moment format="DD/MM/YYYY">{data?.UI__getProject.end}
              </Moment>
            </Typography><hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}><strong>Project Type </strong>: </label> {data?.UI__getProject.projectType}
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}><strong>Challenge </strong>: </label> {data?.UI__getProject.challenge}
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}><strong>Solution </strong>: </label> {data?.UI__getProject.solution}
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}><strong>URL </strong>: </label> <a rel="noreferrer" href={data?.UI__getProject.url} target="_blank">{data?.UI__getProject.title}</a>
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="h1">
              <label htmlFor="Role" className={classes.label}><strong>Technologies </strong>: </label> <ul>
                {data?.UI__getProject.technologies.map((tech, id) => {
                  return <li key={id}>{tech}</li>
                })}
              </ul>
            </Typography><hr />
            <Typography variant="body1" color="textPrimary" component="h1">
              <label htmlFor="Role" className={classes.label}>
                <strong>ScreenShots </strong>: </label>
              <div className={classes.imgContainer}>
                {
                  data?.UI__getProject.images.map((image, id) => {
                    return <img src={image} key={id} />
                  })
                }
              </div>
            </Typography>

          </CardContent>
        </Card>}
      </List>
    </Dialog>
  )
}