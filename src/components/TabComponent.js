import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {TabDoor,TabDoorContent} from "./tabs/TabDoor";
import "../css/TabsNav.css";
import TabDevices from "./tabs/TabDevices";
import TabPrice from "./tabs/TabPrice";

class TabComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      TabIndex: 0
    };
  }
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.TabIndex}
          onSelect={TabIndex => this.setState({TabIndex : TabIndex})}
        >
          <TabList className="tab-nav-container">
            <Tab className={this.state.TabIndex === 0 ? "tab-selected" : null}>
              <TabDoor></TabDoor>
              <p style={{ marginTop: "0.4125rem" }}>
                <strong>
                  No commitments
                  <br />
                  Cancle online at anytime
                </strong>
              </p>
            </Tab>
            <Tab className={`${this.state.TabIndex === 1 ? "tab-selected" : null}`}>
              <TabDevices></TabDevices>
              <p style={{ marginTop: "-5.3125rem" }}>
                <strong>Watch anywhere</strong>
              </p>
            </Tab>
            <Tab className={`${this.state.TabIndex === 2 ? "tab-selected" : null}`}>
              <TabPrice></TabPrice>
              <p style={{ marginTop: "-0.0125rem" }}>
                <strong>Pick yout price</strong>
              </p>
            </Tab>
          </TabList>
          <TabPanel>
              <TabDoorContent></TabDoorContent>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
