import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import LightSpeed from 'react-reveal/LightSpeed';

import logo from '../../assets/images/logo.svg';
import logoWithText from '../../assets/images/logo-with-text.svg';
import { useEventListener, generateId } from '../../utils';

import styles from './navigationBar.styles';

const propTypes = {
  /** @ignore Default styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

const NavigationBar = ({ classes }) => {
  const [isHidenLogo, setHideLogoStatus] = useState(false);
  const [navItemActive, setNavItemActive] = useState(0);

  const changeLogo = () => {
    const currentScrollPosition = window.pageYOffset;
    setHideLogoStatus(currentScrollPosition > 50);
  };

  useEventListener('scroll', changeLogo);

  return (
    <LightSpeed right duration={2800}>
      <nav className={classNames('navbar', 'navbar-expand-sm', classes.root)}>
        <a
          href="/#"
          className={classNames('navbar-brand', classes.logoWrapper)}
        >
          <img
            alt="Logo"
            src={logoWithText}
            className={classes.logo}
            style={{ opacity: isHidenLogo ? 0 : 1 }}
          />
          <img src={logo} alt="Logo" className={classes.logo} />
        </a>
        <button
          type="button"
          aria-expanded="false"
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navigationBar"
          aria-controls="navigationBar"
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
                key={generateId()}
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
    </LightSpeed>
  );
};

NavigationBar.propTypes = propTypes;

export default injectSheet(styles)(NavigationBar);
