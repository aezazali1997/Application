import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title:Yup.string()
    .min(4,'Title text is too short!')
    .required('Required!'),
  subtitle:Yup.string()
    .min(4,'Subtitle text is too short!')
    .required('Required!'),
  projectType:Yup.string()
    .min(2,'Project Type not valid!')
    .required("Required!"),
  role:Yup.string()
    .min(4,'Role is not valid!')
    .required('Required!'),
  summary:Yup.string()
    .min(10,'Summary text too short!'),
  challenge:Yup.string()
    .min(10,'Challenge text is too short!'),
  solution:Yup.string()
    .min(10,'Solution text is too short!')
    .required('Required!'),
  url:Yup.string()
    .min(8,'Url must be minimum 8 characters long!')
    .matches(/^(ftp|http|https):\/\/[^ "]+$/,'Url is not valid!')
    .required('Required!')
})