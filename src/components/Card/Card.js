import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import { generateId } from '../../utils';

import styles from './card.styles';

const propTypes = {
  /** @ignore Default styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  subTitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
};
const defaultProps = {
  style: null,
};

const Card = ({ classes, titles, subTitle, imageSrc, style, className }) => (
  <div
    className={classNames(classes.root, className)}
    style={{ backgroundImage: `url(${imageSrc})`, ...style }}
  >
    <div className={classes.cardTitles}>
      {titles.map(title => (
        <h1 key={generateId()} className={classes.title}>
          {title}
        </h1>
      ))}
      <p className={classes.subTitle}>{subTitle}</p>
    </div>
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default injectSheet(styles)(Card);
