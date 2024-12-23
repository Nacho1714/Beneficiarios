import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function BienesDeUso() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'altaBienBienesDeUso', name: 'Alta Bien', label: 'draft' },
            { id: 'ejecucionPresupuestariaBienesDeUso', name: 'Ejecución Presupuestaria', label: 'draft' },
            { id: 'listadoBienesDeUso', name: 'Listados', label: 'draft', subItems: [
                { id: 'ingresosEjercicioBienesDeUso', name: 'Ingresos por Ejercicio', label: 'draft' },
                { id: 'bajaEjercicioBienesDeUso', name: 'Bajas por Ejercicio', label: 'draft' },
                { id: 'bienesBienesDeUso', name: 'Bienes', label: 'draft' },
                { id: 'listEjecucionPresupuestariaBienesDeUso', name: 'Ejecución presupuestaria', label: 'draft' },
                { id: 'comparativoBienesDeUso', name: 'Comparativo', label: 'draft' },
                { id: 'amotizacionBienesDeUso', name: 'Amortización', label: 'draft' },
                { id: 'BienDeUsoBienesDeUso', name: 'Bien de uso', label: 'draft' },
                { id: 'oficinasBienesDeUso', name: 'Oficinas', label: 'draft' },
            ]},
            { id: 'ejecutarAmortizacionBienesDeUso', name: 'Ejecutar Amortización Anual', label: 'draft' },
            { id: 'fechaCierreAnualBienesDeUso', name: 'Fecha de Cierre Anual', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>BienesDeUso</>
    );
}