import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function SalarioFamiliar() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'actualizSalarioFamiliar', name: 'Actualiz', label: 'draft' },
            { id: 'manualSalarioFamiliar', name: 'Manual', label: 'draft' },
            { id: 'bajaCptoSalarioFamiliar', name: 'Baja-cpto', label: 'draft', subItems: [
                { id: '294-512bajaCptoSalarioFamiliar', name: '294-512', label: 'draft' },
                { id: '548bajaCptoSalarioFamiliar', name: '548', label: 'draft' },
            ]},
            { id: 'fichasSalarioFamiliar', name: 'Fichas', label: 'draft', subItems: [
                { id: 'ingresoImagenesSalarioFichasSalarioFamiliar', name: 'Ingreso Imagenes Salario', label: 'draft' },
                { id: 'consultaImagenesSalarioFichasSalarioFamiliar', name: 'Consulta Imagenes Salario', label: 'draft' },
            ]},
            { id: 'listadosSalarioFamiliar', name: 'Listados', label: 'draft', subItems: [
                { id: 'discVencSalarioFamiliar', name: 'Disc-venc', label: 'draft' },
                { id: 'prenVencSalarioFamiliar', name: 'Pren-venc', label: 'draft' },
                { id: 'guarVencSalarioFamiliar', name: 'Guar-venc', label: 'draft' },
                { id: 'surVencSalarioFamiliar', name: 'Sur-venc', label: 'draft' },
                { id: 'sinCertSalarioFamiliar', name: 'Sin-cert', label: 'draft' },
                { id: 'modSurSalarioFamiliar', name: 'Mod-sur', label: 'draft' },
                { id: 'salFamHijSalarioFamiliar', name: 'Sal-Fam-Hij', label: 'draft' },
            ]},
            { id: 'variosSalarioFamiliar', name: 'Varios', label: 'draft', subItems: [
                { id: 'totalRetrSalarioFamiliar', name: 'Total-retr', label: 'draft' },
                { id: 'hijosModSalarioFamiliar', name: 'Hijos mod', label: 'draft' },
                { id: 'cptosUVezSalarioFamiliar', name: 'Cptos U. Vez', label: 'draft' },
                { id: 'liquidSalarioFamiliar', name: 'Liquid', label: 'draft' },
                { id: 'certZonaSurSalarioFamiliar', name: 'Cert zona sur', label: 'draft' },
                { id: 'certSupervEsposaSalarioFamiliar', name: 'Cert superv esposa', label: 'draft' },
                { id: 'notaExteriorSalarioFamiliar', name: 'Nota Exterior', label: 'draft' },
                { id: 'rangoHaberBrutoSalarioFamiliar', name: 'Rango Haber Bruto', label: 'draft' },
            ]},
            { id: 'topesSalarioFamiliar', name: 'Topes', label: 'draft' },
            { id: 'topesPorZonaSalarioFamiliar', name: 'Topes Por Zona', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>SalarioFamiliar</>
    );
}