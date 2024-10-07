import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Partytown} from "@builder.io/partytown/react";
import TagManager from "react-gtm-module";

const rootEl = document.getElementById('root');

if (rootEl) {

    const tagManagerArgs = {
        gtmId: 'GTM-N8BFWTQH'
    }
    TagManager.initialize(tagManagerArgs)

  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
        <Partytown debug={true} forward={['dataLayer.push']} />
        <App />
    </React.StrictMode>,
  );
}
