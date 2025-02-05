import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Contador from "./components/Contador";

const App = () => {
  const [segundosAcumulados, setSegundosAcumulados] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundosAcumulados((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);


  const formatoSegundos = segundosAcumulados.toString().padStart(6, '0');

  return (
    <div className="p-6 bg-white text-center">
      <h1 className="text-2xl font-bold mb-4">Contador</h1>
      <div className="mt-4 text-xl font-bold"><strong>{formatoSegundos}</strong></div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);