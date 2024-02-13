import { type ReactElement } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import Select, {
  type SelectChangeEvent,
  type SelectProps
} from '@mui/material/Select'
import LinearProgress from '@mui/material/LinearProgress'
import { Controller } from 'react-hook-form'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface IOption {
  label: string
  value: string | number
}
interface IProps extends Omit<SelectProps, 'variant'> {
  onInputChange?: (param: unknown) => unknown
  control: any
  name: string
  rules: any
  helperText?: string | undefined
  options: IOption[]
  defaultValue: string | undefined
  loading?: boolean
}

const SelectBasicValidation = (props: IProps): ReactElement => {
  const {
    onInputChange,
    options,
    helperText,
    label,
    control,
    rules,
    name,
    defaultValue,
    loading,
    ...rest
  } = props

  return (
    <>
      <Typography variant={'body1'} color='primary.contrastText'>{label}</Typography>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return (
            <>
              {loading && (
                <Box
                  sx={{
                    border: 'solid 1px',
                    borderRadius: '0.625rem',
                    padding: '3rem 0 0 0',
                    overflow: 'hidden'
                  }}
                >
                  <LinearProgress />
                </Box>
              )}
              {!loading && (
                <Select
                  variant={'outlined'}
                  inputRef={field.ref}
                  size={'small'}
                  fullWidth
                  defaultValue={defaultValue}
                  onChange={(event: SelectChangeEvent<unknown>): void => {
                    field.onChange(event.target.value)
                    if (onInputChange) {
                      onInputChange(event.target.value)
                    }
                  }}
                  {...rest}
                  autoComplete={'off'}
                >
                  {options.map((option) => {
                    return (
                      <MenuItem key={option.value} value={option.value} sx={{ backgroundColor: 'primary.gray', color: 'primary.contrastText'}}>
                        {option.label}
                      </MenuItem>
                    )
                  })}
                </Select>
              )}
            </>
          )
        }}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </>
  )
}

export default SelectBasicValidation
