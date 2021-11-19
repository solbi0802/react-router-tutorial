import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';


const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/sbshin">sbshin 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profile/:username" component={Profile} />
      </Routes>
    </div>
  );
}

export default App;
