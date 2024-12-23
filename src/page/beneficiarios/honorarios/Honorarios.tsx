import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Honorarios() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'altaHonorarios', name: 'Alta', label: 'draft' },
            { id: 'buscaHonorarios', name: 'Busca', label: 'draft' },
            { id: 'modifHonorarios', name: 'Modif', label: 'draft' },
            { id: 'consultaHonorarios', name: 'Consulta', label: 'draft' },
            { id: 'consNotasHonorarios', name: 'Cons-Notas', label: 'draft' },
            { id: 'impresionHonorarios', name: 'Impresión', label: 'draft' },
            { id: 'impReajHonorarios', name: 'Imp-reaj', label: 'draft' },
            { id: 'impMasivaHonorarios', name: 'Imp-masiva', label: 'draft' },
            { id: 'elimTotalHonorarios', name: 'Elim-total', label: 'draft' },
            { id: 'elimReajusteHonorarios', name: 'Elim-reajuste', label: 'draft' },
            { id: 'generarPlanillaHonorarios', name: 'Generar Planilla', label: 'draft' },
            { id: 'compleHonorHonorarios', name: 'Comple-Honor', label: 'draft' },
            { id: 'bnaHonorarios', name: 'BNA', label: 'draft' },
            { id: 'desprocesoBNAHonorarios', name: 'Desproceso BNA', label: 'draft' },
            { id: 'AboFallecHonorarios', name: 'Abo-Fallec', label: 'draft' },
            { id: 'mofifReajFallecHonorarios', name: 'Modif-Reaj-fallec', label: 'draft' },
            { id: 'leyendaHonorariosHonorarios', name: 'Leyenda Honorarios', label: 'draft', subItems: [
                { id: 'cargarLeyendaHonorarios', name: 'Cargar leyenda', label: 'draft' },
                { id: 'consultarLeyendaHonorarios', name: 'Consultar leyenda', label: 'draft' },
            ]},
            { id: 'embargoHonosHonorarios', name: 'Embargo Honos - Cargar fecha pago', label: 'draft' },
            { id: 'valorUmaHonorarios', name: 'Valor UMA', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Honorarios</>
    );
}