import React from 'react';
import { Box, Typography, Divider, TableCell, TableRow, TableContainer, Table, TableBody, Paper } from '@mui/material';
import CodeBlock from '../../../../component/codeBlock/codeBlock';

const QueryAuthorization: React.FC = () => {
    const queryCode = `UPDATE autoriz
SET activo       = "S",
    alta         = "S",
    modificacion = "S",
    baja         = "S",
    consulta     = "S",
    miscelanea   = "S",
    miscelanea2  = "S",
    protegido    = "S"
WHERE usuario = "baig";`;

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Modificar el acceso a todas las opciones del sistema
            </Typography>
            <Typography variant="body1" gutterBottom>
                Esta query permite modificar los permisos de acceso para todas las opciones del sistema de manera rápida y uniforme.
            </Typography>
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
                                        <strong>miscelanea, miscelanea2:</strong>
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        Campos adicionales que pueden representar permisos personalizados.
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body2">
                                        <strong>protegido:</strong>
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        Indica si el acceso a esta opción está protegido contra modificaciones externas.
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
