// contexts/DrawerContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DrawerContextProps {
    isOpen: boolean;
    toggleDrawer: (open: boolean) => void;
    setDrawerContent: (content: ReactNode) => void;
    drawerContent: ReactNode;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState<ReactNode>(null);

    const toggleDrawer = (open: boolean) => setIsOpen(open);

    return (
        <DrawerContext.Provider
            value={{ isOpen, toggleDrawer, setDrawerContent, drawerContent }}
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