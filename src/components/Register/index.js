import { useState } from "react";
import "./Register.css";
const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [rm, setRm] = useState("");

  const register = () => {
    if (name === "" || lastName === "" || age === "" || rm === "") {
      return alert("necessario preenchimento dos campos");
    }
    const params = {
      name: name,
      lastName: lastName,
      age: age,
      rm: rm,
    };

    console.log("%cparams", "color: red;", params);

    setName("");
    setLastName("");
    setAge("");
    setRm("");
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="camp-name"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="camp-name"
        placeholder="Digite seu sobreNome"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="camp-name"
        placeholder="Digite sua idade"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        className="camp-name"
        placeholder="Digite seu rm"
        value={rm}
        onChange={(e) => setRm(e.target.value)}
      />
      <button className="btn-register" onClick={register}>
        Cadastrar
      </button>
    </div>
  );
};

export default Register;
