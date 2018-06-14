import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <center>
  <header>
    <Link to="/"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Home</Link>

    <nav>
      <Link to="/helloworld">About Us</Link>
    </nav>

    <hr />
  </header>
  </center>
);

export default Header;
