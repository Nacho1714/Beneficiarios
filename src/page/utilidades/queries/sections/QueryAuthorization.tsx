import React from 'react';
import { Box, Typography, Divider, TableCell, TableRow, TableContainer, Table, TableBody, Paper, Stack } from '@mui/material';
import CodeBlock from '../../../../component/codeBlock/codeBlock';
import CreditsTag from '../../../../component/credit/Credits';
import { CONTRIBUTORS } from '../../../../interface/contributor';

const QueryAuthorization: React.FC = () => {
    const queryCode = `UPDATE autoriz
SET activo       = "S",
    alta         = "S",
    modificacion = "S",
    baja         = "S",
    consulta     = "S"
WHERE usuario = "baig";`;

    return (
        <Box sx={{ padding: 4 }} id="QueryAuthorization">
            <Typography variant="h4" gutterBottom>
                Modificar el acceso a todas las opciones del sistema
            </Typography>
            
            <Typography variant="body1" gutterBottom>
                Esta query permite modificar los permisos de acceso para todas las opciones del sistema de manera rápida y uniforme.
            </Typography>

            <Stack spacing={2} direction={"row"}>
                <CreditsTag
                    contributorName={CONTRIBUTORS.BARROS_IGNACIO}
                    contributionDetail="Aportó la explicación de esta sección."
                />
                <CreditsTag
                    contributorName={CONTRIBUTORS.CIPRES_YAIR}
                    contributionDetail="Aportó la explicación de esta sección."
                />
            </Stack>

            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
                Código SQL
            </Typography>
            <CodeBlock code={queryCode} language="sql" />

            {/* Explicación de parámetros como tabla */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Explicación de los parámetros
                </Typography>
                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body2">
                                        <strong>activo, alta, modificacion, baja, consulta:</strong>
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        Opciones principales que controlan los accesos a distintas funcionalidades del sistema.
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body2">
                                        <strong>usuario:</strong>
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        Especifica el usuario al que se aplicarán los cambios. En este caso, el usuario es "baig".
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </Box>
    );
};

export default QueryAuthorization;
