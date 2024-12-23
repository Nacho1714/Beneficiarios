import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Expedientes() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'abmExpedientes', name: 'ABM', label: 'draft' },
            { id: 'pasesExpedientes', name: 'Pases', label: 'draft' },
            { id: 'hojasRutaExpedientes', name: 'Hojas de ruta', label: 'draft' },
            { id: 'caratulasExpedientes', name: 'Caratulas', label: 'draft' },
            { id: 'notasExpedientes', name: 'Notas', label: 'draft' },
            { id: 'bajasSmsvExpedientes', name: 'Bajas-SMSV', label: 'draft' },
            { id: 'listadosExpedientes', name: 'Listados', label: 'draft' },
            { id: 'cajasExpedientes', name: 'Cajas', label: 'draft' },
            { id: 'oficinasExpedientes', name: 'Oficinas', label: 'draft' },
            { id: 'organismosExpedientes', name: 'Organismos', label: 'draft' },
            { id: 'objetosExpedientes', name: 'Objetos', label: 'draft' },
            { id: 'fichasExpedientes', name: 'Fichas', label: 'draft' },
            { id: 'expedientesDigitalizadosExpedientes', name: 'Expedientes digitalizados', label: 'draft' },
            { id: 'resolucionesDigitalizadasExpedientes', name: 'Resoluciones digitalizadas', label: 'draft' },
            { id: 'utnDigitExpedientes', name: 'UTN-Digit', label: 'draft' },
            { id: 'cargaExpElectrónicoExpedientes', name: 'Carga Exp Electrónico', label: 'draft' },
            { id: 'cargaNumDictamenExpedientes', name: 'Carga Num Dictamen', label: 'draft' },
            { id: 'cargaNumResolucionExpedientes', name: 'Carga Num Resolución', label: 'draft' },
            { id: 'planillasFuerzasExpedientes', name: 'Planilla de Fuerzas', label: 'draft' },
            { id: 'consultarSolicitanteExpedientes', name: 'Consultar Solicitante', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Expedientes</>
    );
}