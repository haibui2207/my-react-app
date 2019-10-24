import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import loginBg from '../../../assets/images/login-bg.jpg';

import styles from './signIn.styles';

const SignInForm = lazy(
  () => new Promise((resolve) => {
    setTimeout(() => resolve(import('./SignInForm')), 500);
  }),
);

const SignIn = ({ classes }) => (
  <div className={classes.root} style={{ backgroundImage: `url(${loginBg})` }}>
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm />
    </Suspense>
  </div>
);

SignIn.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(SignIn);
