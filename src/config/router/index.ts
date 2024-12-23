import { Navigation } from "@toolpad/core";

// Pages/beneficiarios
import Inicio from "../../page/beneficiarios/inicio/Inicio"
import Acrecimientos from "../../page/beneficiarios/acrecimientos/Acrecimientos"
import Aportes from "../../page/beneficiarios/aportes/Aportes";
import Auditoria from "../../page/beneficiarios/auditoria/Auditoria";
import BienesDeUso from "../../page/beneficiarios/bienesdeuso/BienesDeUso";
import Bonos from "../../page/beneficiarios/bonos/Bonos"
import Censo from "../../page/beneficiarios/censo/Censo"
import Cintas from "../../page/beneficiarios/cintas/Cintas"
import Complementarias from "../../page/beneficiarios/complementarias/Complementarias"
import Computo from "../../page/beneficiarios/computo/Computo"
import Certificados from "../../page/beneficiarios/certificados/Certificados"
import Embargos from "../../page/beneficiarios/embargos/Embargos"
import EmbargosCrjppf from "../../page/beneficiarios/embargoscrjppf/EmbargosCrjppf"
import Escalafones from "../../page/beneficiarios/escalafones/Escalafones"
import Expedientes from "../../page/beneficiarios/expedientes/Expedientes"
import Ganancias from "../../page/beneficiarios/ganancias/Ganancias"
import HConsulta from "../../page/beneficiarios/hconsulta/HConsulta"
import Honorarios from "../../page/beneficiarios/honorarios/Honorarios"
import Impagos from "../../page/beneficiarios/impagos/Impagos"
import InformacionPasivos from "../../page/beneficiarios/informacionpasivos/InformacionPasivos"
import InformacionesSumarias from "../../page/beneficiarios/informacionessumarias/InformacionesSumarias"
import Juridicos from "../../page/beneficiarios/juridicos/Juridicos"
import Liquidaciones from "../../page/beneficiarios/liquidaciones/Liquidaciones"
import Listados from "../../page/beneficiarios/listados/Listados"
import Mensual from "../../page/beneficiarios/mensual/Mensual"
import NotasInternas from "../../page/beneficiarios/notasinternas/NotasInternas"
import PagosMensuales from "../../page/beneficiarios/pagosmensuales/PagosMensuales"
import Pasividades from "../../page/beneficiarios/pasividades/Pasividades"
import PlanillaANSES from "../../page/beneficiarios/Planilladeanses/PlanillaANSES"
import Poderes from "../../page/beneficiarios/poderes/Poderes"
import Postal from "../../page/beneficiarios/postal/Postal"
import Reajustes from "../../page/beneficiarios/reajustes/Reajustes"
import Renaper from "../../page/beneficiarios/renaper/Renaper"
import SalarioFamiliar from "../../page/beneficiarios/salariofamiliar/SalarioFamiliar"
import Stock from "../../page/beneficiarios/stock/Stock"
import Supervivencia from "../../page/beneficiarios/supervivencia/Supervivencia"
import SupervivenciaExterior from "../../page/beneficiarios/supervivenciaexterior/SupervivenciaExterior"
import Tesoreria from "../../page/beneficiarios/tesoreria/Tesoreria"
import VencimientoExterior from "../../page/beneficiarios/vencimientoexterior/VencimientoExterior"
import Dgo from "../../page/beneficiarios/dgo/Dgo"
import Preguntas from "../../page/preguntas/Preguntas";

// Pages/utilidades
import Queries from "../../page/utilidades/queries/Queries";

// Toolbar
// import { ToolbarNames } from "../../layout/toolbar/toolbarTypes";
import { ToolbarNames } from "../../layout/toolbar/toolbarTypes";

import Icons from "../../icon";
import tesorer_comple from "../../page/tablas/tesorer_comple";

