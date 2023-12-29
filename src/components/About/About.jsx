import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {
    const theme = useTheme();
    const [expanded1, setExpanded1] = useState(true);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(true);

    return (
        <div
            className="about-container text-center"
            style={ {
                paddingTop: theme.spacing(8),
                paddingBottom: theme.spacing(8),
                backgroundColor: theme.palette.backgroundGolden.main,
            } }
        >
            <div className="p-8">
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
                    Sobre Nossa Empresa
                </Typography>
            </div>
            <div className="space-y-4 px-10 max-w-screen-lg m-auto">
                <Accordion
                    expanded={ expanded1 }
                    onChange={ () => setExpanded1(!expanded1) }
                    style={ {
                    marginLeft: theme.spacing(12),
                    marginRight: theme.spacing(12),
                    backgroundColor: 'white',
                    color: theme.palette.primary.main 
                } }
                >
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

                <Accordion
                    expanded={ expanded2 }
                    onChange={ () => setExpanded2(!expanded2) }
                    style={ {
                        marginLeft: theme.spacing(12),
                        marginRight: theme.spacing(12),
                        backgroundColor: 'white',
                        color: theme.palette.primary.main
                    } }
                >
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-controls="panel-content-2"
                        id="panel-header-2"
                    >
                        <Typography variant="subtitle1"><strong>Missão</strong></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga et nobis voluptatum accusantium ipsa ab temporibus asperiores mollitia minus, quos vero consectetur soluta distinctio amet ut cum facere, veritatis dolor.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={ expanded3 }
                    onChange={ () => setExpanded3(!expanded3) }
                    style={ {
                        marginLeft: theme.spacing(12),
                        marginRight: theme.spacing(12),
                        backgroundColor: 'white',
                        color: theme.palette.primary.main
                    } }
                >
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-controls="panel-content-3"
                        id="panel-header-3"
                    >
                        <Typography variant="subtitle1"><strong>Valores</strong></Typography>
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
