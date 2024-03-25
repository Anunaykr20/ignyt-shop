import React from 'react';
import { Container, Button, Stack } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { RiBeerFill } from 'react-icons/ri';
import Beers from '../beers/Beers';


const Home = () => {
  return (
    <Container>
      <div className="px-4 py-5 my-5 text-center">
        <RiBeerFill size={100} />
        <h1 className="display-5 fw-bold">Welcome to the Igynt-Shop!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Check out and explore our wide selection of craft
            beers.
          </p>
        </div>
      </div>
      <Beers />
    </Container>
  );
};

export default Home;
