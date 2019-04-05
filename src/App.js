import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RunningPlayList from "./components/RunningPlayList";
import UserList from "./components/UserList";
import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  getCurrentUserId = () => {
    // id = api.get("/user")
    // id를 자식에게 넘김
  };

  render() {
    const { music } = this.state;
    return (
      <div className="App">
      <Nav tabs className="App-Tabs">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              userlist
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <RunningPlayList />
          </TabPane>
          <TabPane tabId="2">
          <UserList />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default App;
