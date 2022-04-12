import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  //   const [todos, setTodos] = useState([]);
  //   const [search, setSerch] = useState("");
  //   useEffect(() => {
  //     const FetchTodos = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //       const data = await res.json();
  //       data && console.log(data, "todos data");
  //       setTodos(data);
  //     };
  //     FetchTodos();
  //   }, []);
  let renderTodos = data.slice(0.1).map((todo, index) => {
    return <li key={todo.id}>{todo.title}</li>;
  });
  //   const Handlechange = (e) => {
  //     e.preventDefault();
  //     setSerch(e.target.value);
  //   };

  //   const FilterTodos = data
  //     .slice(0, 10)
  //     .filter(({ title }) => {
  //       return title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
  //     })
  //     .map((todo, index) => {
  //       return <li key={todo.id}>{todo.title}</li>;
  //     });

  return (
    <>
      {/* <input type="text" value={search} onChange={Handlechange} /> */}
      <div>{renderTodos}</div>
    </>
  );
};
const Searchedtodos = HOC(TodoList, "todos");
export default Searchedtodos;
