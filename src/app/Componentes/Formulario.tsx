import React, { useState } from 'react';
import { Persona } from '../Interfaces/IFormulario';
import { registrarPersona } from '../Firebase/Promesas';

export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [edad, setEdad] = useState('');
  const [fecha_nacimiento, setFechaNacimiento] = useState('');
  const [email, setEmail] = useState('');
  const [pais, setPais] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sexo, setSexo] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorContraseña, setErrorContraseña] = useState('');
  const [errorEdad, setErrorEdad] = useState('');
  const [errorFechaNacimiento, setErrorFechaNacimiento] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPais, setErrorPais] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');
  const [errorSexo, setErrorSexo] = useState('');

  const paisesDisponibles = [
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "España",
    "Estados Unidos",
    // Agrega más países si es necesario
  ];

  const validarNombre = (valor: string) => {
    setNombre(valor.trim());
    if (valor.trim() === '') {
      setErrorNombre('El nombre no puede estar vacío');
    } else if (valor.length < 3) {
      setErrorNombre('El nombre debe tener al menos 3 letras');
    } else {
      setErrorNombre('');
    }
  };

  const validarContraseña = (valor: string) => {
    setContraseña(valor);
    if (valor.trim() === '') {
      setErrorContraseña('La contraseña no puede estar vacía');
    } else {
      setErrorContraseña('');
    }
  };

  const validarEdad = (valor: string) => {
    setEdad(valor);
    const edadNum = parseInt(valor);
    if (isNaN(edadNum) || edadNum <= 0) {
      setErrorEdad('La edad debe ser un número válido y mayor a cero');
    } else {
      setErrorEdad('');
    }
  };

  const validarFechaNacimiento = (valor: string) => {
    setFechaNacimiento(valor);
    if (valor.trim() === '') {
      setErrorFechaNacimiento('Debes seleccionar una fecha de nacimiento');
    } else {
      setErrorFechaNacimiento('');
    }
  };

  const validarEmail = (valor: string) => {
    setEmail(valor);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(valor)) {
      setErrorEmail('Ingresa un email válido');
    } else {
      setErrorEmail('');
    }
  };

  const validarPais = (valor: string) => {
    setPais(valor);
    if (valor.trim() === '') {
      setErrorPais('Debes seleccionar un país');
    } else {
      setErrorPais('');
    }
  };

  const validarTelefono = (valor: string) => {
    setTelefono(valor);
    const telefonoRegex = /^[0-9+]+$/;
    if (valor.trim() === '') {
      setErrorTelefono('El teléfono no puede estar vacío');
    } else if (!telefonoRegex.test(valor)) {
      setErrorTelefono('El teléfono debe contener solo números y el símbolo "+"');
    } else {
      setErrorTelefono('');
    }
  };

  const validarSexo = (valor: string) => {
    setSexo(valor);
    if (valor.trim() === '') {
      setErrorSexo('Debes seleccionar un sexo');
    } else {
      setErrorSexo('');
    }
  };

  const registrar = () => {
    if (nombre === '') {
      setErrorNombre('El nombre no puede estar vacío');
      return;
    }

    if (contraseña === '') {
      setErrorContraseña('La contraseña no puede estar vacía');
      return;
    }

    const edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum <= 0) {
      setErrorEdad('La edad debe ser un número válido y mayor a cero');
      return;
    }

    if (fecha_nacimiento.trim() === '') {
      setErrorFechaNacimiento('Debes seleccionar una fecha de nacimiento');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail('Ingresa un email válido');
      return;
    }

    if (pais.trim() === '') {
      setErrorPais('Debes seleccionar un país');
      return;
    }

    const telefonoRegex = /^[0-9+]+$/;
    if (telefono.trim() === '') {
      setErrorTelefono('El teléfono no puede estar vacío');
      return;
    } else if (!telefonoRegex.test(telefono)) {
      setErrorTelefono('El teléfono debe contener solo números y el símbolo "+"');
      return;
    }

    if (sexo.trim() === '') {
      setErrorSexo('Debes seleccionar un sexo');
      return;
    }

    // Asuman que se validó todo
    const p: Persona = {
      nombre,
      contraseña,
      edad: parseInt(edad),
      fecha_nacimiento,
      email,
      pais,
      telefono,
      sexo,
    };

    registrarPersona(p);
    console.log(nombre);
    console.log(edad);
    console.log(fecha_nacimiento);
    console.log(email);
    console.log(pais);
    console.log(telefono);
    console.log(sexo);

    alert('Bienvenido ' + nombre);
  };

  return (
    <form>
      <label>
        Nombre: <br />
        <input
          type="text"
          onChange={(e) => validarNombre(e.target.value)}
          value={nombre}
        />
        <br />
      </label>
      <span>{errorNombre}</span>
      <br />

      <label>
        Contraseña: <br />
        <input
          type="password"
          onChange={(e) => validarContraseña(e.target.value)}
          value={contraseña}
        />
        <br />
      </label>
      <span>{errorContraseña}</span>
      <br />

      <label>
        Edad: <br />
        <input
          type="number"
          onChange={(e) => validarEdad(e.target.value)}
          value={edad}
        />
        <br />
      </label>
      <span>{errorEdad}</span>
      <br />

      <label>
        Fecha De Nacimiento: <br />
        <input
          type="date"
          onChange={(e) => validarFechaNacimiento(e.target.value)}
          value={fecha_nacimiento}
        />
        <br />
      </label>
      <span>{errorFechaNacimiento}</span>
      <br />

      <label>
        Email: <br />
        <input
          type="email"
          onChange={(e) => validarEmail(e.target.value)}
          value={email}
        />
        <br />
      </label>
      <span>{errorEmail}</span>
      <br />

      <label>
        Pais: <br />
        <select onChange={(e) => validarPais(e.target.value)} value={pais}>
          <option value="">Selecciona un país</option>
          {paisesDisponibles.map((pais) => (
            <option key={pais} value={pais}>
              {pais}
            </option>
          ))}
        </select>
        <br />
      </label>
      <span>{errorPais}</span>
      <br />

      <label>
        Telefono: <br />
        <input
          type="tel"
          onChange={(e) => validarTelefono(e.target.value)}
          value={telefono}
        />
        <br />
      </label>
      <span>{errorTelefono}</span>
      <br />

      <label>
        Sexo: <br />
        <input
          type="radio"
          name="sexo"
          value="hombre"
          onChange={(e) => validarSexo(e.target.value)}
        />
        <label>Hombre</label>
        <input
          type="radio"
          name="sexo"
          value="mujer"
          onChange={(e) => validarSexo(e.target.value)}
        />
        <label>Mujer</label>
        <br />
      </label>
      <span>{errorSexo}</span>
      <br />

      <button type="button" onClick={registrar}>
        Registrar
      </button>
    </form>
  );
};

export default Formulario;
