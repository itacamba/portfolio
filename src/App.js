import React from 'react';
import './App.css';
// import Nav from './components/Nav'
import Nav2 from './components/Nav2'
import MainBanner from './components/MainBanner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects';
import CodeChallenges from './components/CodeChallenges';
import Contact from './components/Contact';
import ScrollToTopBtn from './components/ScrollToTopBtn'
import PurpleFigure from './components/PurpleFigure';

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      {/* <PurpleFigure/> */}
      <Nav2/>
      <MainBanner/>
      <About/>
      <Skills/>
      <Projects/>
      <CodeChallenges/>
      <Contact/>
      <ScrollToTopBtn/>
    </div>
  );
}

export default App;
