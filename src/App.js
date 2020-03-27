import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import "./App.css";

const HatsPage = () => {
  return <div>This is Hats Page</div>;
};
function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
