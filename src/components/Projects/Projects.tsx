import React from 'react'
import { useQuery } from '@apollo/client'
import { Typography } from '@shared'
import { ProjectType } from '@types';
import { Project } from './Project/Project'
import { getQuery } from '@services/Query';
import { styles } from './Projects.styles';
import { ConfirmProvider } from 'material-ui-confirm'
import { Progress } from '@shared'

export const Projects = () => {

  const classes = styles();
  const { loading, data } = useQuery<ProjectType>(getQuery);
  return (
    <>
      {
        loading ? <Progress /> : (
          <>
            <Typography
              variant="h4" color="textSecondary" >Project Details</Typography> <br />
            <table className={classes.table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Company Name</th>
                  <th>Role</th>
                  <th>URL</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                <ConfirmProvider>
                  {
                    data?.UI__getAllProjects.map((singleProject) => {
                      return <Project key={singleProject.id} project={singleProject} />
                    }
                    )
                  }
                </ConfirmProvider>
              </tbody>
            </table>
          </>
        )
      }
    </>
  )
}