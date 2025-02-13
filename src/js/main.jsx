import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ContadorSegundos from "./components/ContadorSegundos";

function App() {
  const [segundos, setSegundos] = useState(0);

  function iniciarContador() {
    setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);
  }

  iniciarContador(); 

  return <ContadorSegundos segundos={segundos} />;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
