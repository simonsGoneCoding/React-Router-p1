import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                {/* <li><a href="/">start</a></li>
                <li><a href="/news">news</a></li>
                <li><a href="/contact">contact</a></li> */}
                <li>
                  <Link to="/">start</Link>
                </li>
                <li>
                  <Link to="/news">news</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          <section>Welcome</section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
