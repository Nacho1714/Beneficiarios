import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Embargos() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'benCausaEmbargos', name: 'Ben-Causa', label: 'draft' },
            { id: 'bcCptosEmbargos', name: 'BC-Cptos', label: 'draft' },
            { id: 'causasXQuiebraEmbargos', name: 'Causas X Quiebra', label: 'draft' },
            { id: 'consXDocEmbargos', name: 'Cons-X-Doc', label: 'draft' },
            { id: 'consEmbargos', name: 'Cons', label: 'draft' },
            { id: 'consHEmbargos', name: 'Cons-h', label: 'draft' },
            { id: 'rConsEmbargos', name: 'R-Cons', label: 'draft' },
            { id: 'ciudadEmbargos', name: 'Ciudad', label: 'draft' },
            { id: 'bajaEmbargos', name: 'Baja', label: 'draft' },
            { id: 'tCptosEmbargos', name: 'T-Cptos', label: 'draft' },
            { id: 'planillasEmbargos', name: 'Planillas', label: 'draft' },
            { id: 'certificacionesEmbargos', name: 'Certificaciones', label: 'draft' },
            { id: 'salMinVitalEmbargos', name: 'Sal-Min-Vital', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Embargos</>
    );
}