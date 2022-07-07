import "./index.css";
import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Auth0Provider } from "@auth0/auth0-react";
import { config } from "./config";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.auth0.domain!}
      clientId={config.auth0.clientId!}
      redirectUri={config.auth0.redirectUrl}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
