'use client'
import * as React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

const BoxList = ({ isEmpty, emptyMessage, list }: { isEmpty: boolean, emptyMessage: string, list: any[] }) => {
  return (
    <Box 
			sx={{ 
				height: '10rem', 
				backgroundColor: 'primary.gray', 
				p: '1rem', 
				m: '1rem 0', 
				borderRadius: '10px',
			}}
		>
			{
				isEmpty ? (
					<Box 
						sx={{ 
							height: 'inherit', 
							display: 'flex', 
							alignItems: 'center', 
							justifyContent: 'center', 
						}}
					>
						<Typography variant='body1' color='primary.contrastText'>
							{emptyMessage}
						</Typography>
					</Box>
				) : (
					<Box 
						sx={{ 
							height: '100%', 
							display: 'flex',
							flexDirection: 'column',
							overflow: 'auto'
						}}
					>
						{
							list.map((item, index) => {
								return (
									<Typography 
										variant='body1' 
										color='primary.contrastText' 
										key={index}
										sx={{ ':hover': { cursor: 'pointer', backgroundColor: 'secondary.main', opacity: 0.5 } }}
									>
										{item.label}
									</Typography>
								)
							})
						}
					</Box>
				)
			}
		</Box>
  )
}
export default BoxList
