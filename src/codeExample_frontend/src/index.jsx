import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AuthClient } from '@dfinity/auth-client';

const init = async () => {
  const authClient = await AuthClient.create();
  const userPrincipal = authClient.getIdentity().getPrincipal().toString()
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <App userPrincipal={userPrincipal} />

    </div>
  );

};


init();
