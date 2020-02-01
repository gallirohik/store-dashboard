import React from "react";
import "../styles/lc/leftcontainer.css";
const LeftContainer = props => {
  return <div className="left-container">{props.children}</div>;
};

const LCHeader = props => {
  return <div className="left-container-header">{props.children}</div>;
};

const LCPanel = props => {
  return <div className="left-container-panel">{props.children}</div>;
};

const LCPItem = props => {
  return <div className="left-container-panel-item">{props.children}</div>;
};

export { LeftContainer, LCHeader, LCPanel, LCPItem };
