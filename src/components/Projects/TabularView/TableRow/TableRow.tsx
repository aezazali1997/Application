import TableRow from '@material-ui/core/TableRow';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);
