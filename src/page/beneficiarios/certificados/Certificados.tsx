import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Certificados() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'haberesCertificado', name: 'Haberes', label: 'draft', subItems: [
                { id: 'netoCertificados', name: 'Neto', label: 'draft' },
                { id: 'sSalCertificados', name: 'S-sal', label: 'draft' },
                { id: 'cSalCertificados', name: 'C-sal', label: 'draft' },
                { id: 'cSacCertificados', name: 'C-sac', label: 'draft' },
                { id: 'asociaCertificados', name: 'Asocia', label: 'draft' },
                { id: 'sNetoCertificados', name: 'S-neto', label: 'draft' },
                { id: 'dHabCertificados', name: 'D-hab', label: 'draft' },
                { id: 'consultaCertificados', name: 'Consulta Certificados', label: 'draft' },
                { id: 'listadosCertificados', name: 'Listados Certificados', label: 'draft' },
                { id: 'generarCertificados', name: 'Generar Certificados', label: 'draft' },
            ]},
            { id: 'sinGoceCertificado', name: 'Sin goce', label: 'draft' },
            { id: 'conGoceCertificado', name: 'Con goce', label: 'draft' },
            { id: 'giroCertificado', name: 'Giro', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Certificados</>
    );
}