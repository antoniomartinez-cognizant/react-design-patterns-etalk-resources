import React, { useContext } from "react";
import { DataContext } from "../provider";

const ListItem = () => {
  const { message, setMessage } = useContext(DataContext);
  return <input onChange={(e) => setMessage(e.target.value)} value={message} />;
};

export default ListItem;
