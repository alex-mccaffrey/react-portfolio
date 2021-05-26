import { Component } from "react";
import Nav from "../Components/Nav/Nav";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer"
import Home from "../Components/Home/Home";
import { Route } from "react-router-dom";
import "./App.css"



//import ApiContext from "./ApiContext";
import "./App.css";

class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </>
    );
  }

  render() {
    return (
      //<ApiContext.Provider value={value}>
      <main className="App">
        <Nav />
        <header>
          <h1 className="home-title">Hi, I'm Alex McCaffrey</h1>
        </header>
        <main className="App_main">{this.renderMainRoutes()}</main>
        <Footer />
      </main>
      //</ApiContext.Provider>
    );
  }
}

export default App;
