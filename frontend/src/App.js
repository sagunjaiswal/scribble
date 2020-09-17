import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import { Provider } from "react-redux";
import store from "./Stores.js";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Container>
          <List />
          <ItemModal />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
