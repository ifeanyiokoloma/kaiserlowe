import React from 'react'
import { StyledNavList } from '../../../styles/StyledNavBar';
import { navItems } from '../../../asset/content';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const NavList = () => {
  return (
    <StyledNavList>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <span
                    style={{
                      fontFamily: "poppins",
                      textTransform: "uppercase",
                    }}
                  >
                    {item}
                  </span>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledNavList>
  );
}

export default NavList