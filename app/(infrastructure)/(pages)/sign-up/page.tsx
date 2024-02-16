"use client";
import { useState } from 'react'
import { Button, Typography } from "@mui/material"
import PublicLayout from '@/app/(infrastructure)/_components/PublicLayout/PublicLayout'
import Paper from '@mui/material/Paper'
import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import Link from '@mui/material/Link'
import InputBasicValidation from '@/app/(infrastructure)/_components/InputBasicValidation/InputBasicValidation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Checkbox from '@mui/material/Checkbox'
import { useRouter } from "next/navigation"
import { PublicRoutes } from "@/app/(infrastructure)/_routes"
import useAuth from "../../_redux/features/auth/useAuth"
import CircularProgress from '@mui/material/CircularProgress'

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
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

  const router = useRouter()
  const axios = require('axios')
  const { _setUser } = useAuth()
  const [loader, setLoader] = useState(false)

  const handleRegister = async (data: any) => {
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
      setLoader(true)
      console.log('response', response)
      _setUser(data.email, data.password)
      setTimeout(() => {
        router.push('/chat-start')
        setLoader(false)
      }, 6000)
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
                  placeholder="Enter your first name..."
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputBasicValidation
                  label={'Last Name'}
                  name='lastName'
                  control={control}
                  placeholder="Enter your last name..."
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputBasicValidation
                  label={'Company'}
                  name='company'
                  control={control}
                  placeholder="Enter company name..."
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputBasicValidation
                  label={'User Type'}
                  name='userType'
                  control={control}
                  placeholder="Select type"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <InputBasicValidation
                  label={'Email'}
                  name='email'
                  control={control}
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
                  />
                  <Typography 
                    variant="body1" 
                    color='primary.contrastText'
                  >
                    I agree with the 
                  </Typography>
                  &nbsp;
                  <Link 
                    variant="body1" 
                    color='secondary.contrastText'
                    href='#'
                    underline="none"
                  >
                    Terms & Services
                  </Link>
                </Box>
              </Grid>
              <Grid xs={12} md={12}>
                <Button variant="contained" onClick={handleSubmit(d => handleRegister(d))}>Sign up</Button>
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
                    variant="body1" 
                    color='secondary.contrastText'
                    href={PublicRoutes.LOGIN}
                    underline="none"
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