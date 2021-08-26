import React, { FC } from 'react';
import { DELETE_MSG } from '@constants';
import { useSnackbar } from 'notistack';
import { useConfirm } from 'material-ui-confirm';
import { useMutation } from '@apollo/client';
import { deleteProjectByID } from '../../../../apollo/Mutation/index';
import { getQuery } from '../../../../apollo/Query/index';
import { DeleteIcon, Tooltip } from '@shared';
import { styles } from './DeleteButton.style';
type Props = {
  id: string;
};
export const DeleteButton: FC<Props> = ({ id }) => {
  const { enqueueSnackbar } = useSnackbar();
  const confirm = useConfirm();
  const [deleteProject] = useMutation(deleteProjectByID, {
    refetchQueries: () => [{ query: getQuery }],
  });
  const classes = styles();
  const handleDelete = (id: string) => {
    confirm({ description: `This will parmanently remove the Project!` })
      .then(async () => {
        await deleteProject({ variables: { id } });
        enqueueSnackbar(`${DELETE_MSG}`, { variant: 'success' });
      })
      .catch(() => {
        /* catch the cancel  */
      });
  };
  return (
    <button className={classes.btn} onClick={() => handleDelete(id)}>
      <Tooltip title="Delete" arrow>
        <DeleteIcon />
      </Tooltip>
    </button>
  );
};
