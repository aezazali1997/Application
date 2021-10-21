import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, Box, Typography, TextField, Breadcrumbs } from '@shared';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { ImageUploader } from './components/ImageUploader/ImageUploader';
import { validationSchema } from '@components/AddProject/FormValidation/FormValidation';
import { ScreenShotUploader } from './components/ScreenShotUploader/ScreenShotUploader';
import { Technologies } from './components/Technologies/Technologies';
import { DatePicker } from './components/DatePicker/DatePicker';
import { createProject, updateProject } from '../../apollo/Mutation/index';
import { getQuery } from '../../apollo/Query/index';
import { AddProjectModel } from '@models';
import { useSnackbar } from 'notistack';
import { styles } from './AddProject.style';
import {
  UPDATE_MSG,
  ERR_UPDATE_MSG,
  CREATE_MSG,
  ERR_CREATE_MSG,
} from '@constants';
type Props = {
  data?: AddProjectModel;
};

export const AddProject: React.FC<Props> = ({ data }) => {
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();
  const Project: AddProjectModel = new AddProjectModel(data);

  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
  const [formSubmit, { loading }] = useMutation(createProject, {
    refetchQueries: () => [{ query: getQuery }],
  });
  const [updateSubmit] = useMutation(updateProject, {
    refetchQueries: () => [{ query: getQuery }],
  });

  const onSubmit = async (values: AddProjectModel) => {
    data
      ? await updateSubmit({
        variables: {
          id,
          ...values,
        },
      })
        .then(() => {
          enqueueSnackbar(`${UPDATE_MSG}`, { variant: 'success' });
        })
        .catch(() => {
          enqueueSnackbar(`${ERR_UPDATE_MSG}`, { variant: 'error' });
        })
      : await formSubmit({
        variables: values,
      })
        .then(() => {
          enqueueSnackbar(`${CREATE_MSG}`, { variant: 'success' });
          formik.resetForm();
          setDisableSubmit(true);
        })
        .catch(() => {
          enqueueSnackbar(`${ERR_CREATE_MSG}`, { variant: 'error' });
        });
  };
  const formik = useFormik({
    initialValues: Project,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;
  const classes = styles();
  return (
    <Box>
      {loading && (
        <div className={classes.overlay}>
          <CircularProgress className={classes.progress} />
        </div>
      )}
      <Box display="inline-block">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Dashboard
          </Link>
          <Typography color="textPrimary">
            {data ? 'Edit' : 'Add'} Project
          </Typography>
        </Breadcrumbs>
      </Box>
      <Typography align="center" variant="h4" color="textSecondary">
        {data ? 'Edit' : 'Add'} Project
      </Typography>

      <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Title*"
          name="title"
          value={values.title}
          onChange={handleChange}
          error={touched.title && !!errors.title}
          helperText={touched.title && errors.title}
        />
        <TextField
          label="Subtitle*"
          name="subtitle"
          value={values.subtitle}
          onChange={handleChange}
          error={touched.subtitle && !!errors.subtitle}
          helperText={touched.subtitle && errors.subtitle}
        />
        <TextField
          label="Company Name*"
          name="name"
          value={values.client.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            formik.setFieldValue('client.name', e.currentTarget.value);
          }}
          error={touched.client?.name && !!errors.client?.name}
          helperText={touched.client?.name && errors.client?.name}
        />
        <ImageUploader formik={formik} labelTxt="logo" />
        <TextField
          label="Project Type*"
          name="projectType"
          value={values.projectType}
          onChange={handleChange}
          error={touched.projectType && !!errors.projectType}
          helperText={touched.projectType && errors.projectType}
        />
        <DatePicker formik={formik} value={formik.values.start} name="start" />
        <DatePicker formik={formik} value={formik.values.end} name="end" />
        <TextField
          label="Role*"
          name="role"
          value={values.role}
          onChange={handleChange}
          error={touched.role && !!errors.role}
          helperText={touched.role && errors.role}
        />
        <TextField
          label="Summary"
          name="summary"
          value={values.summary}
          onChange={handleChange}
          error={touched.summary && !!errors.summary}
          helperText={touched.summary && errors.summary}
        />
        <TextField
          label="Challenge"
          name="challenge"
          value={values.challenge}
          onChange={handleChange}
          error={touched.challenge && !!errors.challenge}
          helperText={touched.challenge && errors.challenge}
        />
        <TextField
          label="Solution*"
          name="solution"
          value={values.solution}
          onChange={handleChange}
          error={touched.solution && !!errors.solution}
          helperText={touched.solution && errors.solution}
        />
        <TextField
          label="URL*"
          name="url"
          value={values.url}
          onChange={handleChange}
          error={touched.url && !!errors.url}
          helperText={touched.url && errors.url}
        />
        <Technologies formik={formik} />
        <ImageUploader formik={formik} />
        <ScreenShotUploader
          formik={formik}
          setDisableSubmit={setDisableSubmit}
        />
        <br />
        <Button
          className={classes.submitBtn}
          type="submit"
          variant="contained"
          color="primary"
          disabled={!data ? disableSubmit : false}
        >
          {data ? 'Update' : 'Submit'}
        </Button>
      </form>
    </Box>
  );
};
