import React from 'react';
import TableDocumentation from './algo';

const tesorer_comple: React.FC = () => {
  return (
    <TableDocumentation
      tableName="tesorer_comple"
      description="Tabla que almacena las operaciones de tesorería del sistema."
      fields={[
        {
          name: 'id',
          type: 'INTEGER',
          purpose: 'Identificador único de la operación.',
          constraints: 'PRIMARY KEY, AUTO_INCREMENT',
        },
        {
          name: 'account_id',
          type: 'INTEGER',
          purpose: 'Identifica la cuenta asociada a la operación.',
          relatedTables: [
            {
              tableName: 'accounts',
              relationType: 'Foreign Key',
              information: 'Obtiene los detalles de la cuenta asociada.',
            },
            {
              tableName: 'transactions',
              relationType: 'Relación inversa',
              information: 'Proporciona el historial de transacciones relacionadas.',
            },
          ],
        },
        {
          name: 'amount',
          type: 'DECIMAL(10,2)',
          purpose: 'Monto de la transacción.',
          constraints: 'Debe ser mayor a 0.',
        },
        {
          name: 'status',
          type: 'ENUM',
          purpose: 'Estado de la operación (pendiente, completada, cancelada).',
          constraints: 'Debe ser un valor válido.',
        },
      ]}
      notes={[
        'Las transacciones pendientes se eliminan automáticamente después de 30 días.',
        'Los índices en campos claves mejoran el rendimiento en consultas frecuentes.',
      ]}
    />
  );
};

export default tesorer_comple;