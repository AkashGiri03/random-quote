import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = ()=>{
  const [quote, SetQuote] = useState("Demo Quote");
  const handlequote = async () =>{
    const res = await axios.get("https://api.quotable.io/random");
    SetQuote(res.data.content);
  };

  return (
    <div className="box">
      <i className="fas fa-quote-left fa2"></i>
      <div className="text">
        <i className="fas fa-quote-right fa1"></i>
        <div>
          <h3> Quote of the day</h3>
          <p>{quote}</p>
          <button onClick={handlequote}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default App;


