import {createUseStyles} from 'react-jss'
export const styles=createUseStyles({
  btn:{
    backgroundColor:"transparent",
    border:'none',
    margin:'0 .5rem',
    "&:hover":{
      cursor:'pointer',
    }
  }
})