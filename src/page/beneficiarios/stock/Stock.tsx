import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Stock() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'abmStock', name: 'ABM', label: 'draft', subItems: [
                { id: 'productosStock', name: 'Productos', label: 'draft' },
                { id: 'proveedoresStock', name: 'Proveedores', label: 'draft' },
                { id: 'ippStock', name: 'I-P-P', label: 'draft' },
                { id: 'tipoIngresoStock', name: 'Tipo Ingreso', label: 'draft' },
            ]},
            { id: 'movimientosStock', name: 'Movimientos', label: 'draft', subItems: [
                { id: 'facturasStock', name: 'Facturas', label: 'draft' },
                { id: 'remitosInternosStock', name: 'Remitos Internos', label: 'draft' },
            ]},
            { id: 'listadosStock', name: 'Listados', label: 'draft', subItems: [
                { id: 'listadoVariosListados', name: 'Listados Varios', label: 'draft' },
                { id: 'listadoRemitosListados', name: 'Listado de Remitos', label: 'draft' },
                { id: 'reportesStockListados', name: 'Reportes de Stock', label: 'draft' },
                { id: 'listadosCierreListados', name: 'Listados de Cierre', label: 'draft' },
            ]},
            { id: 'cierreStockStock', name: 'Cierre de Stock', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Stock</>
    );
}