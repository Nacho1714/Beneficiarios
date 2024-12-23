import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Listados() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'organismosJerarquiasListados', name: 'Organismos y Jerarquias', label: 'draft' },
            { id: 'corteOrganismosJerarquiasListados', name: 'Corte Organismos y Jerarquias', label: 'draft' },
            { id: 'organismosListados', name: 'Organismos', label: 'draft' },
            { id: 'organismosCodigoListados', name: 'Organismos por codigo', label: 'draft' },
            { id: 'organismosEscalafonListados', name: 'Organismos por escalafón', label: 'draft' },
            { id: 'resganCertificadosListados', name: 'Resgan Certificados', label: 'draft' },
            { id: 'estadisticasListados', name: 'Estadísticas', label: 'draft' },
            { id: 'ansesListados', name: 'Anses', label: 'draft' },
            { id: 'sintysListados', name: 'SINTYS', label: 'draft' },
            { id: 'fuerzasListados', name: 'Fuerzas', label: 'draft' },
            { id: 'fuerzasDatosBasicosListados', name: 'Fuerzas - Datos básicos', label: 'draft' },
            { id: 'personalInstitucionListados', name: 'Personal Institución', label: 'draft' },
            { id: 'variosListados', name: 'Varios', label: 'draft' },
            { id: 'brutoListados', name: 'Bruto', label: 'draft' },
            { id: 'maestroConceptosListados', name: 'Maestro de conceptos', label: 'draft' },
            { id: 'fuerzasGraficoListados', name: 'Fuerzas - Gráfico', label: 'draft' },
            { id: 'cambioDocListados', name: 'Cambio Doc', label: 'draft' },
            { id: 'listadoCpto704Listados', name: 'Listado Cpto 704', label: 'draft' },
            { id: 'libramientoListados', name: 'Libramiento', label: 'draft' },
            { id: 'recibosUAIListados', name: 'Recibos UAI', label: 'draft' },
            { id: 'pagosPnaGnaListados', name: 'Pagos PNA-GNA', label: 'draft' },
            { id: 'pasesListados', name: 'Pases', label: 'draft' },
            { id: 'listadosSupleGananciasListados', name: 'Listado Suple Ganancias', label: 'draft' },
            { id: 'computosFechasListados', name: 'Computos por fechas', label: 'draft' },
            { id: 'exptesTramiteListados', name: 'Exptes por trámite', label: 'draft' },
            { id: 'expedientesListados', name: 'Expedientes', label: 'draft' },
            { id: 'certificadosListados', name: 'Certificados', label: 'draft' },
            { id: 'codPago2Listados', name: 'Cod Pago 2', label: 'draft' },
            { id: 'codPago3Listados', name: 'Cod Pago 3', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Listados</>
    );
}