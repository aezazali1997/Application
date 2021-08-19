import React, { FC } from 'react'
import { Button } from '@shared';
import axios from 'axios';
import { ImageViewer } from '../ImageViewer/ImageViewer'
import { styles } from './ImageUploader.style';

type Props = {
  formik: any,
  labelTxt?: string
}

export const ImageUploader: FC<Props> = ({ formik, labelTxt }) => {

  const classes = styles();

  const imageHandler = async (files: FileList | null | any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("folder", labelTxt?.length ? "logo" : "thumbnail");
    formData.append("upload_preset", "fyj0jf0p");
    await axios.post("https://api.cloudinary.com/v1_1/portfoliov1mushaaf/image/upload", formData).then((response) => {
      formik.setFieldValue(labelTxt?.length ? "client.logo" : "thumbnail", response.data.secure_url);
    })
  }

  return (
    <div className={classes.imageContainer}>
      <label className={classes.UploadBtn} htmlFor="image">{labelTxt?.length ? 'Company`s Logo' : 'Thumbnail'}</label><br />
      <input
        accept="image/*"
        id={labelTxt?.length ? "logo" : 'thumbnail'}
        className={classes.input}
        type="file"
        onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
          await imageHandler(e.currentTarget.files);
        }}
      />
      <label htmlFor={labelTxt?.length ? labelTxt : 'thumbnail'} >
        <Button variant="contained" color="primary" component="span" >
          Upload
        </Button> <ImageViewer img={labelTxt?.length ? formik.values.client.logo : formik.values.thumbnail} />
        <br />
      </label>
    </div>
  )
}
