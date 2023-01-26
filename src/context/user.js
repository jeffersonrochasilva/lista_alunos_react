import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [alunos, setAlunos] = useState([
    {
      name: "Jefferson",
      lastName: "Rocha",
      age: "30",
      rm: "6515161516",
    },
    {
      name: "Maria",
      lastName: "Silva",
      age: "54",
      rm: "6515161516",
    },
    {
      name: "João",
      lastName: "Gonsalves",
      age: "45",
      rm: "6515161516",
    },
  ]);

  function setAlunosContext(res) {
    const params = alunos.filter((item) => item.name !== res);
    setAlunos(params);
  }

  return (
    <UserContext.Provider value={{ alunos, setAlunosContext }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
