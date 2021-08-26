import { makeStyles } from '@shared';

export const styles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: 24,
    margin: 2,
    lineHeight: 22,
    backgroundColor: '#fafafa',
    border: '1px solid #e8e8e8',
    borderRadius: 2,
    boxSizing: 'content-box',
    padding: '0 4px 0 10px',
    outline: 0,
    overFlow: 'hidden',
    '&:focus': {
      borderColor: '#40a9ff',
      backgroundColor: '#e6f7ff',
    },
    '& span': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: 'rgba(0,0,0,.87)',
    },
    '& svg': {
      fontSize: 24,
      cursor: 'pointer',
      padding: 4,
    },
  },
});
