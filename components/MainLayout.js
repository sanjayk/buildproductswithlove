import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';

import { Roboto_Serif } from '@next/font/google';

const robotoSerif = Roboto_Serif({ subsets: ['latin'] });

export default class MainLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className='layout'>
        <Container maxWidth='xl' disableGutters>
          <Box sx={{ bgcolor: '#f0ebe0', height: '100vh', pt: 2 }}>
            <AppBar
              color='transparent'
              position='relative'
              elevation={0}
              sx={{ borderBottom: 1, borderColor: 'secondary', pl: 6, pr: 6 }}
            >
              <Toolbar>
                <Box
                  variant='h1'
                  sx={(theme) => ({
                    fontSize: '16pt',
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '12pt',
                    },
                    fontWeight: '500',
                  })}
                  className={robotoSerif.className}
                >
                  <Link
                    href='/'
                    style={{ textDecoration: 'none', color: '#000000' }}
                  >
                    BUILD PRODUCTS WITH
                  </Link>
                </Box>
                <FavoriteIcon sx={{ ml: 2 }} style={{ color: 'red' }} />
              </Toolbar>
            </AppBar>
            {children}
          </Box>
        </Container>
      </div>
    );
  }
}
