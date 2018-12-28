import React, { Component } from "react";
import { Route, Router, Link, Switch, BrowserRouter } from "react-router-dom";
import { Layout, Menu } from "antd";

import routes from "../routes";
import AccountArea from "../component/accountarea";

const { Header, Content, Sider } = Layout;

const MenuItem= Menu.Item;

class MainLayout extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>nav.1</Menu.Item>
            <Menu.Item>nav.2</Menu.Item>
            <Menu.Item>
              <AccountArea />
            </Menu.Item>
          </Menu>
        </Header>
        <BrowserRouter>
          <Layout>
            <Sider theme="light" width="120">
              <Menu>
                <MenuItem>
                  <Link to="/">Dashboard</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/Xxk">信息科</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/About">About</Link>
                </MenuItem>
              </Menu>
            </Sider>
            <Content>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Content>
          </Layout>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default MainLayout;
