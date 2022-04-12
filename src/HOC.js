import React from "react";

const HOC = (Wrappedcomponents, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      search: "",
    };
    componentDidMount() {
      const fetchdata = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const data = await res.json();
        // setData(data);
        this.setState({ ...this.state, data });
      };
      fetchdata();
    }
    render() {
      let { search, data } = this.state;
      let filteredData = data.slice(0, 10).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
        }
      });
      return (
        <>
          <h2>{entity}</h2>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              this.setState({ ...this.state, search: e.target.value });
            }}
          />
          <Wrappedcomponents data={filteredData}></Wrappedcomponents>
        </>
      );
    }
  };
};

export default HOC;
