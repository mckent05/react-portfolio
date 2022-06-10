import React, { useState } from "react";
import { Drawer, List, IconButton } from "@mui/material"
import MobileLink from "./MobileLink";

const DrawerComponent = () => {
  const [links] = useState(["Home", "About", "Projects", "Skills", "Contact"]);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {links.map((el) => (
            <MobileLink key={el} linkName={el} onClick={() => setOpenDrawer(false)} />
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <button>click here</button>
      </IconButton>
    </>
  );
};

export default DrawerComponent;
