import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DrawerContextProps {
    setDrawerContent: (content: ReactNode) => void;
    drawerContent: ReactNode;
    isDrawerVisible: boolean;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [drawerContent, setDrawerContent] = useState<ReactNode>(null);

    // Calculamos visibilidad del Drawer
    const isDrawerVisible = !!drawerContent;

    return (
        <DrawerContext.Provider
            value={{ setDrawerContent, drawerContent, isDrawerVisible }}
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