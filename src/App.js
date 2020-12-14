import React,{useState} from "react";
import {Link, Route, Switch} from "react-router-dom"
import Home from './components/home'
import Pizza from "./components/Pizza"
import Confirmed from './components/confirmed'
import data from './data'

const App = () => {
  const [items, setItems]=useState(data)
  const [post, setPost]=useState([]);
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <link to="/Pizza" data-cy="order">Order</link>
    </nav>
      <h1>Lambda Eats</h1>
      <p>Have food delivered while you code!</p>
      <Switch>
        <Route path="/pizza/confirmed">
          <Confirmed post={post}/>
        </Route>

        <Route path="/pizza">
          <Pizza setPost={setPost}/>
        </Route>

        <Route path="/">
          <Home items={items}/>
        </Route>
      </Switch>
    </>
  );
};


export default App;
