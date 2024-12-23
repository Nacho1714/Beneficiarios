import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Complementarias() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'procesosComplesUsuarioComplementarias', name: 'Procesos Comples - Usuario', label: 'draft', subItems: [
                { id: 'procesoComplementarias', name: 'Proceso de Complementarias', label: 'draft' },
                { id: 'gananciasPreviaComplementarias', name: 'Ganancias - Previa', label: 'draft' },
                { id: 'gananciasDefiComplementarias', name: 'Ganancias - Defi', label: 'draft' },
                { id: 'embargosComplesSuplesComplementarias', name: 'Embargos de Comples y Suples', label: 'draft' },
                { id: 'generacionRecibosComplementarias', name: 'Generación Recibos', label: 'draft' },
                { id: 'desprocesoCompleDefiComplementarias', name: 'Desproceso Comple Defi', label: 'draft' },
                { id: 'subprocesosEspecificacionesCompleTComplementarias', name: 'Subprocesos Especificos Comple T', label: 'draft' },
                { id: 'listadosComplementarias', name: 'Listados', label: 'draft' },
            ]},
            { id: 'controlProcesosComplementarias', name: 'Control de Procesos', label: 'draft' },
            { id: 'procesarCompleComplementarias', name: 'Procesar Comple', label: 'draft' },
            { id: 'copiarZipCompleComplementarias', name: 'Copiar Zip Comple', label: 'draft' },
            { id: 'recuperarTablasComplementarias', name: 'Recuperar Tablas', label: 'draft' },
            { id: 'notifJuzgadoComplementarias', name: 'Notif - Juzgado', label: 'draft' },
            { id: 'listadoCompleYComplementarias', name: 'Listado Comple Y', label: 'draft' },
            { id: 'generarArchivoAltasWebComplementarias', name: 'Generar Archivo Altas Web', label: 'draft' },
            { id: 'generarArchivoGtHdComplementarias', name: 'Generar Archivo GT HD', label: 'draft' },
            { id: 'generarCarpetasInformePagoComplementarias', name: 'Generar Carpetas - Informe Pago', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Complementarias</>
    );
}