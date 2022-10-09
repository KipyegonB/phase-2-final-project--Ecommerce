import React from 'react'
import { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom"
import Homepage from "./HomePage"
import NavBar from "./NavBar"
import ProductsList from './ProductList'
import AboutUs from './AboutUs'
import "../App.css"

function App() {
  const [productDescription, setProductDescription] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/EliteStore")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProductDescription(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Elite Store</h1>
      <NavBar />
      <Switch >
        <Route exact path='/'>
          <Homepage />

        </Route>
        <Route exact path='/about'>
          <AboutUs />

        </Route>
        <Route exact path='/products'>
          <ProductsList productDescription={productDescription} />

        </Route>

      </Switch>

    </div>
  );
}

export default App;