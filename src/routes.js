import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
);

export default AppRouter;
