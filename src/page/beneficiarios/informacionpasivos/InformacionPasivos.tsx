import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function InformacionPasivos() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'actualizacionInformacionPasivos', name: 'Actualización', label: 'draft' },
            { id: 'consultaInformacionPasivos', name: 'Consulta', label: 'draft' },
            { id: 'sucursalesInformacionPasivos', name: 'Sucursales', label: 'draft' },
            { id: 'casosTipoInformacionPasivos', name: 'Casos tipo', label: 'draft' },
            { id: 'credencialesInformacionPasivos', name: 'Credenciales', label: 'draft' },
            { id: 'listadosInformacionPasivos', name: 'Listados', label: 'draft', subItems: [
                { id: 'benefPrevioInformacionPasivos', name: 'Beneficios con cuenta bancaria impactada despues de previo', label: 'draft' },
            ]},
            { id: 'bancoNacionNovedadesInformacionPasivos', name: 'Banco Nación - Novedades', label: 'draft' },
            { id: 'spfCalculo265InformacionPasivos', name: 'SPF Calculo 265', label: 'draft' },
            { id: 'convivientesInformacionPasivos', name: 'Convivientes', label: 'draft', subItems: [
                { id: 'altaInformacionPasivos', name: 'Alta', label: 'draft' },
                { id: 'bajaInformacionPasivos', name: 'Baja', label: 'draft' },
                { id: 'modificacionInformacionPasivos', name: 'Modificación', label: 'draft' },
                { id: 'consultaInformacionPasivos', name: 'Consulta', label: 'draft' },
            ]},

        ]);

        return clearDrawer

    }, []);

    return (
        <>InformacionPasivos</>
    );
}