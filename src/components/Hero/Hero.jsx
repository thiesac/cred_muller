import React from 'react';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
// import styles from './Hero.module.css';

export default function Hero() {
    const theme = useTheme();

    return (
        <Container
            maxWidth={ false }
            // className={ styles.container }
            sx={ {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                width: '100%',
                textAlign: 'center',
                zIndex: 1,
                backgroundColor: theme.palette.primary.main,
                // flexGrow: 1
            } }
        >
            {/* <div className="glass-container"> */}
                <Image
                    src="/assets/images/vetorizedlogo.png"
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                    sx={ {
                        padding: {
                            xs: '8px',
                            sm: '12px',
                            md: '16px',
                            lg: '24px',
                            xl: '32px',
                        }
                    } }
                />
            {/* </div> */}
        </Container>
    );
}
