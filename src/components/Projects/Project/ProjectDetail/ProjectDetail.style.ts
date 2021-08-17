import {createUseStyles} from 'react-jss'
export const styles=createUseStyles({
  card:{
    maxWidth:500,
    margin:'auto',
  },
  appBar: {
    position: 'relative',
  },
  list:{
    position:'relative',
    top:100,
  },
  item:{
    width:"100%",
    display:'flex',
    justifyContent:'space-between',
  },
  loadingBar:{
    position:'absolute',
    marginLeft:"50%",
    marginTop:'20%',
  },
  label:{
    marginRight:"10px"
  }
})