import React from "react";
import useHover from "./useHover";

const HocVsHook = () => {
  const [hoverRef, isHover] = useHover();
  return (
    <div ref={hoverRef}>
      {isHover && <div id="hover">Hovering!</div>}
      <div id="banner">Hover to trigger the event!</div>
    </div>
  );
};

export default HocVsHook;
