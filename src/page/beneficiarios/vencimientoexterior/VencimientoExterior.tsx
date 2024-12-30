import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function VencimientoExterior() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'autorizVencimientoExterior', name: 'Autoriz', label: 'draft' },
            { id: 'modifVtoExtVencimientoExterior', name: 'Modif Vto Ext', label: 'draft' },
            { id: 'bajaVtoExtVencimientoExterior', name: 'Baja Vto Ext', label: 'draft' },
            { id: 'consultaVencimientoExterior', name: 'Consulta', label: 'draft' },
            { id: 'regresoVencimientoExterior', name: 'Regreso', label: 'draft' },
            { id: 'envBlqVencimientoExterior', name: 'Env-Blq', label: 'draft' },
            { id: 'listVencimientoExterior', name: 'List', label: 'draft' },
            { id: 'ctrlSupVencimientoExterior', name: 'Ctrl-Sup', label: 'draft', subItems: [
                { id: 'consultaHImagenesCertificadosVencimientoExterior', name: 'Consulta-H Imagenes de certificados', label: 'draft' },
                { id: 'ListadosVencimientoExterior', name: 'Listados', label: 'draft' },
            ]},
        ]);

        return clearDrawer

    }, []);
    return (
        <>VencimientoExterior</>
    );
}