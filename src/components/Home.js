import React, {Fragment} from 'react';
import Nav from './layout/Nav'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <Fragment>
      <Nav/>
      <div className='main-container'>
      <h1>Welcome to Star Wars Api</h1>
     <Link to='/characters'><h3>See all charactrs</h3></Link></div>
    </Fragment>
  );
};

export default Home;
