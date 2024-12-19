import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/auth/AuthContext'; // Ajusta el path según tu estructura
import { useToolbar } from '../context/toolbar/ToolbarContext'; // Ajusta el path según tu estructura
import { DashboardLayout as BootDashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Divider, Drawer, Toolbar } from '@mui/material';
import { useDrawer } from '../context/drawer/DrawerContext';

export default function DashboardLayout() {
    const { logged } = useAuthContext();
    const { customToolbar: CustomToolbar, toolbarProps } = useToolbar(); // Sin genérico
    const location = useLocation();

    const { isOpen, toggleDrawer, drawerContent } = useDrawer();

    return logged ? (
        <BootDashboardLayout>
            <PageContainer
                slotProps={{
                    toolbar: {
                        children: <CustomToolbar {...(toolbarProps || {})} />, // Evitar error de spread
                    },
                }}
            >
                <Outlet />
                <Drawer
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: 240,
                            boxSizing: "border-box",
                        },
                    }}
                    variant="permanent"
                    anchor="right"
                >
                    <Toolbar />
                    <Divider />
                    {drawerContent}
                </Drawer>
            </PageContainer>
        </BootDashboardLayout>
    ) : (
        <Navigate to={`/login?callbackUrl=${encodeURIComponent(location.pathname)}`} replace />
    );
}