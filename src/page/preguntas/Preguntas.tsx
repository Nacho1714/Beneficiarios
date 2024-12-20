import { useEffect } from "react";
import { useDrawer } from "../../context/drawer/DrawerContext";

export default function Preguntas() {

    const { setDrawerItems, clearDrawer } = useDrawer();

    useEffect(() => {
        setDrawerItems([
            { id: 'complementaria', name: '¿Que es una Complementaria?' }
        ]);

        return clearDrawer
    }, []);

    return (
        <>Preguntas</>
    )
}