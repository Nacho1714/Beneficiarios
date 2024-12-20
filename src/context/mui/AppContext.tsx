import { ReactNode } from "react";
import { AppProvider as MuiAppProvider } from "@toolpad/core/react-router-dom";
import { Session } from "@toolpad/core";

import { NAVIGATION } from "../../config/router";

import { useAuthContext } from "../auth/AuthContext";
import { useThemeContext } from "../theme/ThemeContext";

// Image
import logo from '../../../public/assets/logo-caja.png'

const BRANDING = {
    title: 'Documentación CRJPPF',
    logo: (
        <img
            src={logo} 
            alt="Escudo Caja de Retiros, Jubilaciones y Pensiones de la Policía Federal" 
        />
    )
};

// Provider
export const AppProvider = ({ children }: {children: ReactNode}): JSX.Element => {

    // const { theme } = useThemeContext();
    const { signIn, signOut, user } = useAuthContext();

    const session: Session = {
        user: {
            id: user?.id,
            name: user?.name,
            email: user?.email,
        }
    }

    return (
        <MuiAppProvider
            navigation={NAVIGATION}
            branding={BRANDING}
            authentication={{ signIn, signOut }}
            session={session}
            // theme={theme}
        >
            {children}
        </MuiAppProvider>
    )
}