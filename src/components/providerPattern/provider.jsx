import React, { useState, createContext } from "react";
import SideBar from "./components/Sidebar";

export const DataContext = createContext();

export const ProviderPattern = () => {
  const [message, setMessage] = useState("");
  return (
    <DataContext.Provider value={{ message, setMessage }}>
      <div>
        Message in parent {message}
        <SideBar />
      </div>
    </DataContext.Provider>
  );
};

