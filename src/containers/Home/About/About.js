import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { Button } from '../../../components/base/Button';

import styles from './about.styles';

const Home = ({ classes }) => (
  <div id="about" className={classes.about}>
    <h1 className={classes.aboutTitle}>Designing</h1>
    <h1 className={classes.aboutTitle}>Solutions,</h1>
    <h1 className={classes.aboutTitle}>Delevering</h1>
    <h1 className={classes.aboutTitle}>Results.</h1>
    <div className={classes.subTitle}>
      <p className={classes.description}>
        We are a design studio located in Buenos Aires, Argentina that helps
        companies grow by building clean and friendly&nbsp;
        <strong>websites</strong>
        &nbsp;, defining a strong brand&nbsp;
        <strong>identity</strong>
        &nbsp;and planning thoughtful&nbsp;
        <strong>social media</strong>
        &nbsp;strategies.
      </p>
      <div className={classes.btnGroup}>
        <Button className={classes.button}>Know more</Button>
        <p className={classes.btnText}>
          Featured works&nbsp;
          <i className="icon-next" />
        </p>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Home);