export const whiteList = [
    {
        title: 'Inicio',
        path: '/',
        segment: null,
        children: null,
        icon: Icons.Home,
        component: Inicio,
        loader: null,
    },
    {
        title: 'Beneficiarios',
        path: '/beneficiarios',
        segment: 'beneficiarios',
        component: null,
        icon: Icons.AssignmentInd,
        children: [
            {
                title: 'Acrecimientos',
                path: '/acrecimientos',
                segment: 'acrecimientos',
                component: Acrecimientos,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Aportes',
                path: '/aportes',
                segment: 'aportes',
                component: Aportes,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Auditoria',
                path: '/auditoria',
                segment: 'auditoria',
                component: Auditoria,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Bienes De Uso',
                path: '/bienesdeuso',
                segment: 'bienesdeuso',
                component: BienesDeUso,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Bonos',
                path: '/bonos',
                segment: 'bonos',
                component: Bonos,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Censo',
                path: '/censo',
                segment: 'censo',
                component: Censo,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Cintas',
                path: '/cintas',
                segment: 'cintas',
                component: Cintas,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Complementarias',
                path: '/complementarias',
                segment: 'complementarias',
                component: Complementarias,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Computo',
                path: '/computo',
                segment: 'computo',
                component: Computo,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Certificados',
                path: '/certificados',
                segment: 'certificados',
                component: Certificados,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Embargos',
                path: '/embargos',
                segment: 'embargos',
                component: Embargos,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Embargos CRJPPF',
                path: '/embargoscrjppf',
                segment: 'embargoscrjppf',
                component: EmbargosCrjppf,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Escalafones',
                path: '/escalafones',
                segment: 'escalafones',
                component: Escalafones,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Expedientes',
                path: '/expedientes',
                segment: 'expedientes',
                component: Expedientes,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Ganancias',
                path: '/ganancias',
                segment: 'ganancias',
                component: Ganancias,
                loader: null,
                toolbarType: null
            },
            {
                title: 'H-Consulta',
                path: '/hconsulta',
                segment: 'hconsulta',
                component: HConsulta,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Honorarios',
                path: '/honorarios',
                segment: 'honorarios',
                component: Honorarios,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Impagos',
                path: '/impagos',
                segment: 'impagos',
                component: Impagos,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Informacion Pasivos',
                path: '/informacionpasivos',
                segment: 'informacionpasivos',
                component: InformacionPasivos,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Informaciones Sumarias',
                path: '/informacionessumarias',
                segment: 'informacionessumarias',
                component: InformacionesSumarias,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Juridicos',
                path: '/juridicos',
                segment: 'juridicos',
                component: Juridicos,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Liquidaciones',
                path: '/liquidaciones',
                segment: 'liquidaciones',
                component: Liquidaciones,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Listados',
                path: '/listados',
                segment: 'listados',
                component: Listados,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Mensual',
                path: '/mensual',
                segment: 'mensual',
                component: Mensual,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Notas Internas',
                path: '/notasinternas',
                segment: 'notasinternas',
                component: NotasInternas,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Pagos Mensuales',
                path: '/pagosmensuales',
                segment: 'pagosmensuales',
                component: PagosMensuales,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Pasividades',
                path: '/pasividades',
                segment: 'pasividades',
                component: Pasividades,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Planilla de ANSES',
                path: '/Planilladeanses',
                segment: 'Planilladeanses',
                component: PlanillaANSES,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Poderes',
                path: '/poderes',
                segment: 'poderes',
                component: Poderes,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Postal',
                path: '/postal',
                segment: 'postal',
                component: Postal,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Reajustes',
                path: '/reajustes',
                segment: 'reajustes',
                component: Reajustes,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Renaper',
                path: '/renaper',
                segment: 'renaper',
                component: Renaper,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Salario Familiar',
                path: '/salariofamiliar',
                segment: 'salariofamiliar',
                component: SalarioFamiliar,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Stock',
                path: '/stock',
                segment: 'stock',
                component: Stock,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Supervivencia',
                path: '/supervivencia',
                segment: 'supervivencia',
                component: Supervivencia,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Supervivencia Exterior',
                path: '/supervivenciaexterior',
                segment: 'supervivenciaexterior',
                component: SupervivenciaExterior,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Tesoreria',
                path: '/tesoreria',
                segment: 'tesoreria',
                component: Tesoreria,
                loader: null,
                toolbarType: null
            },
            {
                title: 'Vencimiento Exterior',
                path: '/vencimientoexterior',
                segment: 'vencimientoexterior',
                component: VencimientoExterior,
                loader: null,
                toolbarType: null
            },
            {
                title: 'DGO',
                path: '/dgo',
                segment: 'dgo',
                component: Dgo,
                loader: null,
                toolbarType: null
            },
        ],
        loader: null,
        toolbarType: null
    },
    {
        title: 'Tablas',
        path: '/tablas',
        segment: 'tablas',
        component: null,
        icon: Icons.TableChart,
        children: [
            {
                title: 'tesorer_comple',
                path: '/tesorer_comple',
                segment: 'tesorer_comple',
                component: tesorer_comple,
                loader: null,
                toolbarType: null
            },
        ],
        loader: null,
        toolbarType: null
    },
    {
        title: 'Utilidades',
        path: '/utilidades',
        segment: 'utilidades',
        component: null,
        icon: Icons.ContentPasteSearch,
        children: [
            {
                title: 'Queries',
                path: '/queries',
                segment: 'queries',
                component: Queries,
                loader: null,
                toolbarType: null
            },
        ],
        loader: null,
        toolbarType: null
    },
    {
        title: 'Preguntas',
        path: '/preguntas',
        segment: 'preguntas',
        component: Preguntas,
        icon: Icons.Help,
        loader: null,
        toolbarType: null
    },
]

// Toolpad
export const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Menú',
    },
    ...whiteList.map((list) => ({
        title: list.title,
        icon: list.icon,
        segment: list?.segment,
        children: list?.children
    })) as Navigation
]