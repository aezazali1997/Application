import {makeStyles} from '@shared'

export const styles=makeStyles({
  card:{
    maxWidth:500,
    margin:'auto',
    border:'1px solid #efefef',
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  },
  appBar: {
    position: 'relative',
  },
  list:{
    position:'relative',
    top:30,
  },
  item:{
    width:"100%",
    display:'flex',
    justifyContent:'space-between',
  },
  label:{
    marginRight:"0"
  },
  imgContainer:{
    marginTop:7,
    display:'flex',
    flexDirection:'column',
    marginLeft:25,
    "& img":{
      width:300,
      margin:"10px 0",
    }
  },
  logo:{
    width:150,
    display:'inherit'
  }
})