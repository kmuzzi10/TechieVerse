import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { DarkModeProvider } from "./context/darkModeProvider.tsx"; // <-- adjust the path as needed
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  </StrictMode>
);
