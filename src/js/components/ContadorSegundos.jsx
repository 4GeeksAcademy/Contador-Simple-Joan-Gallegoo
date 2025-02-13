import React from "react";

function ContadorSegundos({ segundos = 0 }) {
  return (
    <div>
      <p>Este es el secundero: {segundos.toString().padStart(6, "0")}</p>
    </div>
  );
}
export default ContadorSegundos;
