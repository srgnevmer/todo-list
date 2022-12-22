import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { store } from "../redux/store";
import { ThemeProvider, ModalProvider } from "../context";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <RouterProvider router={router}></RouterProvider>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
