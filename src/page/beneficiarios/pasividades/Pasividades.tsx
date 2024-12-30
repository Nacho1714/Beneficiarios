import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Pasividades() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'bajaTotalPasividades', name: 'Baja total', label: 'draft' },
            { id: 'conceptosPasividades', name: 'Conceptos', label: 'draft' },
            { id: 'descuentosDevolucionesPasividades', name: 'Descuentos/Devoluciones', label: 'draft', subItems: [
                { id: 'prestamosBancariosPasividades', name: 'Prestamos bancarios', label: 'draft' },
                { id: 'listadoDescuentosNoProcesadosPasividades', name: 'Listado - Descuentos no procesados', label: 'draft' },
            ]},
            { id: 'descuentosMensualesPasividades', name: 'Descuentos mensuales', label: 'draft' },
            { id: 'obraSocialPasividades', name: 'Obra social', label: 'draft' },
            { id: 'organismosPasividades', name: 'Organismos', label: 'draft' },
            { id: 'seguroObligatorioPasividades', name: 'Seguro obligatorio', label: 'draft' },
            { id: 'fechasDcto894Pasividades', name: 'Fechas Dcto. 894', label: 'draft', subItems: [
                { id: 'consultaFechasDcto894Pasividades', name: 'Consulta', label: 'draft' },
                { id: 'modificacionFechasDcto894Pasividades', name: 'Modificación', label: 'draft' },
            ]},
            { id: 'ddjjDcto894Pasividades', name: 'DDJJ Dcto. 894', label: 'draft', subItems: [
                { id: 'altaddjjDcto894Pasividades', name: 'Alta', label: 'draft' },
                { id: 'consultaddjjDcto894Pasividades', name: 'Consulta', label: 'draft' },
                { id: 'modificacionddjjDcto894Pasividades', name: 'Modificación', label: 'draft' },
                { id: 'bajaddjjDcto894Pasividades', name: 'Baja', label: 'draft' },
                { id: 'listadoUsuarioddjjDcto894Pasividades', name: 'Listado - Usuario', label: 'draft' },
                { id: 'listadoNovedadesddjjDcto894Pasividades', name: 'Listado - Novedades', label: 'draft' },
                { id: 'listadoFechasddjjDcto894Pasividades', name: 'Listado - Fechas', label: 'draft' },
            ]},
            { id: 'medidaCautelarPasividades', name: 'Medida cautelar - Aportes', label: 'draft', subItems: [
                { id: 'ingresarMedidaCautelarPasividades', name: 'Ingresar', label: 'draft' },
                { id: 'consultarMedidaCautelarPasividades', name: 'Consultar', label: 'draft' },
                { id: 'listadosMedidaCautelarPasividades', name: 'Listados', label: 'draft' },
            ]},
            { id: 'sentenciasDefinitivasPasividades', name: 'Sentencias definitivas - Reducc. aportes', label: 'draft', subItems: [
                { id: 'ingresarSentenciasDefinitivasPasividades', name: 'Ingresar', label: 'draft' },
                { id: 'consultarSentenciasDefinitivasPasividades', name: 'Consultar', label: 'draft' },
                { id: 'listadosSentenciasDefinitivasPasividades', name: 'Listados', label: 'draft' },
            ]},
            { id: 'listadoBajaTotalesPasividades', name: 'Listado - Baja totales', label: 'draft' },
            { id: 'listadoOrganismosPasividades', name: 'Listado - Organismos', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Pasividades</>
    );
}