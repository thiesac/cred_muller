import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, Grid, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../../public/assets/images/vetorizedlogo.png';

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="lg">
                <Toolbar>
                    <Grid container spacing={ 2 } alignItems="center">
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Typography variant="body1">
                                © { new Date().getFullYear() } CredMuller. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 } container justifyContent="flex-end" spacing={ 2 }>
                            <Grid item>
                                <Link href="https://wa.me/55XXXXXXXXXX/?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20seus%20serviços." target="_blank" rel="noopener noreferrer" color="inherit">
                                    <WhatsAppIcon />
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="https://www.instagram.com/credmuller.seguros" target="_blank" rel="noopener noreferrer" color="inherit">
                                    <InstagramIcon />
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="https://www.facebook.com/credmuller" target="_blank" rel="noopener noreferrer" color="inherit">
                                    <FacebookIcon />
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="https://twitter.com/credmuller" target="_blank" rel="noopener noreferrer" color="inherit">
                                    <TwitterIcon />
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
