import React from 'react';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    const theme = useTheme();

    return (
        <Container
            maxWidth={ false }
            sx={ {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                backgroundColor: theme.palette.primary.main,
            } }
        >
            <div
                sx={ {
                    margin: {
                        xs: theme.spacing(1),   
                        sm: theme.spacing(1.5), // equivalente a '12px'
                        md: theme.spacing(2),   // equivalente a '16px'
                        lg: theme.spacing(3),   // equivalente a '24px'
                        xl: theme.spacing(4),   // equivalente a '32px'
                    }
                } }
            >
                <Image
                    src="/assets/images/vetorizedlogo.png"
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </Container>
    );
}
