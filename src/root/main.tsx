import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "../components/ui";
import { App } from "./app";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
