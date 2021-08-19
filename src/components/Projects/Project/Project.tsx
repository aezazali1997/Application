import React, { FC, useState } from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import { DeleteIcon, EditIcon, VisibilityIcon } from '@shared';
import { partialProjectProps } from '@types'
import { useMutation } from '@apollo/client'
import { deleteProjectByID } from '@services/Mutation';
import { getQuery } from '@services/Query/getAllProjects.Query';
import { ProjectDetail } from './ProjectDetail/ProjectDetail';
import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack'
import { styles } from './Project.style';

type Props = {
  project: partialProjectProps
}

export const Project: FC<Props> = ({ project: { id, client, end, role, start, title, url } }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState<boolean>(false);
  const confirm = useConfirm();
  const [deleteProject] = useMutation(deleteProjectByID, {
    refetchQueries: () => [{ query: getQuery }]
  }
  )
  const classes = styles();
  const handleDelete = (id: string) => {
    confirm({ description: `This will parmanently remove the Project!` })
      .then(async () => {
        await deleteProject({ variables: { id } });
        enqueueSnackbar("Project Deleted!", { variant: 'success' })
      })
      .catch(() => {
        /* catch the cancellation  */
      })

  }
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>
          <Moment format="DD/MM/YYYY">
            {
              start
            }
          </Moment>
        </td>
        <td>  <Moment format="DD/MM/YYYY">
          {
            end
          }
        </Moment></td>
        <td>{client.name}</td>
        <td>{role}</td>
        <td>{url}</td>
        <td>
          <button className={classes.btn} onClick={() => handleDelete(id)}><DeleteIcon ></DeleteIcon></button>
          <Link to={`/edit/${id}`}><button className={classes.btn}><EditIcon ></EditIcon></button></Link>
          <button onClick={() => {
            setOpen(true);
          }} className={classes.btn}><VisibilityIcon></VisibilityIcon></button>
        </td>
      </tr >
      <ProjectDetail open={open} setOpen={setOpen} id={id} />
    </>
  )
}