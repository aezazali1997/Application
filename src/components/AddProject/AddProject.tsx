import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Button, Box, Typography, TextField } from '@material-ui/core';
import { ImageUploader } from './components/ImageUploader/ImageUploader'
import { useMutation } from '@apollo/client'
import { ScreenShotUploader } from './components/ScreenShotUploader/ScreenShotUploader'
import { validationSchema } from '@services/Form'
import { Technologies } from './components/Technologies/Technologies'
import { DatePicker } from './components/DatePicker/DatePicker'
import { createMutation, updateMutation } from '@services/Mutation';
import { getQuery } from '@services/Query'
import { AddProjectModel } from '@models'
import { useParams } from 'react-router-dom'
import { useStyles } from './AddProject.style';
type Props = {
  data?: AddProjectModel
}
const AddProject: React.FC<Props> = ({ data }) => {
  const Project: AddProjectModel = new AddProjectModel(data);
  const { id } = useParams();
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
  const [formSubmit] = useMutation(createMutation,
    { refetchQueries: () => [{ query: getQuery }] })
  const [updateSubmit] = useMutation(updateMutation,
    { refetchQueries: () => [{ query: getQuery }] })
  const onSubmit = async ({ challenge, client, end, images, projectType, role, solution, start, subtitle, summary, technologies, thumbnail, title, url }: AddProjectModel) => {
    const temp: AddProjectModel = new AddProjectModel();
    data ? await updateSubmit({
      variables: {
        id,
        title,
        subtitle,
        client: {
          name: client.name,
          logo: client.logo
        },
        projectType,
        start,
        end,
        role,
        summary,
        challenge,
        solution,
        thumbnail,
        technologies,
        url,
        images
      }
    }) : await formSubmit({
      variables: values
    })
  }
  const formik = useFormik({
    initialValues: Project,
    /*   validationSchema, */
    onSubmit,
    enableReinitialize: true,
  })
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h4" color="textSecondary" >{data ? 'Edit' : 'Add'} Project</Typography>
      <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <TextField label="Title*" name="title" value={values.title} onChange={handleChange} error={touched.title && !!errors.title} helperText={touched.title && errors.title} />
        <TextField label="Subtitle*" name="subtitle" value={values.subtitle} onChange={handleChange} error={touched.subtitle && !!errors.subtitle} helperText={touched.subtitle && errors.subtitle} />
        <TextField label="Company Name*" name="name" value={values.client.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          formik.setFieldValue("client.name", e.currentTarget.value);
        }} />
        <ImageUploader formik={formik} labelTxt="logo" />
        <TextField label="Project Type*" name="projectType" value={values.projectType} onChange={handleChange} error={touched.projectType && !!errors.projectType} helperText={touched.projectType && errors.projectType} />
        <DatePicker formik={formik} value={formik.values.start} name="start" />
        <DatePicker formik={formik} value={formik.values.end} name="end" />
        <TextField label="Role*" name="role" value={values.role} onChange={handleChange} error={touched.role && !!errors.role} helperText={touched.role && errors.role} />
        <TextField label="Summary" name="summary" value={values.summary} onChange={handleChange} error={touched.summary && !!errors.summary} helperText={touched.summary && errors.summary} />
        <TextField label="Challenge" name="challenge" value={values.challenge} onChange={handleChange} error={touched.challenge && !!errors.challenge} helperText={touched.challenge && errors.challenge} />
        <TextField label="Solution*" name="solution" value={values.solution} onChange={handleChange} error={touched.solution && !!errors.solution} helperText={touched.solution && errors.solution} />
        <TextField label="URL*" name="url" value={values.url} onChange={handleChange} error={touched.url && !!errors.url} helperText={touched.url && errors.url} />
        <Technologies formik={formik} />
        <ImageUploader formik={formik} />
        <ScreenShotUploader formik={formik} setDisableSubmit={setDisableSubmit} />
        <br />
        <Button className={classes.submitBtn} type="submit" variant="contained" color="primary" disabled={data ? false : disableSubmit}>{data ? 'Update' : 'Submit'}
        </Button>
      </form>
    </Box>
  )
}
export default AddProject