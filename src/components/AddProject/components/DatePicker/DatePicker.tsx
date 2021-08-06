import React, { FC } from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
/* import styles */
import { useStyles } from './DatePicker.style';
/* import styles */
type Props = {
  formik: any,
  value: any,
  name: string,
}
export const DatePicker: FC<Props> = ({ formik, value, name }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          label={`Project ${name}`}
          value={value}
          onChange={(date) => {
            formik.setFieldValue(`${name}`, date)
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

