import React, {Fragment} from 'react';
import Nav from './layout/Nav'

const Home = () => {
  return (
    <Fragment>
      <Nav/>
      <div className='main-container'>
      <h1>Welcome to Star Wars Api</h1></div>
    </Fragment>
  );
};

export default Home;
