import React from 'react';
import { useQuery } from '@apollo/client';
import { Typography } from '@shared';
import { ProjectType } from '@types';
import { getQuery } from '../../apollo/Query/index';
import { ConfirmProvider } from 'material-ui-confirm';
import { Progress, Breadcrumbs, Box } from '@shared';
import { Link } from 'react-router-dom';
import { CustomizedTables } from '@components/Projects/TabularView/TabularView';
import { useSnackbar } from 'notistack';
import { ERROR_MSG } from '@constants';

export const Projects = () => {
  const { enqueueSnackbar } = useSnackbar();
  const errorMsg = (msg: string) => {
    enqueueSnackbar(`${msg}`, { variant: 'error' });
  };
  const { loading, data } = useQuery<ProjectType>(getQuery);
  return (
    <>
      <Box display="inline-block">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Dashboard
          </Link>
          <Typography color="textPrimary">Projects</Typography>
        </Breadcrumbs>
      </Box>
      <Typography variant="h4" align="center" color="textSecondary">
        Project Details
      </Typography>
      <br />
      {loading ? (
        <Progress />
      ) : !data ? (
        errorMsg(ERROR_MSG)
      ) : (
        <ConfirmProvider>
          <CustomizedTables data={data} />{' '}
        </ConfirmProvider>
      )}
    </>
  );
};
