import React, { FC } from 'react';
import { CircularProgress } from '@shared';
import { styles } from './Progress.style';
type Props = {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
};
export const Progress: FC<Props> = ({
  left = '50%',
  top = '50%',
  bottom = '50%',
  right = '50%',
}) => {
  const classes = styles();
  return (
    <div style={{ left, top, right, bottom }} className={classes.loader}>
      <CircularProgress />
    </div>
  );
};
