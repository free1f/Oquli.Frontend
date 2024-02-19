"use client";
import React, { ReactNode } from 'react';
import Box from "@mui/material/Box"
import Background from "@/app/(infrastructure)/_assets/images/Background.png"
import BackgroundImage from "@/app/(infrastructure)/_components/BackgroundImage/BackgroundImage"
import Container from "@mui/material/Container"

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {

  return (
    <Box sx={{ position: 'relative', minHeight: '95vh' }}>
        <BackgroundImage src={Background} alt="background" backgroundColor='rgba(250, 250, 250, 0.5)' />
        <Container 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding : '5rem 0' 
          }}>
          {children}
        </Container>
    </Box>
  );
}

export default PublicLayout