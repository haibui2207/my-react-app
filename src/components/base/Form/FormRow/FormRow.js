import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import styles from './formRow.styles';

const propTypes = {
  /**
   *
   * Extend all props of a div and more props below
   *
   */
  /** @ignore Default button styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  /** List children inputs */
  children: PropTypes.node.isRequired,
  /** Custom styles */
  className: PropTypes.string,
};

const defaultProps = { className: null };

const FormRow = ({
  classes, children, className, ...rest
}) => (
  <div className={classNames('form-row', classes.root, className)} {...rest}>
    {children}
  </div>
);

FormRow.propTypes = propTypes;
FormRow.defaultProps = defaultProps;

export default injectSheet(styles)(FormRow);
