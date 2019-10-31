import React, { useState } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import NavigationBar from '../../components/NavigationBar';
import { useEventListener } from '../../utils';

import About from './About';
import Works from './Works';
import Contact from './Contact/Contact';
import styles from './home.styles';

const Home = ({ classes }) => {
  const [left, setLeft] = useState(0);
  const [height, setHeight] = useState(0);

  const setHomeHeight = () => {
    const homeContent = document.getElementById('home-content');
    if (homeContent) {
      const currentHeight = homeContent.getBoundingClientRect().width
        - (window.innerWidth - window.innerHeight);
      if (height !== currentHeight) {
        setHeight(currentHeight);
      }
    }
  };

  const onMouseWheel = () => {
    setLeft(-window.pageYOffset);
    setHomeHeight();
  };

  const onResizeBrowser = () => {
    window.scroll(0, 0);
    setHomeHeight();
  };

  useEventListener('wheel', onMouseWheel);
  useEventListener('scroll', onMouseWheel);
  useEventListener('resize', onResizeBrowser);

  return (
    <div id="home-container" className={classes.root} style={{ height }}>
      <NavigationBar />
      <div id="home-content" className={classes.content} style={{ left }}>
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Home);
