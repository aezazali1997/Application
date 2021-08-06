import {createUseStyles} from 'react-jss'
export const styles=createUseStyles({
  card:{
    maxWidth:'100%',
    marginLeft:50,
  },
  appBar: {
    position: 'relative',
  },
  list:{
    position:'absolute',
    top:100,
  },
  item:{
    width:"100%",
    display:'flex',
    justifyContent:'space-between',
  }
})