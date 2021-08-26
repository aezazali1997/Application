import React, { FC } from 'react';
import { styles } from './ImageViewer.style';

type Props = {
  img: string;
};

export const ImageViewer: FC<Props> = ({ img }) => {
  const classes = styles();

  return <img className={classes.img} src={img} />;
};
