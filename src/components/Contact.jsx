import React from 'react';
import { Typography, Container, Box, useTheme } from '@mui/material';

export default function Contact() {
    const theme = useTheme();

    return (
        <Container
            component="div"
            maxWidth="lg"
            style={ {
                paddingTop: theme.spacing(8),
                paddingBottom: theme.spacing(8),
            } }
        >
            <Typography
                variant="h4"
                className="mt-2 text-center p-8"
                style={ {
                    textAlign: 'center',
                    marginTop: theme.spacing(4),
                    marginBottom: theme.spacing(4),
                    color: theme.palette.primary.main
                } }
            >
                Contato
            </Typography>
            <Box className="space-y-4 mx-10 text-center">
                <Typography variant="body1">
                    Rua Lauro Melo, 127, CopaRondon, Rondonópolis - MT
                </Typography>
            </Box>
            <Box className="google-map-container p-10 md:p-0">
                <iframe
                    width="100%"
                    height="600"
                    style={ { border: 0 } }
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.2181565270618!2d-54.6221845344576!3d-16.48065305123667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c81b5d3d764f%3A0xdba3e7b74928dd5f!2sR.%20Lauro%20Melo%2C%20127%20-%20Parque%20Real%2C%20Rondon%C3%B3polis%20-%20MT%2C%2078740-351!5e0!3m2!1sen!2sbr!4v1703339429594!5m2!1sen!2sbr"
                    allowFullScreen
                    title="Google Maps"
                ></iframe>
            </Box>
        </Container>
    );
}
