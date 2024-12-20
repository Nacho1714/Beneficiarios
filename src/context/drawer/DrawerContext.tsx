import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { DrawerItem } from '../../interface/drawer';
import CustomDrawer from '../../component/drawer/CustomDrawer';

interface DrawerContextProps {
    setDrawerItems: (items: DrawerItem[]) => void;
    drawerContent: ReactNode;
    isDrawerVisible: boolean;
    clearDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [drawerItems, setDrawerItems] = useState<DrawerItem[]>([]);
    const [drawerContent, setDrawerContentState] = useState<ReactNode>(null);

    // Memoización de los ítems para evitar renders innecesarios
    const memoizedItems = useMemo(() => drawerItems, [drawerItems]);

    useEffect(() => {
        setDrawerContentState(memoizedItems 
            ?   <CustomDrawer items={memoizedItems} /> 
            :   null
        );
    }, [memoizedItems]);

    const clearDrawer = () => setDrawerItems([]);

    const isDrawerVisible = !!drawerContent;

    return (
        <DrawerContext.Provider
            value={{ setDrawerItems, drawerContent, isDrawerVisible, clearDrawer }}
        >
            {children}
        </DrawerContext.Provider>
    );
};

export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerProvider');
    }
    return context;
};