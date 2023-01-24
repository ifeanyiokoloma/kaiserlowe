import { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children, window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <NavbarContext.Provider
      value={{ mobileOpen, container, handleDrawerToggle, drawerWidth }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
