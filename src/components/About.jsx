import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {
    return (
        <div className="about-container text-center">
            <div className="p-8">
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Sobre Nossa Empresa</h2>
            </div>
            <div className="space-y-4 px-10 max-w-screen-lg m-auto">
                <Accordion>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-controls="panel-content-1"
                        id="panel-header-1"
                    >
                        <Typography variant="subtitle1"><strong>Credmüller</strong></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Bem-vindo à <strong>Credmüller</strong>, sua parceira confiável no mundo financeiro e de seguros. Somos uma corretora especializada, com muita experiência e uma dedicação incansável em servir nossos clientes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-controls="panel-content-2"
                        id="panel-header-2"
                    >
                        <Typography variant="subtitle1">Compra de Dívidas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            No coração de nossas operações está a compreensão profunda das complexidades do mercado financeiro. Como especialistas em compra de dívidas, facilitamos a transição para um futuro financeiro mais estável, oferecendo soluções sob medida que aliviam o peso das dívidas e redefinem a trajetória financeira de nossos clientes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Repita o mesmo padrão para os demais itens */ }
                {/* ... */ }

                <Accordion>
                    <AccordionSummary
                        expandIcon={ <ExpandMoreIcon /> }
                        aria-controls="panel-content-3"
                        id="panel-header-3"
                    >
                        <Typography variant="subtitle1">Crédito e Financiamento</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Além disso, reconhecemos a importância do crédito, tanto para indivíduos quanto para empresas. Nossa expertise em crédito pessoal e PJ permite-nos oferecer orientação precisa e estratégica, assegurando que nossos clientes tenham acesso às melhores oportunidades e vantagens disponíveis no mercado.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Adicione mais Accordion conforme necessário */ }
            </div>
        </div>
    );
}
