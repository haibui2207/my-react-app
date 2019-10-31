import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import styles from './button.styles';

const propTypes = {
  /**
   *
   * Extend all props of a "tag" props and more props below
   *
   */
  /** @ignore Default button styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Button label */
  children: PropTypes.node.isRequired,
  /** HTML tags */
  tag: PropTypes.node,
  /** Button type */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Custom styles */
  className: PropTypes.string,
  /** Revert effect direction */
  reverseEffect: PropTypes.bool,
  /** Button color present */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'gradient']),
};

const defaultProps = {
  type: 'button',
  tag: 'button',
  className: null,
  color: 'default',
  reverseEffect: false,
};

const Button = ({
  classes,
  children,
  tag: Com,
  color,
  className,
  reverseEffect,
  ...rest
}) => {
  const buttonAttributes = { ...rest };
  buttonAttributes.className = classNames(
    classes.root,
    classes[color],
    reverseEffect ? 'reverse' : '',
    className,
  );
  if (Com !== 'button') {
    delete buttonAttributes.type;
  }

  return (
    <Com {...buttonAttributes}>
      <span className={classes.reveal} />
      <span className={classes.children}>{children}</span>
    </Com>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default injectSheet(styles)(Button);
