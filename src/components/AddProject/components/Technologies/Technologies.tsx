import React from 'react';
import { useAutocomplete } from '@material-ui/lab';
import { NoSsr, CheckIcon } from '@shared';
import { Tech } from '@constants';
import { Tag } from './Tag/Tag';
import clsx from 'clsx';
import { styles } from './Technologies.style';
type Props = {
  formik: any;
};
export const Technologies: React.FC<Props> = ({ formik }) => {
  let {
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
    value: formik.values.technologies,
    clearOnEscape: true,
    getOptionSelected: (option: string, value: string) => option === value,
    getOptionLabel: (option) => option,
    onChange: (event: React.ChangeEvent<{}>, value: string[] = []) => {
      formik.setFieldValue('technologies', [...value]);
    },
  });
  const classes = styles();
  return (
    <NoSsr>
      <div>
        <div {...getRootProps()}>
          <label {...getInputLabelProps()} className={classes.label}>
            Technologies
          </label>
          <div
            ref={setAnchorEl}
            className={clsx(focused ? 'focused' : '', classes.inputWrapper)}
          >
            {value.map((option: string, index: number) => (
              <Tag key={index} label={option} {...getTagProps({ index })} />
            ))}

            <input {...getInputProps()} />
          </div>
        </div>
        {groupedOptions.length > 0 ? (
          <ul className={classes.ulist} {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li key={index} {...getOptionProps({ option, index })}>
                <span>{option}</span>
                <CheckIcon fontSize="small" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </NoSsr>
  );
};
