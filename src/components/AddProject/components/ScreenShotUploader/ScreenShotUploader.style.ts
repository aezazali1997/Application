import { makeStyles } from '@shared'

export const styles = makeStyles(() => ({
  input: {
    display: "none"
  },
  UploadBtn: {
    fontSize: 16,
    color: "rgb(118, 118, 118)",
    textAlign: 'left',
    display: 'inline-block',
    marginBottom: 10,
  },
  imageContainer:{
    position:'relative',
    margin:' 0',
  },

  imgs:{
    display:'inline-block',
    width:80,
    maxHeight:80,
    margin:'.2rem',
  },
  "@media screen and (max-width:768px)": {
    root: {
      gridTemplateColumns: 'repeat(1,1fr)',
    },
  }
}));