import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Tesoreria() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'reciboTesoreria', name: 'Recibo', label: 'draft' },
            { id: 'girosTesoreria', name: 'Giros', label: 'draft', subItems: [
                { id: '', name: 'Solicitud', label: 'draft' },
                { id: '', name: 'Listprev Banco', label: 'draft' },
                { id: '', name: 'CD al BNA', label: 'draft' },
                { id: '', name: 'Solicitud GT', label: 'draft' },
                { id: '', name: 'Listprev Banco GT', label: 'draft' },
                { id: '', name: 'CD al BNA  GT', label: 'draft' },
                { id: '', name: 'Solicitud SMSV', label: 'draft' },
                { id: '', name: 'Listprev SMSV', label: 'draft' },
                { id: '', name: 'CD a SMSV', label: 'draft' },
                { id: '', name: 'Etiquetas', label: 'draft' },
                { id: '', name: 'Ingreso', label: 'draft' },
                { id: '', name: 'Ficha', label: 'draft' },
                { id: '', name: 'Anulacion', label: 'draft' },
                { id: '', name: 'Cambsuc', label: 'draft' },
                { id: '', name: 'Reimpre-giros', label: 'draft' },
                { id: '', name: 'Desproceso-CD Banco', label: 'draft' },
            ]},
            { id: 'liqMensTesoreria', name: 'Liq.mens', label: 'draft' },
            { id: 'pReimprTesoreria', name: 'P-Reimpr', label: 'draft' },
            { id: 'ensobrTesoreria', name: 'Ensobr', label: 'draft' },
            { id: 'fondosTesoreria', name: 'Fondos', label: 'draft' },
            { id: 'fondosPnaGnaSpfTesoreria', name: 'Fondos PNA, GNA y SPF', label: 'draft' },
            { id: 'fondosCrjDtosTesoreria', name: 'Fondos CRJ-DTOS', label: 'draft' },
            { id: 'gfPagoTesoreria', name: 'G-F.pago', label: 'draft' },
            { id: 'planillaTesoreria', name: 'Planilla', label: 'draft' },
            { id: 'cambiaCompleTesoreria', name: 'Cambia-Comple', label: 'draft' },
            { id: 'bajaCompleTesoreria', name: 'Baja-Comple', label: 'draft' },
            { id: 'imprchTesoreria', name: 'Imprch', label: 'draft' },
            { id: 'blancheqTesoreria', name: 'Blancheq', label: 'draft' },
            { id: 'impmasTesoreria', name: 'Impmas', label: 'draft' },
            { id: 'notasImpagosTesoreria', name: 'Notas Impagos', label: 'draft' },
            { id: 'etiquetaImpagosTesoreria', name: 'Etiqueta Impagos', label: 'draft' },
            { id: 'consultaImpagosTesoreria', name: 'Consulta Impagos', label: 'draft' },
            { id: 'consultaImpagosAgExpteTesoreria', name: 'Consulta Impagos Ag. Expte', label: 'draft' },
            { id: 'consultaBenefTesoreria', name: 'Consulta-X-benef', label: 'draft' },
            { id: 'rendicionSmsvTesoreria', name: 'Rendición-SMSV', label: 'draft', subItems: [
                { id: 'rendicionSmsvTesoreriarendicionSmsvTesoreria', name: 'Rendición-SMSV', label: 'draft' },
                { id: 'listadoDevolucionesSmsvrendicionSmsvTesoreria', name: 'Listado Devoluciones SMSV', label: 'draft' },
            ]},
            { id: 'listadosTransaccionalTesoreria', name: 'Listados Transaccional', label: 'draft' },
            { id: 'CasosDevuletosBancoNacionTesoreria', name: 'Informe casos devueltos por Banco Nación', label: 'draft' },
            { id: 'opOrganismosDsctoTesoreria', name: 'OP Organismos Dscto', label: 'draft' },
            { id: 'causasCptosTesoreria', name: 'Causas Cptos 588/589', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Tesoreria</>
    );
}