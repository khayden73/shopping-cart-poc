import "./App.css";
// import { CartSummary } from "./components/Cart/CartSummary.tsx";
import { CatalogProvider } from "./components/Catalog/CatalogProvider.tsx";
import { CartProvider } from "./components/Cart/CartProvider.tsx";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { DEFAULT_THEME } from "./config/themes.ts";
import { getThemeById } from "./services/themeService.ts";
import { SideNav } from "./components/Shell/SideNav.tsx";

function App() {
  const theme = getThemeById(DEFAULT_THEME);

  return (
    <ThemeProvider theme={theme.config}>
      <CssBaseline />
      <Box sx={{ padding: "0", marginTop: "30px" }}>
        <CatalogProvider>
          <CartProvider>
            <SideNav />
            <main>
              <Outlet />
            </main>
          </CartProvider>
        </CatalogProvider>
      </Box>
      {/*<div className="app-wrapper">
        <CatalogProvider>
          <CartProvider>
            <header>
              <h1>Welcome</h1>
            </header>
            <aside>
              <CartSummary />
            </aside>
            <main>
              <Outlet />
            </main>
          </CartProvider>
        </CatalogProvider>
      </div>*/}
    </ThemeProvider>
  );
}

export default App;
