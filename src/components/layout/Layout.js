import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import NavbarTop from "./NavbarTop";
import NavBarDrawer from "./Drawer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const mdTheme = createTheme();

export const Layout = () => {
  const [open, setOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("/");
  const history = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let newRoute;
    if (selectedTab === "Documentation") newRoute = "docs";
    else {
      newRoute = selectedTab.toLowerCase().replace(/\s/g, "");
    }
    history(`../${newRoute}`, { replace: false });
  }, [selectedTab, history]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavbarTop open={open} toggleDrawer={toggleDrawer} />
        <NavBarDrawer
          open={open}
          toggleDrawer={toggleDrawer}
          setSelectedTab={setSelectedTab}
        />
      </Box>
    </ThemeProvider>
  );
};
