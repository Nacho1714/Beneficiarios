import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Mensual() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'haberesMensual', name: 'Haberes', label: 'draft' },
            { id: 'haberesAguinaldoMensual', name: 'Haberes - Aguinaldo', label: 'draft' },
            { id: 'gananciasMensual', name: 'Ganancias', label: 'draft', subItems: [
                { id: 'gananciasMesMensual', name: 'Ganancias del mes', label: 'draft' },
                { id: 'reprocesoAñosAnterioresMensual', name: 'Reproceso años anteriores', label: 'draft' },
                { id: 'complementariasGananciasMensual', name: 'Complementarias de ganancias', label: 'draft' },
                { id: 'desprocesoComplementariasPrevisionMensual', name: 'Desproceso complementarias de previsión', label: 'draft' },
                { id: 'generacionDdjjMensual', name: 'Generación de DDJJ', label: 'draft' },
            ]},
            { id: 'descuentosMensual', name: 'Descuentos', label: 'draft' },
            { id: 'descuentosAguinaldoMensual', name: 'Descuentos - Aguinaldo', label: 'draft' },
            { id: 'embargosMensual', name: 'Embargos', label: 'draft', subItems: [
                { id: 'embargosCanceladosMensual', name: 'Embargos cancelados', label: 'draft' },
                { id: 'embargosCanceladosAguinaldoMensual', name: 'Embargos cancelados - Aguinaldo', label: 'draft' },
                { id: 'bancosMensual', name: 'Bancos', label: 'draft' },
                { id: 'cptosDescMensual', name: 'Cptos-Desc', label: 'draft' },
                { id: 'supleEmbarMensual', name: 'Suple-Embar', label: 'draft' },
                { id: 'listadoCodigo526Mensual', name: 'Listado codigo 526 -- Comisión Bancaria Oficio', label: 'draft' },
            ]},
            { id: 'finalMensual', name: 'Final', label: 'draft' },
            { id: 'listadosMensual', name: 'Listados', label: 'draft', subItems: [
                { id: 'haberesMensual', name: 'Haberes', label: 'draft' },
                { id: 'descuentosMensual', name: 'Descuentos', label: 'draft' },
                { id: 'descuentosParametrizadoMensual', name: 'Descuentos - Parametrizado', label: 'draft' },
                { id: 'previoBloqueadosMensual', name: 'Previo - Bloqueados', label: 'draft' },
                { id: 'previoControlSimuladoMensual', name: 'Previo - Control del simulado', label: 'draft' },
                { id: 'libramientoMensual', name: 'Libramiento', label: 'draft' },
            ]},
            { id: 'recuperacionMensual', name: 'Recuperación', label: 'draft', subItems: [
                { id: 'haberesRecuperacionMensual', name: 'Haberes', label: 'draft' },
                { id: '', name: 'Haberes - Aguinaldo', label: 'draft' },
                { id: 'descuentosRecuperacionMensual', name: 'Descuentos', label: 'draft' },
                { id: 'descuentosAguinaldoRecuperacionMensual', name: 'Descuentos - Aguinaldo', label: 'draft' },
                { id: 'embargosCanceladosRecuperacionMensual', name: 'Embargos cancelados', label: 'draft' },
                { id: 'embargosCanceladosAguinaldoRecuperacionMensual', name: 'Embargos cancelados - Aguinaldo', label: 'draft' },
                { id: 'finalRecuperacionMensual', name: 'Final', label: 'draft' },
                { id: 'aumentoRecuperacionMensual', name: 'Aumento', label: 'draft' },
            ]},
            { id: 'iafMensual', name: 'IAF', label: 'draft', subItems: [
                { id: 'cargarIafMensual', name: 'Cargar', label: 'draft' },
                { id: 'procesarIafMensual', name: 'Procesar', label: 'draft' },
                { id: 'recuperacionIafMensual', name: 'Recuperación - Cargar', label: 'draft' },
                { id: 'recuperacionProcesoIafMensual', name: 'Recuperación - Proceso', label: 'draft' },
            ]},
            { id: 'aumentoMensual', name: 'Aumento', label: 'draft' },
            { id: 'aumentoDiferenciaMensual', name: 'Aumento por diferencia', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Mensual</>
    );
}