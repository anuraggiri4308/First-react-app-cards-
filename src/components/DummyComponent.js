import PropTypes from "prop-types";
import "./DummyComponent.css";
import Cards from "./Cards";

export default function DummyComponent(props) {
  return (
    <Cards className="main">
      <div className="box">
        <h1 className="name">{props.id}</h1>
      </div>
    </Cards>
  );
}
DummyComponent.propTypes = {
  name: PropTypes.number, //if we provide name: PropTypes.string then iot will give error in console
};
