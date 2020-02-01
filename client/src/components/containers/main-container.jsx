import React from "react";
import "../styles/mc/maincontainer.css";
const MainContainer = props => {
  return <div className="main-container">{props.children}</div>;
};

const MCItem = props => {
  return <div className="main-item">{props.children}</div>;
};

export { MainContainer, MCItem };
