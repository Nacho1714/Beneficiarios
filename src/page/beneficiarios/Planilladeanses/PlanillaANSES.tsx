import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function PlanillaANSES() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'planillaEntradaPlanillaANSES', name: 'Planilla Entrada', label: 'draft' },
            { id: 'generarPlanillaANSES', name: 'Generar', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>PlanillaANSES</>
    );
}