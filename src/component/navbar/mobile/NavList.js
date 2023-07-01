import { useContext } from "react";
import { StyledNavList } from "../../../styles/StyledNavBar";
import { navItems } from "../../../asset/content";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import StyledLink from "../../../styles/StyledLink";
import { NavbarContext } from "../../../context/NavbarContext";

const NavList = () => {
  const { closeDrawer } = useContext(NavbarContext);
  return (
    <StyledNavList>
      <List sx={{ pl: 2 }}>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={closeDrawer} sx={{ padding: 0 }}>
              <ListItemText
                sx={{ margin: 0 }}
                primary={
                  <StyledLink
                    to={item === "home" ? "/" : `/${item}`}
                    style={{
                      fontFamily: "poppins",
                      textTransform: "uppercase",
                      display: "block",
                      height: "100",
                      // textAlign: "center",
                      padding: ".8rem",
                    }}
                  >
                    {item}
                  </StyledLink>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledNavList>
  );
};

export default NavList;
