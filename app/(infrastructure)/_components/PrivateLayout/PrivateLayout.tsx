"use client";
import React, { ReactNode } from 'react';
import Box from "@mui/material/Box"
import Background from "@/app/(infrastructure)/_assets/images/Background.png"
import BackgroundImage from "@/app/(infrastructure)/_components/BackgroundImage/BackgroundImage"
import Container from "@mui/material/Container"
import ContextProviders from "@/app/(infrastructure)/_contexts/ContextProviders";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {

  return (
    <ContextProviders>
      <Box sx={{ position: 'relative', minHeight: '95vh' }}>
        <BackgroundImage src={Background} alt="background" backgroundColor='rgba(250, 250, 250)' />
        <Container 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding : '3rem 0',
            minHeight: '91.4vh'
          }}>
          {children}
        </Container>
      </Box>
    </ContextProviders>
  );
}

export default PrivateLayout