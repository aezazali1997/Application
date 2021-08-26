import React, { FC } from 'react';
import { Icon, ListItem, ListItemIcon, ListItemText } from '@shared';
import { Link } from 'react-router-dom';
import { styles } from './SideBarButton.style';
type Props = {
  button: {
    text: string;
    link: string;
    icon: string;
  };
};
export const SideBarButton: FC<Props> = ({ button }) => {
  const classes = styles();
  return (
    <div>
      <Link className={classes.link} to={button.link} key={button.text}>
        <ListItem button>
          <ListItemIcon>
            <Icon>{button.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={button.text} />
        </ListItem>
      </Link>
    </div>
  );
};
