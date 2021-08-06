import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px 0px",
    position: 'relative',
    display: "grid",
    gridTemplateColumns: 'repeat(2,1fr)',
    '& > *': {
      margin: theme.spacing(1),
      width: "auto",
    },
  },
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
  submitBtn: {
    width: "30rem",
  },
  imageContainer:{
    position:'relative',
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
    submitBtn: {
      bottom: "-3%",
      width:'auto',
    },
    img:{
      width:40,
      maxHeight:40,
    },


  }
}));