import { useEffect } from "react"
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Dgo() {
    
    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'DigitalizacionDocumentos',   name: 'Digitalización Documentos' },
            { id: 'LiquiXSentencias',           name: 'Liqui x Sentencias' },
            { id: 'Casos380',                   name: 'Casos con 380' },
            { id: 'AltaCausasJudiciales',       name: 'Alta Causas Judiciales' },
            { id: 'CasosComplementariaY',       name: 'Casos de complementaria Y' },
            { id: 'ComplementariasCerradasYNJ', name: 'Complementarias Cerradas Y, Ñ y J' },
            { id: 'ListadoPrevision',           name: 'Listado por prevision' },
            { id: 'ListadoPoliciaTerritorial',  name: 'Listado Policia Territorial' },
            { id: 'JuiciosComplesBeneficio',    name: 'Juicios y comples por beneficio' },
            { id: 'ListadoPagosHonorarios',     name: 'Listado de pagos de honorarios' },
        ]);

        return clearDrawer
        
    }, []);

    return (
        <>DGO</>
    )
}