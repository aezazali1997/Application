import React, { FC } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom'
import { styles } from './ListButton.style';
type Props = {
  list: {
    text: string,
    link: string,
    icon: string
  }
}
export const ListButton: FC<Props> = ({ list }) => {
  const classes = styles();
  return (
    <div>
      <Link className={classes.link} to={list.link} key={list.text} >
        <ListItem button >
          <ListItemIcon><Icon >{list.icon}</Icon></ListItemIcon>
          <ListItemText primary={list.text} />
        </ListItem>
      </Link>
    </div >
  )
}
