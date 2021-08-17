import React, { FC, useState } from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { partialProjectProps } from '@types'
import { useMutation } from '@apollo/client'
import { deleteProjectByID } from '@services/Mutation';
import { getQuery } from '@services/Query/Query.getAllProjects';
import { styles } from './Project.style';
import { ProjectDetail } from './ProjectDetail/ProjectDetail';
type Props = {
  project: partialProjectProps
}
const Project: FC<Props> = ({ project: { id, client, end, role, start, title, url } }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteProject] = useMutation(deleteProjectByID, {
    refetchQueries: () => [{ query: getQuery }]
  }
  )
  const classes = styles();
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
          <button className={classes.btn} onClick={async () => {
            await deleteProject({ variables: { id: id } });
          }}><DeleteIcon ></DeleteIcon></button>
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

export default Project;