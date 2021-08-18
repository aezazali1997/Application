import {makeStyles} from '@shared'

export const styles=makeStyles({
  table:{
    width:"100%",
    border:'1px solid black',
    position:'relative',
    borderCollapse:'collapse',
    "& thead th":{
      border:'1px solid black',
      borderCollapse:'collapse',
      padding: 5,
      textAlign: "center"
    },
    "& tbody td":{
      border:'1px solid black',
      borderCollapse:'collapse',
      padding: 5,
      textAlign: "center"
    },
  },
  Add:{
    position:'absolute',
    right:50,
    marginTop:20,
    backgroundColor:"transparent",
    textDecoration:'none',
    color:"black",
    border:'none',
    "&:hover":{
      cursor:'pointer'
    }
  },
  loader:{
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
  }
})