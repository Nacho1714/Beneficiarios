import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Transaccional() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'generacionLiquidacionesMasivaTransaccional', name: 'Generación de Liquidaciones Masiva', label: 'draft' },
            { id: 'generacionLiquidacionesMasivaRangoTransaccional', name: 'Generación de Liquidaciones Masiva x Rango', label: 'draft' },
            { id: 'liquidacionIndividualTransaccional', name: 'Liquidación Individual', label: 'draft' },
            { id: 'consultaTransaccional', name: 'Consulta', label: 'draft' },
            { id: 'listadosTransaccional', name: 'Listados', label: 'draft', subItems: [
                { id: 'inconsistenciasTransaccional', name: 'Inconsistencias', label: 'draft' },
                { id: 'listadoObjetosTransaccional', name: 'Listado por objetos', label: 'draft' },
                { id: 'causasVigentesTransaccional', name: 'Causas Vigentes', label: 'draft' },
                { id: 'totalActoresTransaccional', name: 'Total por actores', label: 'draft' },
                { id: 'listadoLiquidacionesTransaccional', name: 'Listado Liquidaciones', label: 'draft' },
                { id: 'genereacionArchivoTransaccional', name: 'Generación Archivo', label: 'draft' },
                { id: 'listadoTurnosTransaccional', name: 'Listado Turnos', label: 'draft' },
                { id: 'listadoSuscripcionesTransaccional', name: 'Listado Suscripciones', label: 'draft' },
                { id: 'listadoHomologacionesTransaccional', name: 'Listado Homologaciones', label: 'draft' },
            ]},
            { id: 'pagosTransaccional', name: 'Pagos', label: 'draft', subItems: [
                { id: 'compleSuplePrimeraCuotaTransaccional', name: 'Comple/Suple Primera Cuota', label: 'draft' },
                { id: 'pagoMensualCuotasTransaccional', name: 'Pago Mensual de Cuotas', label: 'draft' },
                { id: 'embargoTransaccional', name: 'Embargo', label: 'draft' },
                { id: 'gtPagosHonorarios', name: 'GT-Pagos Honorarios', label: 'draft' },
                { id: 'desprocesoGtPagosHonorariosTransaccional', name: 'Desproceso GT-Pagos Honorarios', label: 'draft' },
            ]},
            { id: 'cargaCbuTransaccional', name: 'Carga CBU', label: 'draft' },
            { id: 'borrarLiqSinSuscripcion', name: 'Borrar liq. sin suscripción', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Transaccional</>
    );
}