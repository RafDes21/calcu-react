import React, { useState } from "react";
import "./calculadora.css"

const Calculadora = () => {
  const [numeros, setNumeros] = useState(0);
  const [numeroguardado, setNumeroGuardado] = useState(0);
  const [operador, setOperador] = useState();

  function agregar(e) {
    if (numeros === 0) {
      setNumeros(e.target.value);
    } else {
      setNumeros(numeros + e.target.value);
    }
  }
  function operadores(e) {
    setOperador(e.target.value);
    setNumeroGuardado(numeros);
    setNumeros(0);
  }

  function operacion() {
    if (operador === "+") {
      setNumeros(parseFloat(numeroguardado) + parseFloat(numeros));
    }
    if (operador === "-") {
      setNumeros(parseFloat(numeroguardado) - parseFloat(numeros));
    }
    if (operador === "/") {
      setNumeros(parseFloat(numeroguardado) / parseFloat(numeros));
    }
    if (operador === "*") {
      setNumeros(parseFloat(numeroguardado) * parseFloat(numeros));
    }
  }
  function borrar() {
    setNumeros(0);
  }

  return (
    <div className="calculadora">

      <div className="row resultado">
        
      </div>
      <div className="caja row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="row">
          <span >{numeros}</span>
        <div className="numeros col-md-8">
          <button onClick={agregar} value={9}>
            9
          </button>
          <button onClick={agregar} value={8}>
            8
          </button>
          <button onClick={agregar} value={7}>
            7
          </button>
          <button onClick={agregar} value={6}>
            6
          </button>
          <button onClick={agregar} value={5}>
            5
          </button>
          <button onClick={agregar} value={4}>
            4
          </button>
          <button onClick={agregar} value={3}>
            3
          </button>
          <button onClick={agregar} value={2}>
            2
          </button>
          <button onClick={agregar} value={1}>
            1
          </button>
          <button onClick={agregar} value={0}>
            0
          </button>
        </div>
        <div className="operaciones col-md-4">
          <button onClick={borrar}>AC</button>
          <button onClick={operadores} value={"+"}>
            +
          </button>
          <button onClick={operadores} value={"-"}>
            -
          </button>
          <button onClick={operadores} value={"/"}>
            /
          </button>
          <button onClick={operadores} value={"*"}>
            *
          </button>
          <button onClick={operacion} value={"="}>
            =
          </button>
        </div>
          </div>

        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Calculadora;
