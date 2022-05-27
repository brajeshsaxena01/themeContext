import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Button } from "./Button/Button";
import { ThemeContextProvider } from "./ContextApi/ThemeContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
      <Button text={"THEME"} />
    </ThemeContextProvider>
  </StrictMode>
);
