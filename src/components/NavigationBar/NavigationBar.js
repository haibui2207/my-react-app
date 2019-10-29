import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import logo from '../../assets/images/logo.svg';
import logoWithText from '../../assets/images/logo-with-text.svg';

import styles from './navigationBar.styles';
import { useEventListenerEffect } from '../../utils';

const propTypes = {
  /** @ignore Default button styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const defaultProps = {};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

const NavigationBar = ({ classes, ...rest }) => {
  const [isHidenLogo, setHideLogoStatus] = useState(false);
  const [navItemActive, setNavItemActive] = useState(0);
  console.log(rest);

  const changeLogo = () => {
    const currentScrollPosition = window.pageYOffset;
    setHideLogoStatus(currentScrollPosition > 50);
  };

  useEventListenerEffect('scroll', changeLogo);

  return (
    <nav className={classNames('navbar', 'navbar-expand-sm', classes.root)}>
      <a className={classNames('navbar-brand', classes.logoWrapper)} href="/#">
        <img
          src={logoWithText}
          alt="Logo"
          className={classes.logo}
          style={{ opacity: isHidenLogo ? 0 : 1 }}
        />
        <img src={logo} alt="Logo" className={classes.logo} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigationBar"
        aria-controls="navigationBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        id="navigationBar"
        className={classNames(
          'collapse',
          'navbar-collapse',
          classes.navbarCollapse,
        )}
      >
        <ul className={classNames('navbar-nav', classes.navBar)}>
          {navItems.map((item, index) => (
            <li
              key={item.label}
              role="presentation"
              className={classNames(
                'nav-item',
                navItemActive === index && 'active',
                classes.navItem,
              )}
              onClick={() => setNavItemActive(index)}
            >
              <a
                className={classNames('nav-link', classes.navLink)}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;

export default injectSheet(styles)(NavigationBar);
