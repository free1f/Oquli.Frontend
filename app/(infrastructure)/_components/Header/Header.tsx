'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import OquliLogo from '@/app/(infrastructure)/_assets/images/OquliLogo.png'
import Image from "next/image"
import useAuth from "../../_redux/features/auth/useAuth"

const settings = ['Logout']

function ResponsiveAppBar() {
  
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const { email, logOut } = useAuth()

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleMenuClick = () => {
    logOut()
    handleCloseUserMenu()
  }


  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Image src={OquliLogo} alt="logo" />
          <Box sx={{ flexGrow: 0 }}>
            {
              email.length > 0 && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              )
            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleMenuClick}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
