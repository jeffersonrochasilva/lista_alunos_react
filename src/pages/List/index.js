import { useState } from "react";
import UserProvider from "../../context/user";
import List from "../../components/List";
import "./list.css";

const Content = () => {
  return (
    <UserProvider>
      <div className="list">
        <h1>content</h1>
        <List />
      </div>
    </UserProvider>
  );
};

export default Content;
