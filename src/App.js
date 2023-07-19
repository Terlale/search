import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=50`)
      .then((res) => {
        setData(res.data.results);
      })
      
  }, []);
  
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 60px",
          backgroundColor: "#707379",
        }}
      >
        <div>
          <h1 style={{color: "white"}}>Logo</h1>
        </div>
        <div style={{display:"flex"}}>
          <input
            type="text"
            placeholder="Search"
            style={{
              height: "32px",
              borderRadius: "15px 0px 0px 15px",
              border: "none",
              paddingLeft: "10px",
            }}
          />
          <button
            type="submit"
            style={{
              height: "34px",
              border: "none",
              borderRadius: "0px 15px 15px 0px",
              width: "38px",
              backgroundColor: "yellow",         
            }}
          >
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div style={{padding: "0px 60px",}}>
        <h2 style={{textAlign:"center"}}>Users' names</h2>
        <hr/>
        <div>
        <ul style={{listStyleType:"decimal"}}>
        {data.map((item) => (
          <li><h3 key={item.login.uuid}>{item.name.first}</h3></li>
        ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default App;
