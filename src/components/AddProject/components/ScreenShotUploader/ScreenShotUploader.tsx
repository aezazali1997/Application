import React, { FC, useState } from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core'
import { useStyles } from './ScreenShotUploader.style';
type Props = {
  formik: any,
  setDisableSubmit: (value: boolean) => void
}
export const ScreenShotUploader: FC<Props> = ({ formik, setDisableSubmit }) => {

  const [images, setImages] = useState<string[]>(formik.values.technologies);
  const classes = useStyles();
  const screenShotHandler = (file: File | null | any) => {
    return new Promise((resolve) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "thumbnail");
      formData.append("upload_preset", "fyj0jf0p");
      axios.post("https://api.cloudinary.com/v1_1/portfoliov1mushaaf/image/upload", formData).then((response) => {
        resolve(response.data.secure_url)
      })
    })
  }
  return (
    <div>
      <div className={classes.imageContainer}>
        <label className={classes.UploadBtn} htmlFor="screenshot">Upload the Screenshot(s)*</label><br />
        <input
          accept="image/*"
          className={classes.input}
          id="screen-shot"
          multiple
          type="file"
          onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.currentTarget.files;
            const readers = [];
            if (!files?.length) return
            for (let i = 0; i < files.length; i++) {
              readers.push(screenShotHandler(files[i]));
            }
            await Promise.all(readers).then((values: any[]) => {
              formik.setFieldValue('images', values)
              setImages(values);
              setDisableSubmit(false);
            })
          }}
        />
        <label htmlFor="screen-shot">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button><br />
          {
            images && (
              images.map((image) => {
                return <img key={image} src={image} className={classes.imgs} />
              })
            )

          }
        </label>
      </div>
    </div>
  )
}
