import React, { useEffect } from 'react';
import injectSheet from 'react-jss';
import { Switch } from 'react-router';

import { ROUTES } from './constants';
import { generateRoutes } from './utils';
import styles from './app.styles';

const App = () => {
  useEffect(() => {
    // const { location: { hash } } = window;
    // Go to top after page load
    window.scrollTo(0, 0);
    // if (hash) {
    //   const id = hash.replace('#', '');
    //   // Wait UI render
    //   const timer = setTimeout(() => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //       const bodyRect = document.body.getBoundingClientRect().top;
    //       const elementRect = element.getBoundingClientRect().top;
    //       window.scroll(0, elementRect - bodyRect);
    //       clearTimeout(timer);
    //     }
    //   }, 100);
    // }
  });

  return <Switch>{generateRoutes(ROUTES)}</Switch>;
};

export default injectSheet(styles)(App);
