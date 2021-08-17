import React from 'react'
import { useParams } from 'react-router-dom'
import AddProject from '../AddProject/AddProject';
import { useQuery } from '@apollo/client'
import { getById } from '@services/Query'
import { Project } from '@types'
export const EditProject = () => {
  const { id } = useParams();
  const { data } = useQuery<Project>(getById, {
    variables: {
      "id": `${id}`
    },

  })
  return (
    <div>
      {<AddProject data={data?.UI__getProject} />}
    </div>
  )
}
