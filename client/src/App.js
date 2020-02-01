import React from "react";
import "./App.css";
import {
  LeftContainer,
  LCHeader,
  LCPanel,
  LCPItem
} from "./components/containers/left-container";
import {
  RightContainer,
  RCHeader,
  RCPanel,
  RCPItem
} from "./components/containers/right-container";
import { MainContainer, MCItem } from "./components/containers/main-container";
function App() {
  return (
    <div className="App">
      <div className="dashboard-layout">
        <div className="navbar"></div>
        <LeftContainer>
          <LCHeader>
            <h1>This is Brands Area</h1>
          </LCHeader>
          <LCPanel>
            <LCPItem></LCPItem>
            <LCPItem></LCPItem>
            <LCPItem></LCPItem>
            <LCPItem></LCPItem>
            <LCPItem></LCPItem>
            <LCPItem></LCPItem>
            <LCPItem></LCPItem>
            <LCPItem></LCPItem>
            <LCPItem></LCPItem>
            <LCPItem></LCPItem>
          </LCPanel>
        </LeftContainer>
        <MainContainer>
          <MCItem>
            <h1>Order Detail Panel</h1>
          </MCItem>
          <MCItem></MCItem>
          <MCItem></MCItem>
          <MCItem></MCItem>
          <MCItem></MCItem>
          <MCItem></MCItem>
        </MainContainer>
        <RightContainer>
          <RCHeader>
            <h1>This is Orders Area</h1>
          </RCHeader>
          <RCPanel>
            <RCPItem></RCPItem>
            <RCPItem></RCPItem>
            <RCPItem></RCPItem>
            <RCPItem></RCPItem>
            <RCPItem></RCPItem>
            <RCPItem></RCPItem>
            <RCPItem></RCPItem>
            <RCPItem></RCPItem>
            <RCPItem></RCPItem>
            <RCPItem></RCPItem>
          </RCPanel>
        </RightContainer>
      </div>
    </div>
  );
}

export default App;
