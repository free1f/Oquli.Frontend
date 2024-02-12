import { type ReactElement } from 'react'
import TextField from '@mui/material/TextField'
import { type OutlinedTextFieldProps } from '@mui/material/TextField/TextField'
import { Controller } from 'react-hook-form'

interface IProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  onInputChange?: (param: string) => string
  control: any
  name: string
  accept?: string
  rules: any
  multiple?: boolean
  defaultValue?: string | undefined
  placeholder?: string
}

const InputBasicValidation = (props: IProps): ReactElement => {
  const { defaultValue, label, control, rules, name, placeholder, onInputChange, ...rest } = props

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return (
            <TextField
              label={label}
              placeholder={placeholder}
              focused={false}
              variant={'filled'}
              inputRef={field.ref}
              size={'small'}
              defaultValue={defaultValue}
              onChange={(event) => {
                field.onChange(event.target.value)
                if (onInputChange) {
                  onInputChange(event.target.value)
                }
              }}
              {...rest}
              autoComplete={'off'}
              InputLabelProps={{ 
                shrink: true, 
                // style: { color: '#202022', fontSize: '1.875rem' } 
              }}
            //   sx={{ 
            //     width: '60%',
            //     // color: 'black',
            //     input: {
            //       fontSize: '1.4rem',
            //       '&::placeholder': {
            //         // opacity: 1,
            //         fontSize: '1.4rem',
            //         color: 'primary.dark'
            //       }
            //     }
            //   }}
            />
          )
        }}
      />
    </>
  )
}

export default InputBasicValidation
