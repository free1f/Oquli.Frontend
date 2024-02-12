"use client"
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

interface IFormInputs {
  TextField: string
  MyCheckbox: boolean
}

const ChangePassword = () => {
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
              SET A NEW PASSWORD.
            </Typography>
          </Grid>
          <Grid xs={12} md={12} sx={{ margin: '2rem 0'}}>
            <Typography variant="body1" color='primary.contrastText'>
              Enter a new password to access the platform.
            </Typography>
          </Grid>
          <Grid xs={12} md={12}>
            <InputBasicValidation
              label={'Enter new password'}
              name='password'
              control={control}
              placeholder="Enter a new password..."
              type="password"
              rules={{
                required: true
              }}
            />
          </Grid>
          <Grid xs={12} md={12}>
            <InputBasicValidation
              label={'Confirm new password'}
              name='confirmedPassword'
              control={control}
              placeholder="Confirm your password..."
              type="password"
              rules={{
                required: true
              }}
            />
          </Grid>
          <Grid xs={12} md={12} sx={{ m: '3rem 0 0 0'}}>
            <Button variant="contained">Save</Button>
          </Grid>
          <Grid xs={12} md={12}>
            <Button variant="outlined">Cancel</Button>
          </Grid>
        </Grid>
      </Paper>
    </PublicLayout>
  )
}

export default ChangePassword