import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter basename="/SCC-0560-Caaso-Eletroniks">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
