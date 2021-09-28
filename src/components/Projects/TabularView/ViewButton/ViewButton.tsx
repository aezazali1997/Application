import React, { FC, useState } from 'react';
import { Tooltip, VisibilityIcon } from '@shared';
import { ProjectDetail } from '../ProjectDetail/ProjectDetail';

import { styles } from './ViewButton.style';
type Props = {
  id: string
};
export const ViewButton: FC<Props> = ({ id }) => {
  const classes = styles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className={classes.btn}>
        <Tooltip title="View" arrow>
          <VisibilityIcon />
        </Tooltip>
      </button>
      <ProjectDetail open={isOpen} setOpen={setIsOpen} id={id} />
    </>
  );
};
