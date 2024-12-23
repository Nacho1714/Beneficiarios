import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Cintas() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'bancoNacionCintas', name: 'Banco Nación', label: 'draft', subItems: [
                { id: 'haberesBancoNacionCintas', name: 'Haberes - Banco Nacion', label: 'draft' },
                { id: 'haberesBancoNacionExteriorCintas', name: 'Haberes - Banco Nacion (Exterior)', label: 'draft' },
                { id: 'haberesBancoNacionBloqueadosCintas', name: 'Haberes - Banco Nacion (Bloqueados)', label: 'draft' },
                { id: 'haberesBancoNacionBloqueadosExteriorCintas', name: 'Haberes - Banco Nacion (Bloqueados - Exterior)', label: 'draft' },
                { id: 'complementariasBancoNacionCintas', name: 'Complementarias - Banco Nacion', label: 'draft' },
                { id: 'complementariasBancoNacionExteriorCintas', name: 'Complementarias - Banco Nacion (Exterior)', label: 'draft' },
                { id: 'devolucionBancoNacionHaberesCintas', name: 'Devolución - Banco Nacion (Haberes)', label: 'draft' },
                { id: 'devolucionBancoNacionComplementariasCintas', name: 'Devolución - Banco Nacion (Complementarias)', label: 'draft' },
            ]},
            { id: 'bancoCiudadCintas', name: 'Banco Ciudad', label: 'draft', subItems: [
                { id: 'haberesBancoCiudadCintas', name: 'Haberes - Banco Ciudad', label: 'draft' },
                { id: 'haberesBancoCiudadBloqueadosCintas', name: 'Haberes - Banco Ciudad (Bloqueados)', label: 'draft' },
                { id: 'complementariasBancoCiudadCintas', name: 'Complementarias - Banco Ciudad', label: 'draft' },
            ]},
            { id: 'bancoPatagoniaCintas', name: 'Banco Patagonia', label: 'draft', subItems: [
                { id: 'haberesBancoPatagoniaCintas', name: 'Haberes - Banco Patagonia', label: 'draft' },
                { id: 'haberesBancoPatagoniaBloqueadosCintas', name: 'Haberes - Banco Patagonia (Bloqueados)', label: 'draft' },
                { id: 'complementariasBancoPatagoniaCintas', name: 'Complementarias - Banco Patagonia', label: 'draft' },
                { id: 'clasificacionTipoDocumentoCintas', name: 'Clasificación - Tipo de documento', label: 'draft' },
            ]},
            { id: 'bancoMacroCintas', name: 'Banco Macro', label: 'draft', subItems: [
                { id: 'haberesBancoMacroCintas', name: 'Haberes Banco Macro', label: 'draft' },
                { id: 'haberesBancoMacroBloqueadosCintas', name: 'Haberes Banco Macro (Bloqueados)', label: 'draft' },
                { id: 'complementariasBancoMacroCintas', name: 'Complementarias - Banco Macro', label: 'draft' },
            ]},
            { id: 'bancoIcbcCintas', name: 'Banco ICBC', label: 'draft', subItems: [
                { id: 'haberesBancoICBCCintas', name: 'Haberes Banco ICBC', label: 'draft' },
                { id: 'haberesBancoICBCBloqueadosCintas', name: 'Haberes Banco ICBC (Bloqueados)', label: 'draft' },
                { id: 'complementariasBancoICBCCintas', name: 'Complementarias - Banco ICBC', label: 'draft' },
            ]},
            { id: 'bancoHipotecarioCintas', name: 'Banco Hipotecario', label: 'draft', subItems: [
                { id: 'haberesBancoHipotecarioCintas', name: 'Haberes Banco Hipotecario', label: 'draft' },
                { id: 'haberesBancoHipotecarioBloqueadosCintas', name: 'Haberes Banco Hipotecario (Bloqueados)', label: 'draft' },
                { id: 'complementariasBancoHipotecarioCintas', name: 'Complementarias - Banco Hipotecario', label: 'draft' },
            ]},
            { id: 'bancoGaliciaCintas', name: 'Banco Galicia', label: 'draft', subItems: [
                { id: 'haberesBancoGaliciaCintas', name: 'Haberes Banco Galicia', label: 'draft' },
                { id: 'haberesBancoGaliciaBloqueadosCintas', name: 'Haberes Banco Galicia (Bloqueados)', label: 'draft' },
                { id: 'complementariasBancoGaliciaCintas', name: 'Complementarias - Banco Galicia', label: 'draft' },
            ]},
            { id: 'smsvCintas', name: 'SMSV', label: 'draft', subItems: [
                { id: 'haberesSmsvCintas', name: 'Haberes - SMSV', label: 'draft' },
                { id: 'haberesSmsvApoderadosCintas', name: 'Haberes - SMSV - Apoderados', label: 'draft' },
                { id: 'haberesSmsvHgnaCintas', name: 'Haberes - SMSV - HGNA', label: 'draft' },
                { id: 'haberesSmsvSpfCintas', name: 'Haberes - SMSV - SPF', label: 'draft' },
                { id: 'haberesSmsvBloqueadosCintas', name: 'Haberes - SMSV (Bloqueados)', label: 'draft' },
                { id: 'haberesSmsvHgnaBloqueadosCintas', name: 'Haberes - SMSV - HGNA (Bloqueados)', label: 'draft' },
                { id: 'haberesSmsvSpfBloqueadosCintas', name: 'Haberes - SMSV - SPF (Bloqueados)', label: 'draft' },
                { id: 'complementariasSmsvCintas', name: 'Complementarias - SMSV', label: 'draft' },
                { id: 'complementariasSmsvHgnaCintas', name: 'Complementarias - SMSV - HGNA', label: 'draft' },
                { id: 'complementariasSmsvSpfCintas', name: 'Complementarias - SMSV - SPF', label: 'draft' },
                { id: 'clasificacionCintas', name: 'Clasificación', label: 'draft' },
            ]},
            { id: 'mupimCintas', name: 'MUPIM', label: 'draft', subItems: [
                { id: 'haberesMUPIMCintas', name: 'Haberes MUPIM', label: 'draft' },
                { id: 'haberesMUPIMBloqueadosCintas', name: 'Haberes MUPIM (Bloqueados)', label: 'draft' },
                { id: 'complementariasMUPIMCintas', name: 'Complementarias - MUPIM', label: 'draft' },
            ]},
            { id: 'cajaCintas', name: 'Caja', label: 'draft', subItems: [
                { id: 'haberesCajaCintas', name: 'Haberes Caja', label: 'draft' },
                { id: 'complementariasCajaCintas', name: 'Complementarias - Caja', label: 'draft' },
            ]},
            { id: 'retenidosCintas', name: 'Retenidos', label: 'draft', subItems: [
                { id: 'haberesRetenidosCintas', name: 'Haberes Retenidos', label: 'draft' },
                { id: 'complementariasRetenidosCintas', name: 'Complementarias - Retenidos', label: 'draft' },
            ]},
            { id: 'suspendidosCintas', name: 'Suspendidos', label: 'draft', subItems: [
                { id: 'haberesSuspendidosCintas', name: 'Haberes Suspendidos', label: 'draft' },
                { id: 'complementariasSuspendidosCintas', name: 'Complementarias - Suspendidos', label: 'draft' },
            ]},
            { id: 'depositoJudicialCintas', name: 'Deposito Judicial', label: 'draft', subItems: [
                { id: 'haberesDepositoJudicialCintas', name: 'Haberes Deposito Judicial', label: 'draft' },
                { id: 'complementariasDepositoJudicialCintas', name: 'Complementarias - Deposito Judicial', label: 'draft' },
            ]},
            { id: 'ayudaMutuaCintas', name: 'Ayuda Mutua', label: 'draft', subItems: [
                { id: 'cintaGeneracionCinta', name: 'Cinta - Generación', label: 'draft' },
                { id: 'cintaRecuperacionCinta', name: 'Cinta - Recuperación', label: 'draft' },
                { id: 'cintaAyudaMutuaCinta', name: 'Cinta - Ayuda Mutua', label: 'draft' },
            ]},
            { id: 'padronesCintas', name: 'Padrones', label: 'draft', subItems: [
                { id: 'circuloPoliciaFederalCinta', name: 'Circulo Policia Federal', label: 'draft' },
                { id: 'circuloSuboficialesPoliciaFederalArgentinaCinta', name: 'Circulo Suboficiales Policia Federal Argentina', label: 'draft' },
                { id: 'covipolCinta', name: 'COVIPOL', label: 'draft' },
                { id: 'dibaSegurosCinta', name: 'DIBA Seguros', label: 'draft' },
                { id: 'propolCinta', name: 'PROPOL', label: 'draft' },
                { id: 'smsvCinta', name: 'SMSV', label: 'draft' },
            ]},
            { id: 'controlCintas', name: 'Control de cintas', label: 'draft' },
            { id: 'validadorCintas', name: 'Validador', label: 'draft' },
        ]);

        return clearDrawer

    }, []);

    return (
        <>Cintas</>
    );
}