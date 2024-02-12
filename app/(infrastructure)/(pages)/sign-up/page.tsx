"use client";
import useCount from "@/app/(infrastructure)/_redux/features/count/useCount"
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
              <Button variant="contained">Sign up</Button>
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
      </Paper>
    </PublicLayout>
  );
}

export default Signup