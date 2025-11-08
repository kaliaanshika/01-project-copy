import React,{ useState } from "react";
import Classes from "./App.module.css"
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
function App() {
  const [users, setUsers] = useState([]);
  const addUsreHandler = (UName, UAge) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { name: UName, age: UAge }];
    });
  };

  return (
    <React.Fragment className={Classes.app}>
      <AddUser onAddUser={addUsreHandler} />
      <UserList users={users} />
    </React.Fragment>
  );
  
}

export default App;