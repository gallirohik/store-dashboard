import React from "react";
import "../styles/rc/rightcontainer.css";
const RightContainer = props => {
  return <div className="right-container">{props.children}</div>;
};

const RCHeader = props => {
  return <div className="right-container-header">{props.children}</div>;
};

const RCPanel = props => {
  return <div className="right-container-panel">{props.children}</div>;
};

const RCPItem = props => {
  return <div className="right-container-panel-item">{props.children}</div>;
};

export { RightContainer, RCHeader, RCPanel, RCPItem };
