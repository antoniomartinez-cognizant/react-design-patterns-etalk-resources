import React from "react";
import Hoc from "./components/hoc/hoc";
import HocVsHook from "./components/hoc/hocVsHook";
import "./App.css";
import ContainerComponent from "./components/containerPresentational/ContainerComponent";
import { ProviderPattern } from "./components/providerPattern/provider";
import UseCallbackExample from "./components/goodPractices/useCallback/useCallbackExample";

function App() {
  return (
    <div className="App">
      DESIGN PATTERNS VS HOOKS
      <div className="exampleContainer">
        <div>
          Hoc pattern
          <Hoc />
        </div>
        <div>
          With hooks
          <HocVsHook />
        </div>
      </div>
      <div className="exampleContainer">
        <div>
          Container/Presentational Pattern
          <ContainerComponent />
        </div>
        <div>
          same with Hooks
          <ContainerComponent />
        </div>
      </div>
      <div className="exampleContainer">
        <div>
          PROVIDER PATTERN
          <ProviderPattern />
        </div>
      </div>
      GOOD PRACTICES
      <div className="exampleContainer">
        <div>
          <div>MEMOIZE EXAMPLE</div>
          <UseCallbackExample />
        </div>
      </div>
    </div>
  );
}

export default App;
