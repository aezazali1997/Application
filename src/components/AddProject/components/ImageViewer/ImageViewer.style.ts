import { makeStyles } from '@shared';

export const styles = makeStyles({
  img: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    display: 'inline-block',
    width: 80,
    maxHeight: 80,
  },
  '@media screen and (max-width:768px)': {
    img: {
      width: 60,
      maxHeight: 60,
    },
  },
});
