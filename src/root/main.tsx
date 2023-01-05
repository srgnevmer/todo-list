import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { Provider } from "../ui";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
