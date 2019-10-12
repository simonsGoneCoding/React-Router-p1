import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

const Home = () => <h2>Home Page</h2>;
const News = () => <h2>Latest News</h2>;
const Contact = () => <h2>Leave me alone</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" exact activeClassName="home_selected">
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" activeClassName="news_selected">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="contact_selected">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
