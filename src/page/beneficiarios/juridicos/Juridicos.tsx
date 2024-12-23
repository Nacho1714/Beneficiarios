import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Juridicos() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'causasCargaPreliminarJuridicos', name: 'Causas - Carga preliminar', label: 'draft', subItems: [
                { id: 'altaJuridicos', name: 'Alta', label: 'draft' },
                { id: 'consultaJuridicos', name: 'Consulta', label: 'draft' },
                { id: 'bajaJuridicos', name: 'Baja', label: 'draft' },
                { id: 'listadoJuridicos', name: 'Listado', label: 'draft' },
            ]},
            { id: 'causasJuridicos', name: 'Causas', label: 'draft', subItems: [
                { id: 'caratulaJuridicos', name: 'Caratula', label: 'draft' },
                { id: 'ingresoEspecialJuridicos', name: 'Ingreso - Especial', label: 'draft' },
                { id: 'modificacionEspecialJuridicos', name: 'Modificación - Especial', label: 'draft' },
                { id: 'causaAltaJuridicos', name: 'Causa - Alta', label: 'draft' },
                { id: 'causaConsultaJuridicos', name: 'Causa - Consulta', label: 'draft' },
                { id: 'causaModificacionJuridicos', name: 'Causa - Modificación', label: 'draft' },
                { id: 'causaBajaJuridicos', name: 'Causa - Baja', label: 'draft' },
                { id: 'causasReimpresión', name: 'Causas - Reimpresión', label: 'draft' },
                { id: 'causasActoresJuridicos', name: 'Causas - Actores', label: 'draft' },
                { id: 'causasAbogadosJuridicos', name: 'Causas - Abogados', label: 'draft' },
                { id: 'registraciónJuridicos', name: 'Registración', label: 'draft' },
                { id: 'contestacionJuridicos', name: 'Contestación', label: 'draft' },
                { id: 'listadosJuridicos', name: 'Listados', label: 'draft' },
                { id: 'vencimientosJuridicos', name: 'Vencimientos', label: 'draft' },
            ]},
            { id: 'abogadosJuridicos', name: 'Abogados', label: 'draft', subItems: [
                { id: 'consultaAbogadosJuridicos', name: 'Consulta', label: 'draft' },
                { id: 'altaAbogadosJuridicos', name: 'Alta', label: 'draft' },
            ]},
            { id: 'juzgadosJuridicos', name: 'Juzgados', label: 'draft', subItems: [
                { id: 'consultaJuzgadosJuridicos', name: 'Consulta', label: 'draft' },
                { id: 'altaJuzgadosJuridicos', name: 'Alta', label: 'draft' },
            ]},
            { id: 'consultaJuridicos', name: 'Consulta', label: 'draft' },
            { id: 'feriadosJudicialesJuridicos', name: 'Feriados judiciales', label: 'draft', subItems: [
                { id: 'altaFeriadosJudicialesJuridicos', name: 'Alta', label: 'draft' },
                { id: 'bajaFeriadosJudicialesJuridicos', name: 'Baja', label: 'draft' },
                { id: 'listadoFeriadosJudicialesJuridicos', name: 'Listado', label: 'draft' },
            ]},
            { id: 'oficiosJudicialesJuridicos', name: 'Oficios judiciales', label: 'draft', subItems: [
                { id: 'altaOficiosJudicialesJuridicos', name: 'Alta', label: 'draft' },
                { id: 'consultaOficiosJudicialesJuridicos', name: 'Consulta', label: 'draft' },
                { id: 'consultaHistoricaOficiosJudicialesJuridicos', name: 'Consulta histórica', label: 'draft' },
                { id: 'modificacionOficiosJudicialesJuridicos', name: 'Modificación', label: 'draft' },
                { id: 'bajaOficiosJudicialesJuridicos', name: 'Baja', label: 'draft' },
            ]},
            { id: 'poderesJuridicos', name: 'Poderes', label: 'draft', subItems: [
                { id: 'notasJuridicos', name: 'Notas Poderes', label: 'draft' },
                { id: 'abcPoderesJuridicos', name: 'A/B/C de Poderes', label: 'draft' },
            ]},
            { id: 'impresionJuridicos', name: 'Impresión', label: 'draft' },
            { id: 'notasJuridicos', name: 'Notas', label: 'draft', subItems: [
                { id: 'retirosVoluntariosObligatoriosJuridicos', name: 'Retiros voluntarios y obligatorios', label: 'draft' },
                { id: 'pensionesViudaJuridicos', name: 'Pensiones con viuda', label: 'draft' },
                { id: 'reconocimientoServiciosJuridicos', name: 'Reconocimiento de servicios', label: 'draft' },
            ]},
            { id: 'descargaPdfPjnJuridicos', name: 'Descarga PDF del PJN', label: 'draft' },
            { id: 'honorariosJuridicos', name: 'Honorarios', label: 'draft', subItems: [
                { id: 'calculoHonorariosJuridicos', name: 'Calculo de Honorarios', label: 'draft' },
                { id: 'masivoHonorariosJuridicos', name: 'Masivo de Honorarios', label: 'draft' },
                { id: 'pagoAdelantadosJuridicos', name: 'Pagos Adelantados', label: 'draft' },
                { id: 'pagoMensualesJuridicos', name: 'Pagos Mensuales', label: 'draft' },
                { id: 'honorariosLiquidadosJuridicos', name: 'Honorarios liquidados', label: 'draft' },
                { id: 'complementariaReajusteHonorariosGeneracionJuridicos', name: 'Complementaria - Reajuste de Honorarios - Generación', label: 'draft' },
                { id: 'complementariaReajusteHonorariosDesprocesoJuridicos', name: 'Complementaria - Reajuste de Honorarios - Desproceso', label: 'draft' },
                { id: 'abogadosFallecidosJuridicos', name: 'Abogados fallecidos - Pago', label: 'draft' },
            ]},
            { id: 'cambiosManualesJuridicos', name: 'Cambios manuales', label: 'draft' },
            { id: 'fechaAprobModificacionJuridicos', name: 'Fecha de aprob - Modificacion', label: 'draft' },
            { id: 'archivoJuiciosHonorariosJuridicos', name: 'Archivo Juicios y Honorarios', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Juridicos</>
    );
}