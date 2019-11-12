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
      :doodle { 
        @grid: 1x10 / 320px; 
      }
    
      @place-cell: center; 
      @size: calc(@index() * 10%);
      
      border-radius: 50%;
      border-style: dashed;
      border-width: calc(@index() * 1vmin); 
      border-color: hsla(
        calc(20 * @index()), 70%, 68%, 
        calc(3 / @index() * .8)
      );
      
      --d: @rand(3s, 6s); 
      --rf: @rand(360deg);
      --rt: calc(var(--rf) + @pick(1turn, -1turn));
    
      animation: spin var(--d) linear infinite;
      @keyframes spin {
        from { transform: rotate(var(--rf)) }
        to   { transform: rotate(var(--rt)) }
      }
    `}
    </css-doodle>
  </div>
);

Loading.propTypes = propTypes;

export default injectSheet(styles)(Loading);
