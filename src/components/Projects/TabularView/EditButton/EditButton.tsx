import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, EditIcon } from '@shared';
import { styles } from './EditButton.style';
type Props = {
  id: string;
};
export const EditButton: FC<Props> = ({ id }) => {
  const classes = styles();
  return (
    <Link className={classes.btn} to={`/edit/${id}`}>
      <Tooltip title="Edit" arrow>
        <EditIcon />
      </Tooltip>
    </Link>
  );
};
