import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import generateGrid from '../../../../utils/generateGrid';

import styles from './input.styles';

const propTypes = {
  /**
   *
   * Extend all props of a input and more props below
   *
   */
  /** @ignore Default button styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Input label */
  label: PropTypes.string.isRequired,
  /** Input type */
  type: PropTypes.string,
  /** Custom styles */
  className: PropTypes.string,
  /** Grid */
  grid: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
};

const defaultProps = {
  type: 'text',
  className: null,
  grid: undefined,
};

const Input = ({
  classes, label, className, grid, ...rest
}) => (
  <div className={classNames(classes.root, generateGrid(grid), className)}>
    <label htmlFor="a" className={classes.label}>{label}</label>
    <input className={classes.input} {...rest} />
  </div>
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default injectSheet(styles)(Input);
