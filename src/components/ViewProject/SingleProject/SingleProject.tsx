import React, { FC } from 'react'
import { styles } from './SingleProject.style'
import { Typography } from '@shared'
import { partialData } from '@types'
import Moment from 'react-moment';

type Props = {
  data: partialData
}
export const SingleProject: FC<Props> = ({ data: { title, end, thumbnail } }) => {
  const classes = styles();
  return (
    <div className={classes.wrapper}  >
      < Typography variant="body1">{title}</Typography><br />
      <img className={classes.img} src={thumbnail} alt="" /><br />
      <Typography><Moment format="DD/MM/YYYY">{end}</Moment> </Typography> <br />
    </div>
  )
}

