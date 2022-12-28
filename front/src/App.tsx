import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./shared/header";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import storeConfig from "./redux/store";
import Footer from "./shared/footer";
import Joke from "./pages/joke";
import { get_all_categories, get_all_jokes } from "./data/calls";

function App() {
  const store = storeConfig().store;
  const persistor = storeConfig().persistor;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <HashRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/joke/:id" element={<Joke />} />
            </Routes>
            <Footer />
          </HashRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
