import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Censo() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'abmCenso', name: 'ABM Censo', label: 'draft', subItems: [
                { id: 'altaCenso', name: 'Alta', label: 'draft' },
                { id: 'consultaCenso', name: 'Consulta', label: 'draft' },
                { id: 'modificacionCenso', name: 'Modificación', label: 'draft' },
                { id: 'bajaCenso', name: 'Baja', label: 'draft' },
                { id: 'listadosCenso', name: 'Listados', label: 'draft' },
            ]},
            { id: 'fallecidosCenso', name: 'Fallecidos', label: 'draft', subItems: [
                { id: 'listadoBloqCenso', name: 'Listados a Bloq', label: 'draft' },
                { id: 'listadoGerenalCenso', name: 'Listado General', label: 'draft' },
                { id: 'listadoErroneosCenso', name: 'Listado Erroneos', label: 'draft' },
                { id: 'listadoErroneosPendientesCenso', name: 'Listado Erroneos Pendientes', label: 'draft' },
                { id: 'bloqueoBajasCenso', name: 'Bloqueo/Bajas', label: 'draft' },
                { id: 'excluidosCenso', name: 'Excluidos', label: 'draft' },
                { id: 'listadoGeneralApoderadosCenso', name: 'Listado General Apoderados', label: 'draft' },
                { id: 'listadoFallApoderadosCenso', name: 'Listado Fall Apoderados', label: 'draft' },
            ]},
            { id: 'renaperCenso', name: 'Renaper', label: 'draft', subItems: [
                { id: 'altaRenaperCenso', name: 'Alta', label: 'draft' },
                { id: 'bajaRenaperCenso', name: 'Baja', label: 'draft' },
            ]},
        ]);

        return clearDrawer

    }, []);

    return (
        <>Censo</>
    );
}