import './App.css';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1 className="titulo">Registrese como nuevo usuario</h1>
      <div className="campos">
        <form className="formulario">
          <label className="nombre">
            Nombre:
            <input type="text" name="nombre"/>
          </label>
          <label className="correo">
            Correo:
            <input type="text" name="correo" />
          </label>
          <label className="tlf">
            Teléfono:
            <input type="text" name="tlf" />
          </label>
          <label className="tarjeta">
            Tarjeta de crédito:
            <input type="text" name="tarjeta" />
          </label>
        </form>
        <button className="registBoton" onClick={registrar}>Registrame</button>
      </div>
    </div>
  );
}


function registrar() {
  alert("pene")
}


export default App;
