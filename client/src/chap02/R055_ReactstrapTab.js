import React, {useState} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";

function R055_ReactstrapTab(props) {

  const [tabState, setTabState] = useState('React')

  let toggle = (tabNum) => {
    if(tabState !== tabNum) setTabState(tabNum)
  }

  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink active={tabState === 'React'} onClick={() => {toggle('React')}}>First Tab</NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={tabState === '200'} onClick={() => {toggle('200')}}>Second Tab</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={tabState}>
        <TabPane tabId={`React`}><h3>React</h3></TabPane>
        <TabPane tabId={`200`}><h3>200</h3></TabPane>
      </TabContent>
    </>
  );
}

export default R055_ReactstrapTab;