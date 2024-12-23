import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Acrecimientos() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'altaAcrecimiento', name: 'Alta', label: "draft" },
            { id: 'modificacionAcrecimiento', name: 'Modificación', label: "draft" },
            { id: 'consultaAcrecimiento', name: 'Consulta', label: 'draft', subItems: [
                { id: 'beneficioAcreciemiento', name: 'Beneficio', label: "draft" },
                { id: 'historicoAcrecimiento', name: 'Historico', label: "draft" },
                { id: 'ultNumAcrecimiento', name: 'Ult.num.', label: "draft" },
            ]},
            { id: 'reconstruccionAcrecimiento', name: 'Reconstrucción', label: "draft" },
            { id: 'vencimientoAcrecimiento', name: 'Vencimiento', label: 'draft', subItems: [
                { id: 'certEstudiosAcrecimiento', name: 'Certificado de estudios', label: "draft" },
                { id: 'mayorHijasAcrecimiento', name: 'Mayor - Hijas', label: "draft" },
                { id: 'mayorHijosAcrecimiento', name: 'Mayor - Hijos', label: "draft" },
                { id: 'estudioAcrecimiento', name: 'Estudio', label: "draft" },
                { id: 'soltSPFAcrecimiento', name: 'Soltera y no convive (SPF)', label: "draft" },
                { id: 'mayor18SPFAcrecimiento', name: 'Mayor 18 años (SPF)', label: "draft" },
                { id: 'acta2262Acrecimiento', name: 'Acta 2262', label: "draft" },
            ]},
            { id: 'consBenefReconsAcrecimiento', name: 'Cons-benef-recons', label: "draft" },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Acrecimientos</>
    )
}