import React, { createContext, useState } from "react";

export const ThemeContexts2 = createContext({
  theme2: "",
  setTheme2: () => {},
});

export default function Theme2({ children }) {
  const [theme2, setTheme2] = useState([]);

  return (
    <ThemeContexts2.Provider value={{ theme2: theme2, setTheme2 }}>
      {children}
    </ThemeContexts2.Provider>
  );
}
