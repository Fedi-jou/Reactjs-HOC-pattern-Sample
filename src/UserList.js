import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UserList = ({ data }) => {
  //   const [users, setUsers] = useState([]);
  //   const [search, setSerch] = useState("");
  //   useEffect(() => {
  //     const FetchUsers = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await res.json();
  //       data && console.log(data, "Users data");
  //       setUsers(data);
  //     };
  //     FetchUsers();
  //   }, []);
  let renderUsers = data.map((user, index) => {
    return <li key={user.id}>{user.name}</li>;
  });
  //   const Handlechange = (e) => {
  //     e.preventDefault();
  //     setSerch(e.target.value);
  //   };

  //   const FilterUsers = users
  //     .filter(({ name }) => {
  //       return name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
  //     })
  //     .map((user, index) => {
  //       return <li key={user.id}>{user.name}</li>;
  //     });

  return (
    <>
      {/* <input type="text" value={search} onChange={Handlechange} /> */}
      <div>{renderUsers}</div>
    </>
  );
};

const SearchUsers = HOC(UserList, "users");
export default SearchUsers;
