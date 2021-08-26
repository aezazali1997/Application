import React from 'react'
import { useQuery } from '@apollo/client';
import { getTitles } from '../../apollo/Query'
import { Data } from '@types'
import { Progress, Box, Breadcrumbs, Typography } from '@shared'
import { Link } from 'react-router-dom'
import { SingleProject } from './SingleProject/SingleProject'
import { styles } from './ViewProject.style'
export const ViewProject = () => {
  const classes = styles();
  const { loading, data } = useQuery<Data>(getTitles);

  return (
    <>
      <Box display="inline-block">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Dashboard
          </Link>
          <Typography color="textPrimary">View Projects Title</Typography>
        </Breadcrumbs>
      </Box>
      <div className={classes.container}>
        {loading ? <Progress left="50%" top="50%" /> : (
          data?.UI__getAllProjectNames.map((subData, index) => {
            return < SingleProject key={index} data={subData} />
          }
          )
        )
        }
      </div>
    </>
  )
}
