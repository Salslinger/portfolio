import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Skills } from "./components/pages/Skills";
import { Experiences } from "./components/pages/Experiences";
import { Projects } from "./components/pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <About />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
