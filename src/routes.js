import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from "./layout/dashboard";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const User = () => <h2>User</h2>;

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home</div>,
    main: () => <Dashboard/>
  },
  {
    path: "/About",
    sidebar: () => <div>about</div>,
    main: () => <h2>This is about</h2>
  },
  {
    path: "/User",
    sidebar: () => <div>user</div>,
    main: () => <h2>This is User</h2>
  }
];

const route2 = [
  {
    path: "/aa",
    exact: true,
    sidebar: () => <div>aa</div>,
    main: () => <h2>aa</h2>
  },
  {
    path: "/bb",
    sidebar: () => <div>bb</div>,
    main: () => <h2>bb</h2>
  },
]

const AppRouter = () => (
  // <Router>
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/">Dashboard</Link>
  //       </li>
  //       <li>
  //         <Link to="/user">User</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">About</Link>
  //       </li>
  //     </ul>

  //     <Route path="/" exact component={ Dashboard} />
  //     <Route path="/User" component={User} />
  //     <Route path="/About" component={About} />
  //   </div>
  // </Router>

  <div>
  <Router>
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {
        routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))
      }
    </ul>
    </Router>
    <Router>
    <ul>
      <li>
        <Link to="/aa">aa</Link>
      </li>
      <li>
        <Link to="/bb">bb</Link>
      </li>
      {
        route2.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))
      }
    </ul>
    </Router>
  </div>
);

export default AppRouter;
