import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { DarkModeProvider } from "./context/darkModeProvider.tsx";
import { LoadingProvider, useLoading } from "./context/LoadingContext";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import "./index.css";

const RootWithLoading = () => {
  const { loading } = useLoading();
  return (
    <>
      <LoadingOverlay show={loading} />
      <App />
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <LoadingProvider>
        <BrowserRouter>
          <RootWithLoading />
        </BrowserRouter>
      </LoadingProvider>
    </DarkModeProvider>
  </StrictMode>
);
