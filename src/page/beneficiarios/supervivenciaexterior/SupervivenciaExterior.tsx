import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function SupervivenciaExterior() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'altaSupervivenciaExterior', name: 'Alta', label: 'draft' },
            { id: 'consultaSupervivenciaExterior', name: 'Consulta', label: 'draft' },
            { id: 'listadosSupervivenciaExterior', name: 'Listados', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>SupervivenciaExterior</>
    );
}