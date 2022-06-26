import React from "react";
//import Cards from "./Cards";
import "./RenderCards.css";
import DummyComponent from "./DummyComponent";

function RenderCards(props) {
  return (
    <div className="ui">
      <DummyComponent id={props.item[0].id} />
      <DummyComponent id={props.item[1].id} />
      <DummyComponent id={props.item[2].id} />
    </div>
  );
}

export default RenderCards;
