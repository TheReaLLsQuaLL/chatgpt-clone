import React, { Component } from "react";

function App() {
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
            <input />
            <div id="submit">➢</div>
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
