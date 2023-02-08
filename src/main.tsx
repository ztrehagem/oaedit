import React from "react";
import ReactDOM from "react-dom/client";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const mountPoint = document.getElementById("app")!;

const app = ReactDOM.createRoot(mountPoint);

app.render(
  <React.StrictMode>
    <div>oaedit</div>
  </React.StrictMode>
);
