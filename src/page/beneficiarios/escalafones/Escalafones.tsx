import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Escalafones() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'minAntEscalafones', name: 'Min-Ant', label: 'draft' },
            { id: 'evenEscalafones', name: 'Even', label: 'draft' },
            { id: 'difEvEscalafones', name: 'Dif-Ev', label: 'draft' },
            { id: 'evenPsaEscalafones', name: 'Even-Psa', label: 'draft' },
            { id: 'grafEvEscalafones', name: 'Graf-Ev', label: 'draft' },
            { id: 'exntEscalafones', name: 'Exnt', label: 'draft' },
            { id: 'cptHabEscalafones', name: 'Cpt-Hab', label: 'draft', subItems: [
                { id: 'gcionEscalafones', name: 'Gcion', label: 'draft' },
                { id: 'consultaEscalafones', name: 'Consulta', label: 'draft' },
                { id: 'consultaResumidaEscalafones', name: 'Consulta Resumida', label: 'draft' },
                { id: 'bajaEscalafones', name: 'Baja', label: 'draft' },
                { id: 'jBajaEscalafones', name: 'J-Baja', label: 'draft' },
                { id: 'ingresoModifEscalafones', name: 'Ingreso/Modif', label: 'draft' },
                { id: 'listadosEscalafones', name: 'Listados', label: 'draft' },
                { id: 'confirmacionAumentoEscalafones', name: 'Confirmación_Aumento', label: 'draft' },
                { id: 'copiaAumentoEscalafones', name: 'Copia Aumento', label: 'draft' },
            ]},
            { id: 'tabAuxEscalafones', name: 'Tab-Aux', label: 'draft', subItems: [
                { id: 'cptoEscEscalafones', name: 'Cpto-Esc', label: 'draft' },
                { id: 'autCptoEscalafones', name: 'Aut-Cpto', label: 'draft' },
                { id: 'coefEscEscalafones', name: 'Coef-Esc', label: 'draft' },
            ]},
            { id: 'conAumEscalafones', name: 'Con-Aum', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Escalafones</>
    );
}