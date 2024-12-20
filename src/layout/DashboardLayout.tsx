import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/auth/AuthContext'; // Ajusta el path según tu estructura
import { useToolbar } from '../context/toolbar/ToolbarContext'; // Ajusta el path según tu estructura
import { DashboardLayout as BootDashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Box, Drawer, Toolbar } from '@mui/material';
import { useDrawer } from '../context/drawer/DrawerContext';

export default function DashboardLayout() {
    const { logged } = useAuthContext();
    const { customToolbar: CustomToolbar, toolbarProps } = useToolbar(); // Sin genérico
    const location = useLocation();

    const { drawerContent, isDrawerVisible } = useDrawer();

    return logged ? (
        <BootDashboardLayout>
            <PageContainer
                slotProps={{
                    toolbar: {
                        children: <CustomToolbar {...(toolbarProps || {})} />, // Evitar error de spread
                    },
                }}
            >
                <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
                    <Box component="main" sx={{ flexGrow: 1, overflow: "auto" }}>
                        <Outlet />
                    </Box>
                    {isDrawerVisible && (
                        <Drawer
                            sx={{
                                width: 240,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: 240,
                                    boxSizing: 'border-box',
                                },
                            }}
                            variant="permanent"
                            anchor="right"
                        >
                            <Toolbar />
                            {drawerContent}
                        </Drawer>
                    )}
                </Box>
            </PageContainer>
        </BootDashboardLayout>
    ) : (
        <Navigate to={`/login?callbackUrl=${encodeURIComponent(location.pathname)}`} replace />
    );
}