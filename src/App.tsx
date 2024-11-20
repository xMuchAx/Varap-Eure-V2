import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';
import Home from './layout/Home/Home';


function About() {
  return <h2>Page À propos</h2>;
}

function Contact() {
  return <h2>Page Contact</h2>;
}

function App():JSX.Element {
  return (
    <Router>
      <div>
        <h1>Bienvenue dans mon application React!</h1>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
