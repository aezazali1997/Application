import React, { FC } from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@shared';
import DateFnsUtils from '@date-io/date-fns';
type Props = {
  formik: any,
  value: any,
  name: string,
}
export const DatePicker: FC<Props> = ({ formik, value, name }) => {
  return (
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

  )
}
