import React, { Component, useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(message);

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history ">
          <li>Example</li>
        </ul>
        <nav>
          <p>Made by Toprak YILDIZ</p>
        </nav>
      </section>
      <section className="main">
        <h1>Clone-GPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="info">
            Clone-GPT version over 9000. We simply here guarantee here all this
            work is a clone of Chat-GPT and the coder is simply not skillfull
            enough to make his own thing.Yes i am talking to you Toprak.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
