import { useState, useEffect } from "react";

const Contador = ({ start = 0 }) => {
  const [segundos, setSegundos] = useState(start);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);
};

export default Contador;
