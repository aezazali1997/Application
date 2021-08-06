import React, { useEffect } from 'react';
import { useAutocomplete } from '@material-ui/lab';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import { Tech } from '@constants'
import { Tag } from './Tag/Tag'
import { InputWrapper, Label, Listbox } from './Technologies.style'
import { ITechnologies } from '@interfaces'
type Props = {
  formik: any
}
export const Technologies: React.FC<Props> = ({ formik }) => {
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

  useEffect(() => {
    if (value) {
      const temp: string[] = [];
      value.map((Val) => {
        temp.push(Val.title)
      })
      formik.setFieldValue('technologies', [...temp])
    }
  }, [value])

  return (
    <NoSsr >
      <div>
        <div {...getRootProps()}>
          <Label {...getInputLabelProps()}>Technologies</Label>
          <InputWrapper defaultValue={formik.values.technologies} ref={setAnchorEl} className={focused ? 'focused' : ''}>
            {

              formik.values.technologies ? formik.values.technologies.map((option: string, index: number) => (
                <Tag key={index} label={option} {...getTagProps({ index })} />
              ))
                : formik.values.technologies.map((option: ITechnologies, index: number) => (
                  <Tag key={index} label={option.title} {...getTagProps({ index })} />)
                )
            }
            <input {...getInputProps()} />
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li key={index} {...getOptionProps({ option, index })}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" />
              </li>
            ))}
          </Listbox>
        ) : null}
      </div>
    </NoSsr>
  );
}


