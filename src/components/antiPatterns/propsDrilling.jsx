
import React, { useState } from "react";
  
function Parent() {
  const [fName, setfName] = useState("firstName");
  const [lName, setlName] = useState("LastName");
  return (
    <>
      <div>This is a Parent component</div>
      <br />
      <ChildLevel1 fName={fName} lName={lName} />
    </>
  );
}
  
function ChildLevel1({ fName, lName }) {
  return (
    <>
      This is ChildA Component.
      <br />
      <ChildLevel2 fName={fName} lName={lName} />
    </>
  );
}
  
function ChildLevel2({ fName, lName }) {
  return (
    <>
      This is ChildB Component.
      <br />
      <ChildLevel3 fName={fName} lName={lName} />
    </>
  );
}
  
function ChildLevel3({ fName, lName }) {
  return (
    <>
      This is ChildC component.
      <br />
      <h3> Data from Parent component is as follows:</h3>
      <h4>{fName}</h4>
      <h4>{lName}</h4>
    </>
  );
}
  
export default Parent;