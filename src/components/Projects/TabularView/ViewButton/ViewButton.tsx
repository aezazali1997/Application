import React, { FC } from 'react';
import { Tooltip, VisibilityIcon } from '@shared';
import { styles } from './ViewButton.style';
type Props = {
  setOpen: (value: boolean) => void;
};
export const ViewButton: FC<Props> = ({ setOpen }) => {
  const classes = styles();
  return (
    <button onClick={() => setOpen(true)} className={classes.btn}>
      <Tooltip title="View" arrow>
        <VisibilityIcon />
      </Tooltip>
    </button>
  );
};
