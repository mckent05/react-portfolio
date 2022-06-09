import React, { useState } from "react";
import Link from "./Link";

const NavBar = () => {
  const [links] = useState(["Home", "About", "Projects", "Skills", "Contact"]);

  return (
    <div>
      {links.map((el) => (
        <Link linkName={el} key={el} />
      ))}
    </div>
  );
};

export default NavBar;
