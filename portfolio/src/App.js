import "./App.css";
import { NavBar } from "./Routes/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Components/Home";
import About from "./Components/About";
import { Skills } from "./Components/Skills";
import { Project } from "./Components/Project";
import { Contact } from "./Components/Contact";
import { Achieved } from "./Components/Achieved";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Achieved/>
      <Contact />
      <h3><b>Credit:  <a href="https://www.linkedin.com/in/vikash-03/">Vikash Kumar</a></b></h3>
     
    </div>
  );
}

export default App;
