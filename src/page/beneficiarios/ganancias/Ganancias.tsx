import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Ganancias() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'juradaAltaModificacionGanancias', name: 'Jurada - Alta y modificación', label: 'draft' },
            { id: 'juradaEliminacionGanancias', name: 'Jurada - Eliminación', label: 'draft' },
            { id: 'conceptosDeducciblesGanancias', name: 'Conceptos deduccibles', label: 'draft' },
            { id: 'gananciaNetaImponible', name: 'Ganancia neta imponible', label: 'draft' },
            { id: 'tiposDeduccionesGanancias', name: 'Tipos de deducciones', label: 'draft' },
            { id: 'deduccionesEspecialesGanancias', name: 'Deducciones especiales', label: 'draft' },
            { id: 'consultaGanancias', name: 'Consulta', label: 'draft', subItems: [
                { id: 'juradaConsultaGanancias', name: 'Jurada - Consulta', label: 'draft' },
                { id: 'resumenMensualGanancias', name: 'Resúmen mensual', label: 'draft' },
                { id: 'resumenAnualGanancias', name: 'Resúmen anual', label: 'draft' },
                { id: 'complementariasReajusteGanancias', name: 'Complementarias por reajuste', label: 'draft' },
                { id: 'subsidioMutualGanancias', name: 'Subsidio mutual', label: 'draft' },
                { id: 'tiposResumenGanancias', name: 'Tipos de resúmen', label: 'draft' },
            ]},
            { id: 'listadosGanancias', name: 'Listados', label: 'draft', subItems: [
                { id: 'agenteRetencionGanancias', name: 'Agente de retención', label: 'draft' },
                { id: 'suspendidosRetenidosGanancias', name: 'Suspendidos - Retenidos', label: 'draft' },
                { id: 'deduccionesGanancias', name: 'Deducciones', label: 'draft' },
                { id: 'deduccionEspecialEspecificaGanancias', name: 'Deducción especial y especifica', label: 'draft' },
                { id: 'comparativoMensualGanancias', name: 'Comparativo - Mensual', label: 'draft' },
                { id: 'comparativoSiradigGanancias', name: 'Comparativo - SIRADIG', label: 'draft' },
                { id: 'deudaGanancias', name: 'Deuda', label: 'draft' },
                { id: 'oficioJudicialGanancias', name: 'Oficio judicial - Medida cautelar', label: 'draft' },
                { id: '334Ganancias', name: '334', label: 'draft' },
                { id: '581Ganancias', name: '581', label: 'draft' },
                { id: 'pisosGanancias', name: 'Pisos', label: 'draft' },
                { id: 'rangoMesesGanancias', name: 'Rango meses', label: 'draft' },
                { id: 'suplementariasGanancias', name: 'Suplementarias', label: 'draft' },
                { id: 'complementariasGanancias', name: 'Complementarias', label: 'draft' },
                { id: 'mensualGanancias', name: 'Mensual', label: 'draft' },
                { id: 'maestroControlPrevioGanancias', name: 'Maestro Control Previo', label: 'draft' },
            ]},
            { id: 'certificadosGanancias', name: 'Certificados', label: 'draft', subItems: [
                { id: 'formulario1357Ganancias', name: 'Formulario 1357', label: 'draft' },
                { id: 'formulario1357MasivoGanancias', name: 'formulario 1357 - Masivo', label: 'draft' },
            ]},
            { id: 'sicoreGanancias', name: 'SICORE', label: 'draft' },
            { id: 'siradigGanancias', name: 'SIRADIG', label: 'draft', subItems: [
                { id: 'afipWebGanancias', name: 'AFIP - Web', label: 'draft' },
                { id: 'procesoImportacionGanancias', name: 'Proceso de importación', label: 'draft' },
            ]},
            { id: 'liquidacionFinalGanancias', name: 'Liquidación final', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Ganancias</>
    );
}