import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (

  <center>
  <header>
  <ul class="nav nav-pills pull-right">
    <li><Link to="/"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Home</Link></li>

    <li><Link to="/helloworld">About Us</Link></li>


    <hr />
  </ul>
  </header>
  </center>

);

export default Header;
