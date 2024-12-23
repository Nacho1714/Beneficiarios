import React from 'react';
import { 
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, List, ListItem, ListItemText, Card, CardContent, Accordion, AccordionSummary, AccordionDetails 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FieldDetail {
  name: string;
  type: string;
  purpose: string;
  constraints?: string;
  relatedTables?: {
    tableName: string;
    relationType: string;
    information: string;
  }[];
}

interface TableDocumentationProps {
  tableName: string;
  description: string;
  fields: FieldDetail[];
  notes?: string[];
}

const TableDocumentation: React.FC<TableDocumentationProps> = ({
  tableName,
  description,
  fields,
  notes = [],
}) => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Título */}
      <Typography variant="h4" gutterBottom>
        {tableName}
      </Typography>

      {/* Descripción */}
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Campos */}
      <Typography variant="h5" gutterBottom>
        Campos de la Tabla
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Campo</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
              <TableCell><strong>Propósito</strong></TableCell>
              <TableCell><strong>Restricciones</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={index}>
                <TableCell>{field.name}</TableCell>
                <TableCell>{field.type}</TableCell>
                <TableCell>{field.purpose}</TableCell>
                <TableCell>{field.constraints || 'Ninguna'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Detalles de cada Campo */}
      <Typography variant="h5" gutterBottom>
        Detalles de los Campos
      </Typography>
      {fields.map((field, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{field.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" gutterBottom>
              <strong>Propósito:</strong> {field.purpose}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Tipo:</strong> {field.type}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Restricciones:</strong> {field.constraints || 'Ninguna'}
            </Typography>
            {field.relatedTables && field.relatedTables.length > 0 && (
              <>
                <Typography variant="body2" gutterBottom>
                  <strong>Relaciones con otras tablas:</strong>
                </Typography>
                <List>
                  {field.relatedTables.map((rel, relIndex) => (
                    <ListItem key={relIndex}>
                      <ListItemText
                        primary={`Tabla: ${rel.tableName}`}
                        secondary={`Tipo de Relación: ${rel.relationType}. Información: ${rel.information}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Notas Adicionales */}
      {notes.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom>
            Notas Adicionales
          </Typography>
          <List>
            {notes.map((note, index) => (
              <ListItem key={index}>
                <ListItemText primary={note} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};

export default TableDocumentation;
