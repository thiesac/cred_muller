import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Link, Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

export default function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
                        SeuLogo
                    </Typography>
                    <div>
                        <Link href="#main" underline="none" color="inherit" sx={ { marginRight: 2 } }>
                            Nossos Serviços
                        </Link>
                        <Link href="#about" underline="none" color="inherit" sx={ { marginRight: 2 } }>
                            Sobre
                        </Link>
                        <Link href="#contact" underline="none" color="inherit" sx={ { marginRight: 2 } }>
                            Contato
                        </Link>
                        <IconButton
                            href="https://wa.me/55XXXXXXXXXX/?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                        >
                            <WhatsAppIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
