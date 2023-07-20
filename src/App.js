import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const App = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=50`).then((res) => {
      setData(res.data.results);
    });
  }, []);
  
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredUsers = data.filter((item) =>
  `${item.name.title} ${item.name.first} ${item.name.last}`
    .toLowerCase()
    .includes(searchText.toLowerCase())
);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 60px",
          backgroundColor: "rgb(105 106 110 / 52%)",
        }}
      >
        <div>
          <h1 style={{ color: "white" }}>Logo</h1>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              height: "32px",
              borderRadius: "15px 0px 0px 15px",
              border: "none",
              paddingLeft: "10px",
              outline: "none",
            }}
            value={searchText}
            onChange={handleSearch}
          />
          <button
            type="submit"
            style={{
              height: "34px",
              border: "none",
              borderRadius: "0px 15px 15px 0px",
              width: "38px",
              backgroundColor: "#ffff74",
            }}
          >
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div style={{ padding: "0px 60px" }}>
        <h2 style={{ textAlign: "center" }}>Users</h2>
        <hr />
        <div>
          {filteredUsers.map((item) => (
            <div
              key={item.login.uuid}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                margin: "20px 0px",
                padding: " 0px 5px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.picture.thumbnail}
                alt={item.name.first}
                style={{
                  borderRadius: "50%",
                  width: "37px",
                  border: "4px solid grey",
                }}
              />
              <h3>
                {item.name.title}. {item.name.first} {item.name.last}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
