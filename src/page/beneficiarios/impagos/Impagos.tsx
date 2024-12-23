import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Impagos() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'Impagos', name: 'Impagos', label: 'draft', subItems:[
                { id: 'consultaImpagos', name: 'Consulta', label: 'draft' },
                { id: 'consultaFecImpagos', name: 'Consulta x fec', label: 'draft' },
                { id: 'consultaCpImpagos', name: 'Consulta x CP', label: 'draft' },
                { id: 'consultaBajaImpagos', name: 'Consulta x baja', label: 'draft' },
                { id: 'altaImpagos', name: 'Alta', label: 'draft' },
                { id: 'bajaImpagos', name: 'Baja', label: 'draft' },
                { id: 'reimpresionImpagos', name: 'Reimpresión', label: 'draft' },
                { id: 'etiquetasImpagos', name: 'Etiquetas', label: 'draft' },
            ]},
            { id: 'habDevImpagos', name: 'Hab dev', label: 'draft', subItems: [
                { id: 'altaImpagos', name: 'Alta', label: 'draft' },
                { id: 'modificacionImpagos', name: 'Modificación', label: 'draft' },
                { id: 'bajaImpagos', name: 'Baja', label: 'draft' },
                { id: 'consultaImpagos', name: 'Consulta', label: 'draft' },
                { id: 'autorizacionImpagos', name: 'Autorización', label: 'draft' },
                { id: 'listadosImpagos', name: 'Listados', label: 'draft' },
            ]},
            { id: 'reintegroImpagos', name: 'Reintegro', label: 'draft', subItems: [
                { id: 'altaReintegroImpagos', name: 'Alta', label: 'draft' },
                { id: 'revisionTesoreriaImpagos', name: 'Revisión Tesorería', label: 'draft' },
                { id: 'rechazadosTesoreriaImpagos', name: 'Rechazados x Tesorería', label: 'draft' },
                { id: 'pendientesTesoreriaImpagos', name: 'Pendientes x Tesorería', label: 'draft' },
                { id: 'globalesIncompletosImpagos', name: 'Globales incompletos', label: 'draft' },
                { id: 'consultaModificacionesImpagos', name: 'Consulta y Modifiaciones', label: 'draft' },
                { id: 'reintegrosModificacionesImpagos', name: 'Reintegros y Modificaciones', label: 'draft' },
                { id: 'rechazosMasivosImpagos', name: 'Rechazos Masivos', label: 'draft' },
                { id: 'consultaRechazosImpagos', name: 'Consulta Rechazos', label: 'draft' },
                { id: 'listadosImpagos', name: 'Listados', label: 'draft' },
            ]},
            { id: 'cargosImpagos', name: 'Cargos', label: 'draft', subItems: [
                { id: '', name: 'Consulta', label: 'draft' },
                { id: '', name: 'Alta', label: 'draft' },
                { id: '', name: 'Baja', label: 'draft' },

            ]},
        ]);

        return clearDrawer

    }, []);

    return (
        <>Impagos</>
    );
}