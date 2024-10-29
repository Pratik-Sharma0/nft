import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Cover/>
        <Card/>

        <Footer />
      </div>
    </>
  );
}

export default App;
