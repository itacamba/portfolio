import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Nav2 from './components/Nav2'
import About from './components/About'
import Projects from './components/Projects';
import CodeChallenges from './components/CodeChallenges';
import Contact from './components/Contact';
import ScrollToTopBtn from './components/ScrollToTopBtn'

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Nav2/>
      <About/>
      <Projects/>
      <CodeChallenges/>
      <Contact/>
      <ScrollToTopBtn/>
    </div>
  );
}

export default App;
