"use client"
import { useState } from "react"
import { Button, Typography } from "@mui/material"
import PrivateLayout from '@/app/(infrastructure)/_components/PrivateLayout/PrivateLayout'
import Paper from '@mui/material/Paper'
import Grid from "@mui/material/Unstable_Grid2"
import HighlightAltOutlinedIcon from '@mui/icons-material/HighlightAltOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import Box from "@mui/material/Box"
import { useRouter } from 'next/navigation'
import SelectStandard from './_components/SelectStandard'
import { PrivateRoutes } from '@/app/(infrastructure)/_routes'
import { useAppSelector, useAppDispatch } from "../../_redux/app/hooks"

const ChatStart = () => {
	const router = useRouter()
	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
	const { email, password } = useAppSelector((state) => state.auth)

	return (
		<PrivateLayout>
			<Paper sx={{ backgroundColor: 'primary.light', width: '95%', padding: '10rem' }}>
				<Grid container spacing={1}>
					<Grid xs={12} md={12}>
						<Box sx={{ display: 'flex', justifyContent: 'center'}}>
							<Typography variant="h1" color='primary.contrastText'>HI, {email}</Typography>
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
							onClick={() => handleOpen()}
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
							onClick={() => console.log('/dashboard')}
						>
							Upload a design standard
						</Button>
					</Grid>
				</Grid>
				<SelectStandard open={open} handleOpen={handleOpen} handleClose={handleClose} />
			</Paper>
		</PrivateLayout>
	)
}

export default ChatStart