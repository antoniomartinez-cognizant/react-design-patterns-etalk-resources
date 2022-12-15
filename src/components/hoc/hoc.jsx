import React from "react";
import withHover from "./withHover";

const Hoc = (props) => {
  return (
    <div {...props}>
      {props.hovering && <div id="hover">Hovering!</div>}
      <div id="banner">Hover to trigger the event!</div>
    </div>
  );
};

export default withHover(Hoc);
