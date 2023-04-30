import ProjectsModule from "./Components/ProjectsModule";
import SkillsModule from "./Components/SkillsModule";
import "./Styles/General.css";
import About from "./Components/About";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

import Contact from "./Components/Contact";

export default function App() {
  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }

  return (
    <div className="App">
      <Navbar disableScroll={disableScroll} enableScroll={enableScroll} />
      <Main />
      <About />
      <SkillsModule disableScroll={disableScroll} enableScroll={enableScroll} />
      <ProjectsModule
        disableScroll={disableScroll}
        enableScroll={enableScroll}
      />
      <Contact />
    </div>
  );
}
