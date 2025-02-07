import React from "react";
import ReactDOM from "react-dom/client";
import ContadorSegundos from "./components/ContadorSegundos.jsx";

let variable = 0;

function increment() {
  setInterval(() => {
    ReactDOM.createRoot(document.getElementById("app")).render(
      <>
        <ContadorSegundos segundos={variable} />
      </>
    );
    variable++;
  }, 1000);
}

increment();
