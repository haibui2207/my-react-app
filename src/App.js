import React from 'react';
import injectSheet from 'react-jss';
import { Switch } from 'react-router';

import { ROUTES } from './constants';
import { generateRoutes } from './utils';
import styles from './app.styles';

const App = () => <Switch>{generateRoutes(ROUTES)}</Switch>;

export default injectSheet(styles)(App);
