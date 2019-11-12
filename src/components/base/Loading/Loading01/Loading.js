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
      --time: 3s;
      --delay: calc(-1 * @index() * var(--time) / 20);
      
      :doodle{
        @grid: 12x1;
      }
      @place-cell:center;
      @size: 100px, 30px;
      background-color: @pick(
        #34a5d4,#00c7b4,#81e567,#d7f500,#ffff42,#ffe26a,
        #f99d78,#f79fb7, #fc71c4,#ff009b,#c672c2,#af8afe);
      @keyframes rotate {
        0%,
        33% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      animation: rotate var(--time) infinite ease-in var(--delay);
      
      border-radius: 3px 8px 8px 3px;
      border: 2px solid #444;
      transform-origin: right center;
      z-index: calc(@index() + 2);
      :after {
        content: '';
        @size: 40%, 100%;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #fff;
        border-left: 2px solid #444;
        border-radius: 0px 6px 6px 0px;
        background-image:
          linear-gradient(to right, #cbcccc, #cbcccc),
          linear-gradient(to right, #cbcccc, #cbcccc);
        background-repeat: no-repeat;
        background-position: 5px center, 12px 8px;
        background-size: 4px 20px, 2px 15px;
      }
    `}
    </css-doodle>
  </div>
);

Loading.propTypes = propTypes;

export default injectSheet(styles)(Loading);
