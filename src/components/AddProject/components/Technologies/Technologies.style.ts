import {makeStyles} from '@shared'
export const styles=makeStyles({
  label : {
    padding: '0 0 4px',
    lineHeight:0.5,
    display:'block',
    color: 'rgba(118, 118, 118)',
    textAlign: 'left',
    marginBottom:20,
  },
  inputWrapper:{
    width:'100%',
    border:'1px solid #d9d9d9',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding:4,
    display: 'flex',
    flexWrap: 'wrap',
    '&:hover':{
      borderColor: '#40a9ff',
    },
    '&.focused': {
      borderColor: '#40a9ff',
      boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
    },
    '& input' : {
      fontSize:10,
      height: 30,
      boxSizing: 'border-box',
      padding: '4px 6px',
      width: 0,
      minWidth: 30,
      flexGrow:1,
      border: 0,
      margin: 0,
      outline: 0,
    }
  },
  ulist:{
    width: 300,
    margin: '2px 0 0',
    padding: 0,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: '#fff',
    overflow: 'auto',
    maxHeight: 250,
    borderRadius: 4,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    zIndex:100,
    '& li': {
      padding: '5px 12px',
      display: 'flex',
      '& span': {
        flexGrow:0,
      },
      '& svg': {
        color: 'transparent',
      }
    },
    '& li[aria-selected="true"]': {
      backgroundColor: '#fafafa',
      fontWeight: 600,
      '& svg':{
        color: '#1890ff',
      }
    },
    '& li[data-focus="true"]' : {
      backgroundColor: '#e6f7ff',
      cursor: 'pointer',
      '& svg':{
        color: '#000',
      }
    }
  }
})