import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose } from 'redux';

import { Button } from '../../../components/base/Button';

import styles from './contact.styles';
import { scrollToLoadComponent } from '../../../HOCs';

const Contact = ({ classes, className }) => (
  <div id="contact" className={classNames(classes.contact, className)}>
    <h1 className={classes.contactTitle}>Let&apos;s work</h1>
    <h1 className={classes.contactTitle}>Together</h1>
    <div className={classes.subTitle}>
      <p className={classes.description}>
        We’d love to talk about how we can help you build
        <br />
        your next project.
      </p>
      <Button reverseEffect className={classes.button}>
        Launch project planner
      </Button>
    </div>
  </div>
);

Contact.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};
Contact.defaultProps = {
  className: '',
};

export default compose(
  scrollToLoadComponent,
  injectSheet(styles),
)(Contact);
