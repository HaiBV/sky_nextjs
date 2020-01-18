import React from 'react';
import Nav from '../components/nav';

const About = ({ isServer }) => {
  console.log(isServer);
  return (
    <div>
      <Nav />
      <p>This is about page</p>
    </div>
  );
};

About.getInitialProps = props => {
  console.log('run server');
  const { isServer } = props.ctx;
  return { isServer };
};

export default About;
