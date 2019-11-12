import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './loading.styles';

const propTypes = {
  /** @ignore Default button styles */
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
const Loading = ({ classes }) => (
  <div className={classes.root}>
    <css-doodle>
      {`
      --cycle: @r(2s, 10s, .1);

      :doodle {
        @grid: 1x12 / 250px;
      }
          
      @place-cell: center;
      @size: calc(@i() * 10%);
  
      border-radius: 50%;
      border-style: @pick(dashed double, double dotted);
      border-width: calc(@i() * 2px);
      border-color: hsla(
        calc(@r(50, 100, 10) * @i()), 80%, 80%,
        calc(20 / @i() * .4)
      );
      transform: rotate(@r(360deg));
  
      animation: rotation var(--cycle) linear infinite;
  
      @keyframes rotation {
        0    { transform: scale(1) rotate(0deg); }
        25%  { transform: scale(.4); }
        50%  { transform: scale(1) }
        75%  { transform: scale(.4); }
        100% { transform: scale(.1) rotate(-360deg); }
      }
    `}
    </css-doodle>
  </div>
);

Loading.propTypes = propTypes;

export default injectSheet(styles)(Loading);
