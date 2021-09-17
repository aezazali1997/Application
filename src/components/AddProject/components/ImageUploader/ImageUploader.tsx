import React, { FC, useState } from 'react';
import { Button, Progress } from '@shared';
import axios from 'axios';
import { ImageViewer } from '../ImageViewer/ImageViewer';
import { styles } from './ImageUploader.style';

type Props = {
  formik: any;
  labelTxt?: string;
};

export const ImageUploader: FC<Props> = ({ formik, labelTxt }) => {
  const classes = styles();
  const [uploading, setUploading] = useState<boolean>(false);
  const imageHandler = async (files: FileList) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('folder', labelTxt?.length ? 'logo' : 'thumbnail');
    formData.append('upload_preset', 'fyj0jf0p');
    await axios
      .post(
        'https://api.cloudinary.com/v1_1/portfoliov1mushaaf/image/upload',
        formData
      )
      .then((response) => {
        formik.setFieldValue(
          labelTxt?.length ? 'client.logo' : 'thumbnail',
          response.data.secure_url
        );
      });
    setUploading(false);
  };

  return (
    <div className={classes.imageContainer}>
      <label className={classes.UploadBtn} htmlFor="image">
        {labelTxt?.length ? 'Company`s Logo' : 'Thumbnail'}
      </label>
      <br />
      <input
        accept="image/*"
        id={labelTxt?.length ? 'logo' : 'thumbnail'}
        className={classes.input}
        type="file"
        onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
          const files = e.currentTarget.files;
          if (!files) return;
          setUploading(true);
          await imageHandler(files);
        }}
      />
      <label htmlFor={labelTxt?.length ? labelTxt : 'thumbnail'}>
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
        {uploading ? (
          <Progress left="95%" />
        ) :
          (<ImageViewer
            img={
              labelTxt?.length
                ? formik.values.client.logo
                : formik.values.thumbnail
            }
          />)
        }
        <br />
      </label>
    </div>
  );
};
