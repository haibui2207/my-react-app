import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './loading.styles';

const propTypes = {
  /** @ignore Default button styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
const Loading = ({ classes }) => (
  <div className={classes.root}>
    <span className={classes.effect} />
  </div>
);

Loading.propTypes = propTypes;

export default injectSheet(styles)(Loading);
