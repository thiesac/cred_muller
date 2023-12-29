/* eslint-disable react/jsx-key */
import React from 'react';
import { Paper, CardContent, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Money, Receipt, Payment, Security, Edit, MoneyOff } from '@mui/icons-material';
import styles from './Main.module.css'

export default function Main() {
    const theme = useTheme();

    // cards icon
    const icons = [
        <Money color="secondary" style={ { fontSize: '2rem' } } />,
        <Receipt color="secondary" style={ { fontSize: '2rem' } } />,
        <Payment color="secondary" style={ { fontSize: '2rem' } } />,
        <Security color="secondary" style={ { fontSize: '2rem' } } />,
        <Edit color="secondary" style={ { fontSize: '2rem' } } />,
        <MoneyOff color="secondary" style={ { fontSize: '2rem' } } />
    ];

    // cards title
    const titles = [
        "Empréstimo consignado",
        "Compra de dívida",
        "Consórcios",
        "Seguros",
        "Limpeza de nome",
        "Antecipação do FGTS"
    ];

    return (
        <div
            className="about-container text-center"
            style={ { 
                margin: theme.spacing(8),
             } }
        >
            <div className="p-8">
                <h2
                    className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                    style={ {
                        textAlign: 'center',
                        margin: theme.spacing(4),
                        color: theme.palette.primary.main 
                    } }
                >
                    Nossos Serviços
                </h2>
            </div>
            <Grid container spacing={ 3 } className={ styles.container }>
                { titles.map((title, index) => (
                    <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ index }>
                        <Paper
                            elevation={ 2 }
                            style={ {
                                backgroundColor: theme.palette.customColor.main,
                                padding: theme.spacing(2),
                                borderRadius: '6px'
                            } }
                        >
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    color="white"
                                    gutterBottom
                                    style={ { textAlign: 'center' } }
                                >
                                    { title }
                                </Typography>
                                <div
                                    style={ {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: theme.spacing(2)
                                    } }>
                                    { icons[index] }
                                </div>
                                <Typography variant="body2" color="white">
                                    Descrição ou detalhes sobre { title } podem ser adicionados aqui.
                                </Typography>
                            </CardContent>
                        </Paper>
                    </Grid>
                )) }
            </Grid>
        </div>
    );
}
