import { spaceQueryClient } from "@hatch/space-sdk/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./theme.css";

const root = document.querySelector<HTMLElement>("[data-generated-space-root]");
if (!root) throw new Error("missing generated space root element");

createRoot(root).render(
  <QueryClientProvider client={spaceQueryClient}>
    <div className="hatch-space-root" data-hatch-space-root>
      <App />
    </div>
  </QueryClientProvider>,
);
