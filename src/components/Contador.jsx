import React, { useState, Fragment } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero + 1);
  };

  return (
    <Fragment>
      <h3>mi primer componente con hooks {numero}</h3>
      <button onClick={aumentar}>aumentar</button>
    </Fragment>
  );
};

export default Contador;
