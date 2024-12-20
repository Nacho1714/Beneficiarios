import { useEffect } from "react";
import CustomDrawer from "../../../component/drawer/CustomDrawer";

// Custom Hook
import { useDrawer } from "../../../context/drawer/DrawerContext";

// Toolpad
import { PageContainerToolbar } from "@toolpad/core";

// Material UI
import { Typography } from "@mui/material";

// Sections
import QueryAuthorization from "./sections/QueryAuthorization";

const Queries = () => {
    const { setDrawerContent } = useDrawer();

    useEffect(() => {
        setDrawerContent(
            <CustomDrawer items={[
                { id: 'QueryAuthorization', name: 'Autorización' },
            ]} 
            />
        );

        return () => setDrawerContent(null)
    }, [setDrawerContent]);

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