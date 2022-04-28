import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Detail from './components/Detail';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </main>

      <footer>&copy; 2022 Slávka</footer>
    </BrowserRouter>
  );
};

/* Bonus NavLink

import { NavLink } from 'react-router-dom';

const App = () => {
  let activeClassName = 'activeClassName';
  return (
    <BrowserRouter>
      <header>
        <nav>
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/detail"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Detail
            </NavLink>
          </li>
        </ul>
          <nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </main>
      <footer>&copy; 2022 Slávka</footer>
    </BrowserRouter>
  );
};
*/
render(<App />, document.querySelector('#app'));
