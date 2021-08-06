import {createUseStyles} from 'react-jss'
export const styles=createUseStyles({
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
    margin:'-10px 0',
  },
  "@media screen and (max-width:768px)": {
    img:{
      width:40,
      maxHeight:40,
    }
  }
})