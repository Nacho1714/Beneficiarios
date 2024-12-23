import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Bonos() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'acreditacionBonos', name: 'Acreditación', label: 'draft' },
            { id: 'consultaBonos', name: 'Consulta', label: 'draft' },
            { id: 'bajaBonos', name: 'Baja', label: 'draft' },
            { id: 'modifBonos', name: 'Modif', label: 'draft' },
            { id: 'imprimePantallaBonos', name: 'Imprime Pantalla', label: 'draft' },
            { id: 'formularioBonos', name: 'Formulario', label: 'draft' },
            { id: 'procsBonos', name: 'Procs', label: 'draft', subItems: [
                { id: 'envioBonos', name: 'Envio', label: 'draft' },
                { id: 'vueltaBonos', name: 'Vuelta', label: 'draft' },
                { id: 'disketteBonos', name: 'Diskette', label: 'draft' },
                { id: 'etiquetaBonos', name: 'Etiqueta', label: 'draft' },
                { id: 'tenenciaBonos', name: 'Tenencia', label: 'draft' },
                { id: 'tenenAbogBonos', name: 'Tenen-Abog', label: 'draft' },
                { id: 'reenvBonos', name: 'Reenv', label: 'draft' },
                { id: 'bcoAgciaBonos', name: 'Bco/Agcia', label: 'draft' },
                { id: 'reducidoBonos', name: 'Reducido', label: 'draft' },
                { id: 'fDevBonos', name: 'F.Dev', label: 'draft' },
                { id: 'lBcoBonos', name: 'L.Bco', label: 'draft' },
                { id: 'lAbogBonos', name: 'L.Abog', label: 'draft' },
                { id: 'zdeshacherBonos', name: 'Zdeshacer', label: 'draft' },
                { id: 'obleasBonos', name: 'Obleas', label: 'draft' },
            ]},
            { id: 'saldoBonos', name: 'Saldo_no_acr', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Bonos</>
    );
}