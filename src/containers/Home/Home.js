import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import NavigationBar from '../../components/NavigationBar';
import { useEventListener } from '../../utils';

import videoPoster from '../../assets/images/home/video-poster.jpg';
import videoBg from '../../assets/images/home/video-bg.mp4';

import About from './About';
import Works from './Works';
import Contact from './Contact/Contact';
import styles from './home.styles';

const Home = ({ classes }) => {
  const [left, setLeft] = useState(0);
  const [height, setHeight] = useState(0);
  const [isHidden, setToggle] = useState(false);

  const setHomeHeight = () => {
    const homeContent = document.getElementById('home-content');
    if (homeContent) {
      const currentHeight = homeContent.getBoundingClientRect().width
      - (window.innerWidth - window.innerHeight);
      console.log(currentHeight);
      if (height !== currentHeight) {
        setHeight(currentHeight);
      }
    } else if (!height) {
      setHeight(0);
    }
  };

  const onPageScroll = () => {
    setLeft(-window.pageYOffset);
    setHomeHeight();
  };

  const onResizeBrowser = () => {
    window.scroll(0, 0);
    setHomeHeight();
  };

  useEventListener('scroll', onPageScroll);
  useEventListener('resize', onResizeBrowser);

  const renderVideoBg = () => (
    <video loop muted autoPlay poster={videoPoster} className={classes.videoBg}>
      <track kind="captions" />
      <source src={videoBg} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  const renderBtnToogle = () => (
    <div
      role="presentation"
      onClick={() => setToggle(!isHidden)}
      className={classes.btnToggleContent}
    >
      <i className={isHidden ? 'icon-eye-blocked' : 'icon-eye'} />
    </div>
  );

  return (
    <div
      className={classNames(classes.root, isHidden ? 'hideContent' : '')}
      style={{ height: height || 'auto' }}
    >
      {renderVideoBg()}
      <NavigationBar />
      <div id="home-content" className={classes.content} style={{ left }}>
        <About />
        <Works />
        <Contact />
      </div>
      {renderBtnToogle()}
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Home);
