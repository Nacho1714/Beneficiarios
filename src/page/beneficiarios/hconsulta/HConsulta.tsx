import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function HConsulta() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'historiaHConsulta', name: 'Historia', label: 'draft' },
            { id: 'lmensualHConsulta', name: 'L-mensual', label: 'draft' },
            { id: 'lmensualVariosHConsulta', name: 'L-mensual varios', label: 'draft' },
            { id: 'lmensualDocHConsulta', name: 'L-mensual x Doc', label: 'draft' },
            { id: 'lPrevioHConsulta', name: 'L-Previo', label: 'draft' },
            { id: 'histPagosHConsulta', name: 'Hist Pagos', label: 'draft' },
            { id: 'compPagosHConsulta', name: 'Comp Pagos', label: 'draft' },
            { id: 'apellidoHConsulta', name: 'Apellido', label: 'draft' },
            { id: 'subsMutualHConsulta', name: 'Subs Mutual', label: 'draft' },
            { id: 'codPago7HConsulta', name: 'Cod Pago 7', label: 'draft' },
            { id: 'medidaCautelarHConsulta', name: 'Medida cautelar', label: 'draft' },
            { id: 'codigoPostalHConsulta', name: 'Codigo Postal', label: 'draft', subItems: [
                { id: 'codigosPostalesHConsulta', name: 'Codigos postales', label: 'draft' },
            ]},
            { id: 'etiquetasHConsulta', name: 'Etiquetas', label: 'draft', subItems: [
                { id: 'beneficioHConsulta', name: 'Beneficio', label: 'draft' },
                { id: 'clase', name: 'Clase', label: 'draft' },
            ]},
            { id: 'impreHConsulta', name: 'Impre', label: 'draft' },
            { id: 'rangoMesesHConsulta', name: 'Rango_meses', label: 'draft' },
            { id: 'vtoLey26578HConsulta', name: 'Vto Ley 26578', label: 'draft' },
            { id: 'aumentosHConsulta', name: 'Aumentos', label: 'draft' },
            { id: 'listadosCpto265HConsulta', name: 'Litados Cpto 265', label: 'draft', subItems: [
                { id: 'listCpto265HConsulta', name: 'List Cpto 265', label: 'draft' },
                { id: 'ultimoMesHConsulta', name: 'Último mes', label: 'draft' },
            ]},
        ]);

        return clearDrawer

    }, []);

    return (
        <>HConsulta</>
    );
}