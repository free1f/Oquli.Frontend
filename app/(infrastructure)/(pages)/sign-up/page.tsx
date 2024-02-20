"use client";
import { useState } from 'react'
import { Button, Typography } from "@mui/material"
import PublicLayout from '@/app/(infrastructure)/_components/PublicLayout/PublicLayout'
import Paper from '@mui/material/Paper'
import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import Link from 'next/link'
import InputBasicValidation from '@/app/(infrastructure)/_components/InputBasicValidation/InputBasicValidation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Checkbox from '@mui/material/Checkbox'
import { PublicRoutes } from "@/app/(infrastructure)/_routes"
import useAuth from "../../_redux/features/auth/useAuth"
import CircularProgress from '@mui/material/CircularProgress'
import { SelectBasicValidation } from '../../_components/SelectBasicValidation'
import { persistLocalStorage } from "@/app/(infrastructure)/_utils/localStorage"

const schema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  company: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string()
  .required('Password is required')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match').required()
}).required()

const Signup = () => {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  console.log(errors)

  const router = useRouter()
  const axios = require('axios')
  const { _setUser } = useAuth()
  const [loader, setLoader] = useState(false)
  const [disableButton, setDisableButton] = useState(true)

  const handleRegister = async (data: any) => {
    console.log('data', data)
    setLoader(true)
    const baseURL = process.env.NEXT_PUBLIC_API_URL
    const instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    instance.post('/register', {
      username: `user-${Math.floor(Math.random() * 1000)}`,
      firstName: data.name,
      lastName: data.lastName,
      company: data.company,
      userType: data.userType,
      email: data.email,
      password: data.password
    }).then((response: any) => {
      console.log('response', response)
      router.push('/login')
      // _setUser(data.email, data.password)
      // persistLocalStorage('user', { token: response.data, email: data.email})
      // setTimeout(() => {
      //   router.push('/chat-start')
      // }, 6000)
    }).catch((error: any) => {
      console.log('error', error)
      setLoader(false)
    })
  }

  return (
    <PublicLayout>
      <Paper sx={{ backgroundColor: 'primary.light', width: '45%', padding: '3rem 5rem' }}>
        {
          loader ? (
            <Grid container spacing={2}>
              <Grid xs={12} md={12}>
                <Typography 
                  variant="h1" 
                  color='primary.contrastText' 
                  sx={{ fontWeight: 900 }}
                >
                  ALL SET.
                </Typography>
              </Grid>
              <Grid xs={12} md={12}>
                <Typography variant="body1" color='primary.contrastText'>
                  Your account has been created. You will be redirected to the platform now.
                </Typography>
              </Grid>
              <Grid xs={12} md={12} sx={{ margin: '5rem 0'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                  <CircularProgress 
                    style={{ width: '10rem', height: '10rem' }}
                    sx={{ color: 'secondary.main' }} />
                </Box>
              </Grid>
            </Grid>
          ) :
          (
            <Grid container spacing={2}>
              <Grid xs={12} md={12}>
                <Typography 
                  variant="h1" 
                  color='primary.contrastText' 
                  sx={{ fontWeight: 900 }}
                >
                  SIGN UP.
                </Typography>
              </Grid>
              <Grid xs={12} md={12} sx={{ margin: '2rem 0'}}>
                <Typography variant="body1" color='primary.contrastText'>
                  Welcome to OQULi! Enter your details below to create your account.
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <InputBasicValidation
                  label={'First Name'}
                  name='name'
                  control={control}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : ''}
                  placeholder="Enter your first name..."
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputBasicValidation
                  label={'Last Name'}
                  name='lastName'
                  control={control}
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ''}
                  placeholder="Enter your last name..."
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputBasicValidation
                  label={'Company'}
                  name='company'
                  control={control}
                  error={!!errors.company}
                  helperText={errors.company ? errors.company.message : ''}
                  placeholder="Enter company name..."
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <SelectBasicValidation
                  label={'User Type'}
                  name='userType'
                  control={control}
                  placeholder="Select type"
                  options={[
                    { label: 'Developer', value: 'developer' },
                    { label: 'Developer1', value: 'developer1' }
                  ]}
                  defaultValue="developer"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <InputBasicValidation
                  label={'Email'}
                  name='email'
                  control={control}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ''}
                  placeholder="Enter your email..."
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <InputBasicValidation
                  label={'Password'}
                  name='password'
                  type="password"
                  control={control}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ''}
                  placeholder="Enter your password..."
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <InputBasicValidation
                  label={'Confirm Password'}
                  name='confirmPassword'
                  type="password"
                  control={control}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                  placeholder="Confirm your password..."
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={12} sx={{ margin: '2rem 0'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <Checkbox 
                    inputProps={{
                      'aria-labelledby': 'logged-in-checkbox'
                    }} 
                    size="small"
                    sx={{ 
                      p: '0 0.5rem 0 0', 
                      color: 'secondary.contrastText',
                      '&.Mui-checked': {
                        color: 'secondary.contrastText',
                      },
                    }}
                    onChange={(e) => setDisableButton(!disableButton)}
                  />
                  <Typography 
                    variant="body1" 
                    color='primary.contrastText'
                  >
                    I agree with the 
                  </Typography>
                  &nbsp;
                  <Link 
                    color='secondary.contrastText'
                    href='#'
                    target="_blank"
                  >
                    Terms & Services
                  </Link>
                </Box>
              </Grid>
              <Grid xs={12} md={12}>
                <Button 
                  variant="contained" 
                  onClick={handleSubmit(d => handleRegister(d))}
                  disabled={disableButton}
                >
                  Sign up
                </Button>
              </Grid>
              <Grid xs={12} md={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Typography 
                    variant="body1" 
                    color='primary.contrastText'
                  >
                    Already have an account?
                  </Typography>
                  &nbsp;
                  <Link 
                    color='secondary.contrastText'
                    href={PublicRoutes.LOGIN}
                  >
                    Log in
                  </Link>
                </Box>
              </Grid>
            </Grid>
          )
        }
      </Paper>
    </PublicLayout>
  );
}

export default Signup