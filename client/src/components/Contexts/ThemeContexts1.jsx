import React, { createContext, useState } from "react";

export const ThemeContexts1 = createContext({
  theme1: "",
  handleChangeTheme1: () => {},
});

export default function Theme1({ children }) {
  const [theme1, setTheme1] = useState(false);

  const handleChangeTheme1 = () => {
    setTheme1(theme1 === false ? true : false);
  };
  return (
    <ThemeContexts1.Provider value={{ theme1: theme1, handleChangeTheme1 }}>
      {children}
    </ThemeContexts1.Provider>
  );
}
