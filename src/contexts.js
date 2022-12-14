import React, { createContext } from "react";

export const MenuContext = React.createContext({
  isactive: false,
  setIsActive: () => {},
});
