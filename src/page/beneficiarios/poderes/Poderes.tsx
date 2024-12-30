import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Poderes() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'abmcPoderes', name: 'ABMC', label: 'draft' },
            { id: 'consFallecPoderes', name: 'Cons-Fallec', label: 'draft' },
            { id: 'vencimientoPoderes', name: 'Vencimiento', label: 'draft' },
            { id: 'notificPoderes', name: 'Notific', label: 'draft', subItems: [
                { id: 'bloqueoCartasPoderes', name: 'Bloqueo y Cartas', label: 'draft' },
                { id: 'reiteracionCartasPoderes', name: 'Reiteración de Cartas', label: 'draft' },
            ]},
            { id: 'proxVencPoderes', name: 'Prox-venc', label: 'draft' },
            { id: 'listVencPoderes', name: 'List-venc', label: 'draft' },
            { id: 'listDirBenPoderes', name: 'List-DirBen', label: 'draft' },
            { id: 'listadoApoderadosPoderes', name: 'Listado-Apoderados', label: 'draft' },
            { id: 'listadoControlPoderes', name: 'Listado-Control', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Poderes</>
    );
}