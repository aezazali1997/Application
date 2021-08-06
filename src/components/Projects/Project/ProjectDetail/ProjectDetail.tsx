import React, { useState, FC } from 'react'
import { Dialog, List, AppBar, Card, IconButton, Slide, Toolbar, Button, CardActionArea, CardContent, CardMedia, Typography, CardActions } from './index'
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close'
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
  const handleClose = () => {
    setOpen(false);
  };
  const classes = styles();

  return (
    <div>
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
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </List>
      </Dialog>
    </div>
  )
}