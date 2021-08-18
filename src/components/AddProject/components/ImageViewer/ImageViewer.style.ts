import {makeStyles} from '@shared'

export const styles=makeStyles({
  img:{
    position:'absolute',
    bottom:-10,
    right:0,
    display:'inline-block',
    width:80,
    maxHeight:80,
  },
  "@media screen and (max-width:768px)": {
    img:{
      width:40,
      maxHeight:40,
    },
  }
})