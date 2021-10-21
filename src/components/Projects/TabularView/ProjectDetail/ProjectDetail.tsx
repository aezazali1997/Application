import React, { FC } from 'react';
import {
  Dialog,
  List,
  AppBar,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from '@shared';
import { CloseIcon } from '@shared';
import { TransitionProps } from '@material-ui/core/transitions';
import { getById } from '@/apollo/Query';
import { useQuery } from '@apollo/client';
import { Progress } from '@shared';
import { Project } from '@types';
import { DetailList } from './DetailList/DetailList';
import { styles } from './ProjectDetail.style';

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  id: string;
};
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const ProjectDetail: FC<Props> = ({ open, id, setOpen }) => {
  const { data } = useQuery<Project>(getById, {
    fetchPolicy: 'no-cache',

    variables: { id },
  });
  const handleClose = () => {
    setOpen(false);
  };
  const classes = styles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">
            {data?.UI__getProjectByID.title} Details
          </Typography>
        </Toolbar>
      </AppBar>
      <List className={classes.list}>
        {!data ? <Progress /> : <DetailList data={data.UI__getProjectByID} />}
      </List>
    </Dialog>
  );
};
