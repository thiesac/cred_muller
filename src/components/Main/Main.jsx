/* eslint-disable react/jsx-key */
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Money, Receipt, Payment, Security, Edit, MoneyOff } from '@mui/icons-material';
import styles from './Main.module.css'

export default function Main() {
    const theme = useTheme();

    // cards icon
    const icons = [
        <Money />,
        <Receipt />,
        <Payment />,
        <Security />,
        <Edit />,
        <MoneyOff />
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
        <Grid container spacing={ 3 } className={ styles.container }>
            { titles.map((title, index) => (
                <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ index }>
                    <Card>
                        <CardContent>
                            <Typography
                                variant="h5"
                                component="div"
                                color="secondary"
                                gutterBottom
                                style={ { textAlign: 'center' } }
                            >
                                { title }
                            </Typography>
                            <div
                                style={ {
                                    display: 'flex',
                                    justifyContent: 'center',marginBottom: theme.spacing(2)
                                } }>
                                { icons[index] }
                            </div>
                            <Typography variant="body2" color="secondary">
                                Descrição ou detalhes sobre { title } podem ser adicionados aqui.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )) }
        </Grid>
    );
}
