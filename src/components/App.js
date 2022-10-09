import React from 'react'
import "../App.css"
import { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom"
import Homepage from "./Homepage"
import NavBar from "./NavBar"
import ProductsList from './ProductsList'
import AboutUs from './AboutUs'

function App() {
  const [productDescription, setProductDescription] = useState([])
  const [checkProductDescription, setCheckProductDescription] = useState("")
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