import React, { FC } from 'react'
import { Dialog, List, AppBar, Card, IconButton, Slide, Toolbar, CardContent, CardMedia, Typography } from './index'
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close'
import { getById } from '@services/Query';
import { useQuery } from '@apollo/client'
import { styles } from './ProjectDetail.style';
import { Project } from '@types'
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Moment from 'react-moment'

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
        {loading ? <CircularProgress className={classes.loadingBar} /> : <Card className={classes.card}>
          <Typography gutterBottom variant="h4" component="h4">
            {data?.UI__getProject.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {data?.UI__getProject.subtitle}
          </Typography>

          <CardMedia
            component="img"
            height="140"
            image={data?.UI__getProject.thumbnail}
            title={data?.UI__getProject.title}
          />
          <CardContent>

            <Typography variant="body2" color="textPrimary" component="p">
              {data?.UI__getProject.summary}
            </Typography><hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}>Role :</label> {data?.UI__getProject.role}
            </Typography><hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}>Company`s Name :</label> {data?.UI__getProject.client.name}
            </Typography>
            <Avatar src={data?.UI__getProject.client.logo} />
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Start" className={classes.label}>Start Date :</label> <Moment format="DD/MM/YYYY">{data?.UI__getProject.start}
              </Moment>
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Start" className={classes.label}>End Date :</label> <Moment format="DD/MM/YYYY">{data?.UI__getProject.end}
              </Moment>
            </Typography><hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}>Project Type :</label> {data?.UI__getProject.projectType}
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}>Challenge :</label> {data?.UI__getProject.challenge}
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}>Solution :</label> {data?.UI__getProject.solution}
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="p">
              <label htmlFor="Role" className={classes.label}>URL :</label> <a rel="noreferrer" href={data?.UI__getProject.url} target="_blank">{data?.UI__getProject.title}</a>
            </Typography>
            <hr />
            <Typography variant="body1" color="textPrimary" component="h1">
              <label htmlFor="Role" className={classes.label}>Technologies :</label> <ul>
                {data?.UI__getProject.technologies.map((tech, id) => {
                  return <li key={id}>{tech}</li>
                })}
              </ul>
            </Typography>

          </CardContent>
        </Card>}
      </List>
    </Dialog>
  )
}