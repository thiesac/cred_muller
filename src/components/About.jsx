import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {
    const theme = useTheme();

    return (
        <div
            className="about-container text-center"
            style={ { marginTop: theme.spacing(4) } }
        >
            <div className="p-8">
                <h2
                    className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                    style={ { textAlign: 'center' } }
                >
                    Sobre Nossa Empresa
                </h2>
            </div>
            <div className="space-y-4 px-10 max-w-screen-lg m-auto">
                <Accordion>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-controls="panel-content-1"
                        id="panel-header-1"
                    >
                        <Typography variant="subtitle1"><strong>Quem Somos</strong></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ex similique incidunt accusantium explicabo odit, iusto corrupti doloremque eveniet atque temporibus modi dolore asperiores ipsam cupiditate. Totam esse corrupti molestias.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-controls="panel-content-2"
                        id="panel-header-2"
                    >
                        <Typography variant="subtitle1">Missão</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga et nobis voluptatum accusantium ipsa ab temporibus asperiores mollitia minus, quos vero consectetur soluta distinctio amet ut cum facere, veritatis dolor.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-controls="panel-content-3"
                        id="panel-header-3"
                    >
                        <Typography variant="subtitle1">Valores</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consectetur error, repellendus labore dicta officiis saepe autem adipisci, maiores optio accusantium at explicabo est illum nesciunt, mollitia temporibus quasi quae!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}
