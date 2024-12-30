import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Supervivencia() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'consultaHImagenesCertificadosSupervivencia', name: 'Consulta-H Imagenes de certificados', label: 'draft' },
            { id: 'listadosSupervivencia', name: 'Listados', label: 'draft', subItems: [
                { id: 'listadosDesbloqueosSupervivencia', name: 'Listados Desbloqueos', label: 'draft' },
                { id: 'listaDesbloqueosFechaSupervivencia', name: 'Lista Desbloqueos Fecha', label: 'draft' },
            ]},

        ]);

        return clearDrawer

    }, []);

    return (
        <>Supervivencia</>
    );
}