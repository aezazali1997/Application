import { makeStyles } from '@shared';
import { Theme } from '@material-ui/core';

export const styles = makeStyles((theme: Theme) => ({
  root: {
    margin: '10px 0px',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    '& > *': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
  submitBtn: {
    width: '30rem',
  },
  overlay: {
    position: 'fixed',
    background: 'rgba(0,0,0,.4)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 2,
    color: '#3f51b5',
  },
  '@media screen and (max-width:768px)': {
    root: {
      gridTemplateColumns: 'repeat(1,1fr)',
    },
    submitBtn: {
      bottom: '-3%',
      width: 'auto',
    },
  },
}));
