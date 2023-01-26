import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./route";
// import UserProvider from "../src/context/user";

function App() {
  return (
    // <UserProvider>
    <BrowserRouter className="App">
      <RouterApp />
    </BrowserRouter>
    // </UserProvider>
  );
}

export default App;
