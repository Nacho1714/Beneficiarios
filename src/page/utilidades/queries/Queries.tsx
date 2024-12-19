// import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
// import QueryAuthorization from "./sections/QueryAuthorization";
// import { PageContainerToolbar } from '@toolpad/core/PageContainer';
// import { useEffect } from "react";
// import { useDrawer } from "../../../context/drawer/DrawerContext";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { generateDrawerContent } from "./sections/customdrawer";

import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";
import { generateDrawerContent } from "./sections/customdrawer";

// export default function Queries() {

//     const { toggleDrawer, setDrawerContent } = useDrawer();

//     useEffect(() => {

//         setDrawerContent(generateDrawerContent(
//             [
//                 { id: '/basic-button', name: 'Basic button' },
//                 {
//                     id: '/icon-button',
//                     name: 'Icon button',
//                     subItems: [
//                         { id: '/icon-button/sizes', name: 'Sizes' },
//                         { id: '/icon-button/colors', name: 'Colors' },
//                     ],
//                 },
//                 { id: '/file-upload', name: 'File upload' },
//                 { id: '/customization', name: 'Customization' },
//             ]
//         ));

//         toggleDrawer(true);

//         // Cleanup al desmontar
//         return () => {
//             toggleDrawer(false);
//             setDrawerContent(null);
//         };
//     }, [setDrawerContent, toggleDrawer]);

//     return (
//         <>
//             <PageContainerToolbar>
//                 <Typography variant="body1" sx={{ mt: 1 }}>
//                     Conjunto de consultas SQL diseñadas para optimizar tareas recurrentes y mejorar la interacción con la base de datos del sistema.
//                 </Typography>
//             </PageContainerToolbar>

//             <QueryAuthorization />
//         </>
//     )
// }
const Queries = () => {
    const { setDrawerContent, toggleDrawer } = useDrawer();

    const drawerItems = [
        { id: 'basic-button', name: 'Basic button' },
        {
            id: 'icon-button',
            name: 'Icon button',
            subItems: [
                { id: 'sizes', name: 'Sizes' },
                { id: 'colors', name: 'Colors' },
            ],
        },
        { id: 'file-upload', name: 'File upload' },
        { id: 'customization', name: 'Customization' },
    ];

    useEffect(() => {
        const drawerContent = generateDrawerContent(drawerItems);
        setDrawerContent(drawerContent);
        toggleDrawer(true);

        // Cleanup
        return () => {
            toggleDrawer(false);
            setDrawerContent(null);
        };
    }, [setDrawerContent, toggleDrawer]);

    return (
        <div>
            <section id="basic-button">
                <h1>Basic Button</h1>
                <p>Contenido de Basic Button...</p>
            </section>
            <section id="icon-button">
                <h1>Icon Button</h1>
                <p>Contenido de Icon Button...</p>
                <div id="sizes">
                    <h2>Sizes</h2>
                    <p>Contenido de Sizes...</p>
                </div>
                <div id="colors">
                    <h2>Colors</h2>
                    <p>Contenido de Colors...</p>
                </div>
            </section>
            <section id="file-upload">
                <h1>File Upload</h1>
                <p>Contenido de File Upload...</p>
            </section>
            <section id="customization">
                <h1>Customization</h1>
                <p>Contenido de Customization...</p>
            </section>
        </div>
    );
};

export default Queries;