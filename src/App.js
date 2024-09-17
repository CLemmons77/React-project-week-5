import { BrowserRouter as Router, Route } from "react-router-dom";
import { books } from "./data";
import React, { useState } from "react";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addToCart={addToCart} />}
        />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
