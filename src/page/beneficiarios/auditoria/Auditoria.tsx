import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Auditoria() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'ingresoImagenesAuditoria', name: 'Ingreso imagenes Auditoria', label: 'draft' },
            { id: 'consultaImagenesAuditoria', name: 'Consulta imagenes Auditoria', label: 'draft' },
            { id: 'bajaImagenesAuditoria', name: 'Baja imagenes Auditoria', label: 'draft' },
            { id: 'listadosAuditoria', name: 'Listados', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Auditoria</>
    );
}