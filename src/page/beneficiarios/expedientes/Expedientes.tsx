import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Expedientes() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'abmExpedientes', name: 'ABM', label: 'draft' },
            { id: 'pasesExpedientes', name: 'Pases', label: 'draft' },
            { id: 'hojasRutaExpedientes', name: 'Hojas de ruta', label: 'draft', subItems: [
                { id: 'nuevasExpedientes', name: 'Nuevas', label: 'draft' },
                { id: 'consultaExpedientes', name: 'Consulta', label: 'draft' },
                { id: 'genArchivoExpedientes', name: 'Gen Archvio', label: 'draft' },
                { id: 'codBarrasHojarRutaExpedientes', name: 'Cod Barras x Hoja Ruta', label: 'draft' },
                { id: 'listadoHojaRutaExpedientes', name: 'Listado x Hoja Ruta', label: 'draft' },
            ]},
            { id: 'caratulasExpedientes', name: 'Caratulas', label: 'draft' },
            { id: 'notasExpedientes', name: 'Notas', label: 'draft', subItems: [
                { id: 'notasExpedientes', name: 'Notas', label: 'draft' },
                { id: 'abmTiposNotaExpedientes', name: 'ABM Tipos Nota', label: 'draft' },
            ]},
            { id: 'bajasSmsvExpedientes', name: 'Bajas-SMSV', label: 'draft', subItems: [
                { id: 'cargaCasosExpedientes', name: 'Carga Casos', label: 'draft' },
                { id: 'bajaSmsvExpedientes', name: 'Baja SMSV', label: 'draft' },
            ]},
            { id: 'listadosExpedientes', name: 'Listados', label: 'draft', subItems: [
                { id: 'afiliadosExpedientes', name: 'Afiliados', label: 'draft' },
                { id: 'expTramiteExpedientes', name: 'Exp/tramite', label: 'draft' },
                { id: 'tram19PasivExpedientes', name: 'Tram 19 Pasiv', label: 'draft' },
                { id: 'oExpOficinaExpedientes', name: 'O-Exp/Oficina', label: 'draft' },
                { id: 'benefAgrExpedientes', name: 'Benef Agr', label: 'draft' },
                { id: 'destruccionExpedientes', name: 'Destrucción', label: 'draft' },
                { id: 'actEliminacionExpedientes', name: 'Act/eliminación', label: 'draft' },
                { id: 'vtoAnticipadoExpedientes', name: 'Vto Anticipado', label: 'draft' },
                { id: 'vtoCondicionalExpedientes', name: 'Vto Condicional', label: 'draft' },
                { id: 'expteHistorialExpedientes', name: 'Expte-Historial', label: 'draft' },
                { id: 'exptesOrganismosExpedientes', name: 'Exptes-Organismos', label: 'draft' },
                { id: 'exptesPasesMesaExpedientes', name: 'Exptes-Pases-Mesa', label: 'draft' },
                { id: 'odiDictamenResolucionExpedientes', name: 'ODI-Dictamen-Resolución', label: 'draft' },
                { id: 'listadoSolicitudesExpedientes', name: 'Listado Solicitudes', label: 'draft' },
            ]},
            { id: 'cajasExpedientes', name: 'Cajas', label: 'draft' },
            { id: 'oficinasExpedientes', name: 'Oficinas', label: 'draft' },
            { id: 'organismosExpedientes', name: 'Organismos', label: 'draft' },
            { id: 'objetosExpedientes', name: 'Objetos', label: 'draft' },
            { id: 'fichasExpedientes', name: 'Fichas', label: 'draft' },
            { id: 'expedientesDigitalizadosExpedientes', name: 'Expedientes digitalizados', label: 'draft' },
            { id: 'resolucionesDigitalizadasExpedientes', name: 'Resoluciones digitalizadas', label: 'draft' },
            { id: 'utnDigitExpedientes', name: 'UTN-Digit', label: 'draft', subItems: [
                { id: 'resolucionesExpedientes', name: 'Resoluciones', label: 'draft' },
                { id: 'contabilidadExpedientes', name: 'Contabilidad', label: 'draft' },
                { id: 'rrhhyoExpedientes', name: 'RRHHyO', label: 'draft' },
                { id: 'salFamiliarExpedientes', name: 'Sal Familiar', label: 'draft' },
                { id: 'aportesExpedientes', name: 'Aportes', label: 'draft' },
                { id: 'generarRemitoExpedientes', name: 'Generar Remito', label: 'draft' },
            ]},
            { id: 'cargaExpElectrónicoExpedientes', name: 'Carga Exp Electrónico', label: 'draft' },
            { id: 'cargaNumDictamenExpedientes', name: 'Carga Num Dictamen', label: 'draft' },
            { id: 'cargaNumResolucionExpedientes', name: 'Carga Num Resolución', label: 'draft' },
            { id: 'planillasFuerzasExpedientes', name: 'Planilla de Fuerzas', label: 'draft', subItems: [
                { id: 'ingresoTramitesFuerzaExpedientes', name: 'Ingreso tramites por fuerza', label: 'draft' },
                { id: 'ingresoManualTramitesFuerzaExpedientes', name: 'Ingreso Manual Tramites por fuerza', label: 'draft' },
                { id: 'consultaTramitesFuerzaExpedientes', name: 'Consulta tramites por fuerza', label: 'draft' },
                { id: 'modificacionesExpedientes', name: 'Modificaciones', label: 'draft' },
            ]},
            { id: 'consultarSolicitanteExpedientes', name: 'Consultar Solicitante', label: 'draft', subItems: [
                { id: 'xDniExpedientes', name: 'X DNI', label: 'draft' },
                { id: 'xApellidoExpedientes', name: 'X Apellido', label: 'draft' },
            ]},
        ]);

        return clearDrawer

    }, []);

    return (
        <>Expedientes</>
    );
}