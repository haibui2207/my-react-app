import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import styles from './form.styles';

const propTypes = {
  /**
   *
   * Extend all props of a form and more props below
   *
   */
  /** @ignore Default button styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** Form children */
  children: PropTypes.node.isRequired,
  /** Custom styles */
  className: PropTypes.string,
};

const defaultProps = { className: null };

const Form = ({
  classes, children, className, ...rest
}) => (
  <form className={classNames(classes.root, className)} {...rest}>
    {children}
  </form>
);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default injectSheet(styles)(Form);
