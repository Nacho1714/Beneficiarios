export interface DrawerItem {
    id: string; // ID único para navegación
    name: string; // Nombre visible del ítem
    subItems?: DrawerItem[]; // Subítems anidados
}