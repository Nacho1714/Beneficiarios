import { useEffect } from "react";
import { useDrawer } from "../../../context/drawer/DrawerContext";

export default function Postal() { 

        const { setDrawerItems, clearDrawer } = useDrawer();
    
        useEffect(() => {
            setDrawerItems([
                { id: 'codigosPostalesPostal', name: 'Codigos postales', label: 'draft' },
            ]);
    
            return clearDrawer
    
        }, []);

      return (
        <>Postal</> 
      );
}