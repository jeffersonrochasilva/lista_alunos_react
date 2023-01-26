import { useContext } from "react";
import { UserContext } from "../../context/user";
import "./List.css";

const List = () => {
  const { alunos, setAlunosContext } = useContext(UserContext);

  function deleteAlunos(item) {
    console.log("%citem", "color:red;", item);
    setAlunosContext(item);
    console.log("%cAlunos", "color:green;", alunos);
  }
  return (
    <div className="list">
      <div>
        {alunos.map((item) => {
          return (
            <ul className="container" key={item.name}>
              <li className="content">{item.name}</li>
              <li className="content">{item.lastName}</li>
              <li className="content">{item.age}</li>
              <li className="content">{item.rm}</li>
              <li
                className="content-btn"
                onClick={() => deleteAlunos(item.name)}
              >
                x
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default List;
