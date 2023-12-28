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
            className={ styles.container }
            sx={ {
                display: 'flex',
                // flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100%',
                textAlign: 'center',
                backgroundColor: theme.palette.primary.main,
                flexGrow: 1
            } }
        >
            <div className="glass-container">
                <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={ 1500 }
                    height={ 1500 }
                />
            </div>
        </Container>
    );
}
