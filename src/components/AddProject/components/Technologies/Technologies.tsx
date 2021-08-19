import React, { useEffect } from 'react';
import { useAutocomplete } from '@material-ui/lab';
import { NoSsr, CheckIcon } from '@shared'
import { Tech } from '@constants'
import { Tag } from './Tag/Tag'
import clsx from 'clsx';
import { styles } from './Technologies.style'

type Props = {
  formik: any,
  projects?: string[],
}

export const Technologies: React.FC<Props> = ({ formik, projects }) => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,

  } = useAutocomplete({
    multiple: true,
    options: Tech,
    getOptionLabel: (option) => option.title,
  });
  const classes = styles();
  useEffect(() => {
    if (value) {
      const temp: string[] = projects || [];
      value.map((techs) => {
        temp.push(techs.title)
      })
      formik.setFieldValue('technologies', [...temp])
    }
  }, [value])

  return (
    <NoSsr >
      <div>
        <div {...getRootProps()}>
          <label className={classes.label} {...getInputLabelProps()}>Technologies</label>
          <div defaultValue={formik.values.technologies} ref={setAnchorEl} className={clsx(focused ? 'focused' : '', classes.inputWrapper)}>
            {
              formik.values.technologies.map((option: string, index: number) => (
                <Tag key={index} label={option} {...getTagProps({ index })} />
              ))
            }
            <input {...getInputProps()} />
          </div>
        </div>
        {
          groupedOptions.length > 0 ? (
            <ul className={classes.ulist} {...getListboxProps()}>
              {
                groupedOptions.map((option, index) => (
                  <li key={index} {...getOptionProps({ option, index })}>
                    <span>{option.title}</span>
                    <CheckIcon fontSize="small" />
                  </li>
                ))
              }
            </ul>
          ) : null}
      </div>
    </NoSsr>
  );
}


