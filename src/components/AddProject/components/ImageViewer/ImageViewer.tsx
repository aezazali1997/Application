import React, { FC } from 'react'
/* import styles */
import { styles } from './ImageViewer.style';
/* import styles */
type Props = {
  img: string;
}
export const ImageViewer: FC<Props> = ({ img }) => {
  const classes = styles();
  return (
    <div>
      <img className={classes.img} src={img} />

    </div>
  )
}
