import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function NotasInternas() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'envioNotasNotasInternas', name: 'Envio Notas', label: 'draft' },
            { id: 'recepcionNotasNotasInternas', name: 'Recepción Notas', label: 'draft' },
            { id: 'consultaNotasInternas', name: 'Consulta', label: 'draft' },
            { id: 'listadosNotasInternas', name: 'Listados', label: 'draft', subItems: [
                { id: 'notasEnviadasNotasInternas', name: 'Notas Enviadas', label: 'draft' },
                { id: 'notasRecibidasNotasInternas', name: 'Notas Recibidas', label: 'draft' },
                { id: 'notasEnviadasFechaNotasInternas', name: 'Notas Enviadas x Fecha', label: 'draft' },
                { id: 'notasRecibidaFechaNotasInternas', name: 'Notas Recibidas x Fecha', label: 'draft' },
                { id: 'notasRecepcionadasNotasInternas', name: 'Notas no Recepcionadas', label: 'draft' },
            ]},
        ]);

        return clearDrawer

    }, []);

    return (
        <>NotasInternas</>
    );
}