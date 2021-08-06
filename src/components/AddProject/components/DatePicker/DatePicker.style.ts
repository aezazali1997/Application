import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      margin: '0',
      width: "100%",
    },
  },

}))