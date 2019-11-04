import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Card from '../../../components/Card';
import fondo1Image from '../../../assets/images/home/works/fondo1.jpg';
import fondo2Image from '../../../assets/images/home/works/fondo2.jpg';
import fondo3Image from '../../../assets/images/home/works/fondo3.jpg';
import fondo4Image from '../../../assets/images/home/works/fondo4.jpg';
import fondo5Image from '../../../assets/images/home/works/fondo5.jpg';

import styles from './works..styles';

const Works = ({ classes }) => (
  <div id="works" className={classes.works}>
    <Card
      className={classes.card}
      titles={['Gigared', 'Hogares']}
      subTitle="website"
      imageSrc={fondo1Image}
    />
    <Card
      className={classes.card}
      titles={['Borsalino', 'eyewear']}
      subTitle="website | social meia"
      imageSrc={fondo2Image}
    />
    <Card
      className={classes.card}
      titles={['Offshore', 'cybersafe']}
      subTitle="website | identity"
      imageSrc={fondo3Image}
    />
    <Card
      className={classes.card}
      titles={['La Cautiva', 'Restaurant']}
      subTitle="website | social meia"
      imageSrc={fondo4Image}
    />
    <Card
      className={classes.card}
      titles={['Woodfields', 'eyewear']}
      subTitle="website | identity"
      imageSrc={fondo5Image}
    />
  </div>
);

Works.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Works);
