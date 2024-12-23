import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Aportes() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'cargaMasivaAportes', name: 'Carga Masiva - Aportes', label: 'draft' },
            { id: 'cargaAportes', name: 'Carga - Aportes', label: 'draft' },
            { id: 'consultaOrgAportes', name: 'Consulta - Aportes por organismo', label: 'draft' },
            { id: 'consultaPersonaAportes', name: 'Consulta - Aportes por persona', label: 'draft' },
            { id: 'consultaRangoMesesAportes', name: 'Consulta - Aportes por rango de meses', label: 'draft' },
            { id: 'listadoAportes', name: 'Listado - Aportes', label: 'draft' },
            { id: 'listadoTotalesAportes', name: 'Listado de Totales', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Aportes</>
    );
}