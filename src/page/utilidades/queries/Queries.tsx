import { useEffect } from "react";

// Custom Hook
import { useDrawer } from "../../../context/drawer/DrawerContext";

// Toolpad
import { PageContainerToolbar } from "@toolpad/core";

// Material UI
import { Typography } from "@mui/material";

// Sections
import QueryAuthorization from "./sections/QueryAuthorization";

const Queries = () => {
    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'QueryAuthorization', name: 'Autorización' }
        ]);

        return clearDrawer
    }, []);

    return (

        <>
            <PageContainerToolbar>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Conjunto de consultas SQL diseñadas para optimizar tareas recurrentes y mejorar la interacción con la base de datos del sistema.
                </Typography>
            </PageContainerToolbar>

            <QueryAuthorization />
        </>

    );
};

export default Queries;