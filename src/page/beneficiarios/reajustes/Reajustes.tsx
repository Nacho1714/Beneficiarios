import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Reajustes() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'modifReajustes', name: 'Modif.', label: 'draft' },
            { id: 'liquidacReajustes', name: 'Liquidac', label: 'draft' },
            { id: 'existeReajustes', name: 'Existe', label: 'draft' },
            { id: 'illustrReajustes', name: 'Illustr', label: 'draft' },
            { id: 'reimprimirReajustes', name: 'Reimprimir', label: 'draft' },
            { id: 'difReajustes', name: 'Dif', label: 'draft' },
            { id: 'previsionReajustes', name: 'Previsión', label: 'draft', subItems: [
                { id: 'calPrevisionalPrevisionReajustes', name: 'Cal-previsional', label: 'draft' },
                { id: 'cbmPrevisionReajustes', name: 'CBM', label: 'draft' },
                { id: 'previsMasivoPrevisionReajustes', name: 'Previs-Masivo', label: 'draft' },
                { id: 'previaJudMasivoPrevisionReajustes', name: 'Previa-Jud-Masivo', label: 'draft' },
                { id: 'previsLiqDtoJuzMasivoPrevisionReajustes', name: 'Previs-Liq. Dto. Juz.-Masivo', label: 'draft' },
                { id: 'consultaDatosPrevisionReajustes', name: 'Consulta Datos', label: 'draft' },
                { id: 'listadosVariosPrevisionReajustes', name: 'Listados Varios', label: 'draft' },
                { id: 'recuperaPrevisionReajustes', name: 'Recupera', label: 'draft' },
                { id: 'recuperaAltaPrevisionReajustes', name: 'Recupera alta', label: 'draft' },
                { id: 'abmcPrevisionesPrevisionReajustes', name: 'ABMC-previsiones', label: 'draft' },
                { id: 'abcExcluidosPrevisionReajustes', name: 'ABC-Excluidos', label: 'draft' },
                { id: 'inconsPrevisPrevisionReajustes', name: 'Incons-previs', label: 'draft' },
            ]},
            { id: 'judicialReajustes', name: 'Judicial', label: 'draft', subItems: [
                { id: 'indicesJudicialReajustes', name: 'Indices', label: 'draft' },
                { id: 'listTPasivaJudicialReajustes', name: 'List-t-pasiva', label: 'draft' },
            ]},
            { id: 'unicaVezReajustes', name: 'Unica vez', label: 'draft' },
            { id: 'cTipoReajustes', name: 'C-Tipo', label: 'draft' },
            { id: 'titulosReajustes', name: 'Titulos', label: 'draft' },
            { id: 'impNotaReajustes', name: 'Imp-nota', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Reajustes</>
    );
}