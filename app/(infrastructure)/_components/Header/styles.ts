import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: { padding: '2rem 1rem' },
  [theme.breakpoints.up('sm')]: { padding: '2rem 3rem' },
  [theme.breakpoints.up('xl')]: { padding: '7rem 9.12rem' }
}))

export const ImgStyled = styled('img')(({ theme }) => ({
  // [theme.breakpoints.up('xs')]: { padding: '1rem 1rem' },
  [theme.breakpoints.down('md')]: { width: '6rem' },
  [theme.breakpoints.up('md')]: { width: '13rem' }
}))
