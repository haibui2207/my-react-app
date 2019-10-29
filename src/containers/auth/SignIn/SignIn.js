import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { loadLazyComponent } from '../../../HOCs';
import loginBg from '../../../assets/images/login-bg.jpg';

import styles from './signIn.styles';

const SignIn = ({ classes }) => {
  const SignInForm = loadLazyComponent(() => import('./SignInForm'), 3000);

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className={classes.form}>
        <SignInForm />
      </div>
    </div>
  );
};

SignIn.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(SignIn);
