import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList";
import TodoList from "./TodoList";
import SearchUsers from "./UserList";
import Searchedtodos from "./TodoList";

function App() {
  return (
    <div className="App">
      {/* <UserList /> */}
      <SearchUsers />
      <br />
      <br />
      <br />
      {/* <TodoList /> */}
      <Searchedtodos />
    </div>
  );
}

export default App;
