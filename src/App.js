import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tabla integrantes Take Lirabry</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Celular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cristian</td>
            <td>Orozco</td>
            <td>cristian@mdo</td>
            <td>1234567</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Juan</td>
            <td>Contreras</td>
            <td>juan@fat</td>
            <td>7654321</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Valery</td>
            <td>Restrepo</td>
            <td>valery@twitter</td>
            <td>3216549</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Wilmer</td>
            <td>Ruiz</td>
            <td>wilmer@promaster</td>
            <td>0512163</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
