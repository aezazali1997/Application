import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { AddProject } from '@components/AddProject/AddProject';
import { getById } from '@services/Query'
import { Project } from '@types';
import { Progress } from '@shared'

export const EditProject = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<Project>(getById, {
    variables: {
      "id": `${id}`
    },
  })
  return (
    <div>
      {loading ? <Progress /> : <AddProject data={data?.UI__getProject} />}
    </div>
  )
}