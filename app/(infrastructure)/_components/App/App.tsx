'use client'
import { ReactNode, useContext } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/(infrastructure)/_redux/app/store";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeProviderMode from "@/app/(infrastructure)/_styles/ThemeProviderMode";
import { ThemeProvider } from "@mui/material/styles";
import ThemeContextMode from "@/app/(infrastructure)/_styles/ThemeContextMode";
import { darkTheme, lightTheme } from "@/app/(infrastructure)/_styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ children }: { children: ReactNode }) {
    const { value } = useContext(ThemeContextMode);

    return (
        <ReduxProvider store={store}>
            <AppRouterCacheProvider>
                <ThemeProviderMode>
                    <ThemeProvider theme={value === "light" ? lightTheme : darkTheme}>
                        <CssBaseline />
                        {children}
                    </ThemeProvider>
                </ThemeProviderMode>
            </AppRouterCacheProvider>
        </ReduxProvider>
    );
}