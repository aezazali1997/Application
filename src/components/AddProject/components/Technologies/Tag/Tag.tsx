import React from 'react';
import { CloseIcon } from '@shared';
import { styles } from './Tag.style';

export const Tag = ({ label, onDelete, ...props }: any) => {
  const classes = styles();
  return (
    <div className={classes.container} {...props}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
};
