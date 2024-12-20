import React, { useEffect, useMemo } from 'react';
import { List, ListItemButton, ListItemText, styled } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { DrawerItem } from '../../../../interface/drawer';

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    '& .MuiTypography-root': {
        fontSize: '0.875rem', // Tamaño de fuente
        fontWeight: 400,
        // color: '#e0e0e0',
    },
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const StyledSelectedItem = styled('div')(({ theme }) => ({
    borderLeft: `3px solid ${theme.palette.primary.main}`, // Indicador azul
    paddingLeft: theme.spacing(2),
}));

export default function CustomDrawer({ items }: { items: DrawerItem[] }) {

    const location = useLocation();

    // Efecto para desplazarse al hash actual al cargar la página o cambiar el hash
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1)); // Elimina el '#' del hash
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location.hash]);

    // Función para renderizar un ítem (y sus subitems si los tiene)
    const renderDrawerItems = (drawerItems: DrawerItem[], parentId: string | null = null) => {
        return drawerItems.map((item) => {
            const isSelected = location.hash === `#${item.id}`;
            const hasSubItems = item.subItems && item.subItems.length > 0;

            return (
                <React.Fragment key={item.id}>
                    <ListItemButton
                        component={Link}
                        to={`#${item.id}`}
                        sx={parentId ? { pl: 4 } : undefined} // Sangría para subitems
                    >
                        {isSelected ? (
                            <StyledSelectedItem>
                                <StyledListItemText primary={item.name} />
                            </StyledSelectedItem>
                        ) : (
                            <StyledListItemText primary={item.name} />
                        )}
                    </ListItemButton>

                    {hasSubItems && <List component="div">{renderDrawerItems(item.subItems!, item.id)}</List>}
                </React.Fragment>
            );
        });
    };

    // Memorizar los ítems renderizados para optimizar el rendimiento
    const renderedItems = useMemo(() => renderDrawerItems(items), [items, location.hash]);

    return <List>{renderedItems}</List>;
};