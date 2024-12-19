import React from 'react';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    '& .MuiTypography-root': {
        fontSize: '0.875rem', // Tamaño de fuente
        fontWeight: 400,
        color: '#e0e0e0', // Color del texto
    },
}));

const StyledSelectedItem = styled('div')(({ theme }) => ({
    borderLeft: `3px solid ${theme.palette.primary.main}`, // Indicador azul
    paddingLeft: theme.spacing(2),
}));

interface DrawerItem {
    id: string; // ID único para navegación
    name: string; // Nombre visible del ítem
    subItems?: DrawerItem[]; // Subítems anidados
}

export const generateDrawerContent = (items: DrawerItem[]) => {
    const DrawerContent: React.FC = () => {
        const [open, setOpen] = useState<string | null>(null); // Controla qué menú está abierto
        const location = useLocation();
        const navigate = useNavigate();

        const handleToggle = (id: string) => {
            setOpen((prev) => (prev === id ? null : id)); // Alterna el submenú activo
        };

        const handleNavigation = (id: string) => {
            // Cambia la URL
            navigate(`#${id}`);

            // Desplaza a la sección
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        return (
            <List>
                {items.map((item) => {
                    const isSelected = location.hash === `#${item.id}`;

                    return (
                        <React.Fragment key={item.id}>
                            {/* Ítem Principal */}
                            <ListItemButton
                                onClick={() =>
                                    item.subItems ? handleToggle(item.id) : handleNavigation(item.id)
                                }
                            >
                                {isSelected ? (
                                    <StyledSelectedItem>
                                        <StyledListItemText primary={item.name} />
                                    </StyledSelectedItem>
                                ) : (
                                    <StyledListItemText primary={item.name} />
                                )}
                                {item.subItems && (open === item.id ? <ExpandLess /> : <ExpandMore />)}
                            </ListItemButton>

                            {/* Submenú Expandible */}
                            {item.subItems && (
                                <Collapse in={open === item.id} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {item.subItems.map((subItem) => {
                                            const isSubSelected = location.hash === `#${subItem.id}`;

                                            return (
                                                <ListItemButton
                                                    key={subItem.id}
                                                    onClick={() => handleNavigation(subItem.id)}
                                                    sx={{ pl: 4 }}
                                                >
                                                    {isSubSelected ? (
                                                        <StyledSelectedItem>
                                                            <StyledListItemText primary={subItem.name} />
                                                        </StyledSelectedItem>
                                                    ) : (
                                                        <StyledListItemText primary={subItem.name} />
                                                    )}
                                                </ListItemButton>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    );
                })}
            </List>
        );
    };

    return <DrawerContent />;
};