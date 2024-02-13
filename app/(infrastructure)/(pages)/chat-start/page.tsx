"use client"
import { Button, Typography } from "@mui/material"
import PrivateLayout from '@/app/(infrastructure)/_components/PrivateLayout/PrivateLayout'
import Paper from '@mui/material/Paper'
import Grid from "@mui/material/Unstable_Grid2"
import HighlightAltOutlinedIcon from '@mui/icons-material/HighlightAltOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import Box from "@mui/material/Box"
import Link from '@mui/material/Link'
import InputBasicValidation from '@/app/(infrastructure)/_components/InputBasicValidation/InputBasicValidation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Checkbox from '@mui/material/Checkbox'
import { useRouter } from "next/navigation"
import { PublicRoutes } from "@/app/(infrastructure)/_routes"

const ChatStart = () => {
  return (
    <PrivateLayout>
      <Paper sx={{ backgroundColor: 'primary.light', width: '95%', padding: '10rem' }}>
        <Grid container spacing={1}>
            <Grid xs={12} md={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Typography variant="h1" color='primary.contrastText'>HI, USER1!</Typography>
                </Box>
            </Grid>
            <Grid xs={12} md={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Typography variant="h1" color='primary.contrastText'>SELECT A DESIGN STANDARD TO START</Typography>
                </Box>
            </Grid>
            <Grid xs={12} md={6} sx={{ mt: '3rem', pr: '1.5rem'}}>
                <Button 
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<HighlightAltOutlinedIcon sx={{ fontSize: '2rem !important'}} />}
                >
                    Select a design standard
                </Button>
            </Grid>
            <Grid xs={12} md={6} sx={{ mt: '3rem', pl: '1.5rem'}}>
                <Button 
                    variant="outlined"
                    color="primary"
                    fullWidth
                    startIcon={<FileUploadOutlinedIcon sx={{ fontSize: '2rem !important'}} />}
                >
                    Upload a design standard
                </Button>
            </Grid>
        </Grid>
      </Paper>
    </PrivateLayout>
  )
}

export default ChatStart