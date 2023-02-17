import React from "react";
import { StyledNavList } from "../../../styles/StyledNavBar";
import { navItems } from "../../../asset/content";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import StyledLink from "../../../styles/StyledLink";

const NavList = () => {
  return (
    <StyledNavList>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <StyledLink
                    to={item === "home" ? "/" : `/${item}`}
                    style={{
                      fontFamily: "poppins",
                      textTransform: "uppercase",
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
