import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import { Provider } from "react-redux";
import store from "./Stores.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <List />
      </div>
    </Provider>
  );
}

export default App;
