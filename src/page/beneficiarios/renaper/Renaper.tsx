import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Renaper() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'consultarMasivoRenaper', name: 'Consultar - Masivo', label: 'draft' },
            { id: 'consultarArchivoRenaper', name: 'Consultar - Archivo', label: 'draft' },
            { id: 'consultarIndividualRenaper', name: 'Consultar - Individual', label: 'draft' },
            { id: 'consultarUltimoRegistroRenaper', name: 'Consultar - Ultimo registro', label: 'draft' },
            { id: 'bajaBloqueoMasivoRenaper', name: 'Baja/Bloqueo masivo', label: 'draft' },
            { id: 'excluidosRenaper', name: 'Excluidos', label: 'draft' },
            { id: 'listadosRenaper', name: 'Listados', label: 'draft', subItems: [
                { id: 'mensual', name: 'Mensual', label: 'draft' },
                { id: 'procesos', name: 'Procesos', label: 'draft' },
            ]},
        ]);

        return clearDrawer

    }, []);

    return (
        <>Renaper</>
    );
}