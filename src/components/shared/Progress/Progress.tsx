import React from 'react'
import { CircularProgress } from '@shared'
import { styles } from './Progress.style';
export const Progress = () => {
  const classes = styles();
  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  )
}
