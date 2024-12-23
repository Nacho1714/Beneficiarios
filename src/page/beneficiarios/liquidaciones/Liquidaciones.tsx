import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Liquidaciones() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'aprobLiquidaciones', name: 'Aprob', label: 'draft' },
            { id: 'jBajaLiquidaciones', name: 'J-Baja', label: 'draft' },
            { id: 'hRehabLiquidaciones', name: 'H-Rehab', label: 'draft' },
            { id: 'reimprimirLiquidaciones', name: 'Reimprimir', label: 'draft' },
            { id: 'tCptComplLiquidaciones', name: 'T-Cpt Compl', label: 'draft' },
            { id: 'liqComplLiquidaciones', name: 'Liq compl', label: 'draft', subItems: [
                { id: 'procesosComplesUsuarioLiquidaciones', name: 'Procesos Comples - Usuario', label: 'draft' },
                { id: 'controlProcesosLiquidaciones', name: 'Control de Procesos', label: 'draft' },
                { id: 'procesarCompleLiquidaciones', name: 'Procesar Comple', label: 'draft' },
                { id: 'copiarZipCompleLiquidaciones', name: 'Copiar Zip Comple', label: 'draft' },
                { id: 'recuperarTablasLiquidaciones', name: 'Recuperar Tablas', label: 'draft' },
                { id: 'notifJuzgadoLiquidaciones', name: 'Notif Juzgado', label: 'draft' },
                { id: 'listadoCompleYLiquidaciones', name: 'Listado Comple Y', label: 'draft' },
                { id: 'generarArchivoAltasWebLiquidaciones', name: 'Generar Archivo Altas Web', label: 'draft' },
                { id: 'generarArchivoGtHdLiquidaciones', name: 'Generar Archivo GT HD', label: 'draft' },
                { id: 'generarCarpetasInformePagoLiquidaciones', name: 'Generar Carpetas - Informe Pago', label: 'draft' },
            ]},
            { id: 'iafLiquidaciones', name: 'IAF', label: 'draft', subItems: [
                { id: 'ingresaIafLiquidaciones', name: 'Ingresa', label: 'draft' },
                { id: 'buscaIafLiquidaciones', name: 'Busca', label: 'draft' },
                { id: 'modifIafLiquidaciones', name: 'Modif', label: 'draft' },
                { id: 'elimIafLiquidaciones', name: 'Elim', label: 'draft' },
                { id: 'consultaIafLiquidaciones', name: 'Consulta Tope Gral Brigada', label: 'draft' },
            ]},
            { id: 'cptosLiquidaciones', name: 'Cptos', label: 'draft', subItems: [
                { id: 'ingresoCptosLiquidaciones', name: 'Ingreso', label: 'draft' },
                { id: 'modifCptosLiquidaciones', name: 'Modif', label: 'draft' },
                { id: 'consultaCptosLiquidaciones', name: 'Consulta', label: 'draft' },
                { id: 'bajaCptosLiquidaciones', name: 'Baja', label: 'draft' },
            ]},
            { id: 'dctoLiquidaciones', name: 'Dcto', label: 'draft' },
            { id: 'unicaVezLiquidaciones', name: 'Unica vez', label: 'draft', subItems: [
                { id: 'ingresoUnicaVezLiquidaciones', name: 'Ingreso', label: 'draft' },
                { id: 'modifUnicaVezLiquidaciones', name: 'Modif', label: 'draft' },
                { id: 'consultaUnicaVezLiquidaciones', name: 'Consulta', label: 'draft' },
                { id: 'bajaUnicaVezLiquidaciones', name: 'Baja', label: 'draft' },
            ]},
            { id: 'bajaTotalLiquidaciones', name: 'Baja total', label: 'draft' },
            { id: 'noReduccLiquidaciones', name: 'No-reducc', label: 'draft' },
            { id: 'anulaReduccLiquidaciones', name: 'Anula-reducc', label: 'draft' },
            { id: 'modifReduccLiquidaciones', name: 'Modif-reducc', label: 'draft' },
            { id: 'tipoLiquidaciones', name: 'Tipo', label: 'draft' },
            { id: 'ctlProcLiquidaciones', name: 'Ctl-Proc', label: 'draft', subItems: [
                { id: 'ingresaCtlProcLiquidaciones', name: 'Ingresa', label: 'draft' },
                { id: 'buscaCtlProcLiquidaciones', name: 'Busca', label: 'draft' },
                { id: 'modifCtlProcLiquidaciones', name: 'Modif', label: 'draft' },
                { id: 'elimCtlProcLiquidaciones', name: 'Elim', label: 'draft' },
            ]},
        ]);

        return clearDrawer

    }, []);

    return (
        <>Liquidaciones</>
    );
}