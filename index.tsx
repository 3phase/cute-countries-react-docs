import { createRoot } from "react-dom/client";
import App from "./App";
import * as React from "react";
import "./index.css";

const container = document.getElementById("root");
// @ts-ignore
const root = createRoot(container);

root.render(<App />);
