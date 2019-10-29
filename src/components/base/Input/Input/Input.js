import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import { generateGrid, generateId } from '../../../../utils';

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
  label: PropTypes.node.isRequired,
  /** Input type */
  type: PropTypes.string,
  /** Custom styles */
  className: PropTypes.string,
  /** Input label */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
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
  style: null,
  grid: null,
};

const Input = ({
  classes, label, className, style, grid, ...rest
}) => {
  const id = generateId();

  return (
    <div
      style={style}
      className={classNames(classes.root, generateGrid(grid), className)}
    >
      <input
        {...rest}
        id={id}
        className={classes.input}
        autoComplete={rest.autoComplete}
      />
      <label htmlFor={id} className={classes.labelWrapper}>
        <span className={classes.labelContent}>{label}</span>
      </label>
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default injectSheet(styles)(Input);
