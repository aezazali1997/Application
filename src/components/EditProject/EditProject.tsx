import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { AddProject } from '@components/AddProject/AddProject';
import { getById } from '../../apollo/Query/index';
import { Project } from '@types';
import { Progress } from '@shared';

export const EditProject = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<Project>(getById, {
    fetchPolicy: 'no-cache',
    variables: {
      id: `${id}`,
    },
  });
  return (
    <div>
      {loading ? <Progress /> : <AddProject data={data?.UI__getProjectByID} />}
    </div>
  );
};
