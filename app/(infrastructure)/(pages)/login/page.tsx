"use client"
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
import { useRouter } from "next/navigation"
import { PublicRoutes } from "@/app/(infrastructure)/_routes"

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
}).required()

interface IFormInputs {
  TextField: string
  MyCheckbox: boolean
}

const Login = () => {
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

  return (
    <PublicLayout>
      <Paper sx={{ backgroundColor: 'primary.light', width: '45%', padding: '3rem 5rem' }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={12}>
            <Typography 
              variant="h1" 
              color='primary.contrastText' 
              sx={{ fontWeight: 900 }}
            >
              LOG IN.
            </Typography>
          </Grid>
          <Grid xs={12} md={12} sx={{ margin: '2rem 0'}}>
            <Typography variant="body1" color='primary.contrastText'>Welcome back!</Typography>
          </Grid>
          <Grid xs={12} md={12}>
            <InputBasicValidation
              label={'Email'}
              name='email'
              control={control}
              placeholder="Enter your email..."
              rules={{
                required: true
              }}
            />
          </Grid>
          <Grid xs={12} md={12}>
            <InputBasicValidation
              label={'Password'}
              name='password'
              control={control}
              placeholder="Enter your password..."
              type="password"
              rules={{
                required: true
              }}
            />
          </Grid>
          <Grid xs={12} md={12} sx={{ m: '2rem 0'}}>
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
                Keep me logged in
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={12} sx={{ mb: '1rem'}}>
              <Button variant="contained">Log in</Button>
          </Grid>
          <Grid xs={12} md={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Typography 
                variant="body1" 
                color='primary.contrastText'
              >
                Don&apos;t have an account?
              </Typography>
              &nbsp;
              <Link
                href={PublicRoutes.SIGNUP}
                style={{ textDecoration: 'none' }}
              >
                <Typography variant="body1" color='secondary.contrastText'>
                  Sign up
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid xs={12} md={12} sx={{ mb: '1rem'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Link 
                href={PublicRoutes.FORGOT_PASSWORD}
                style={{ textDecoration: 'none' }}
              >
                <Typography variant="body1" color='secondary.contrastText'>
                  Forgot password?
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </PublicLayout>
  )
}

export default Login