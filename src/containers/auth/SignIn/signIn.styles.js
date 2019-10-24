import hexToRgbA from '../../../utils/hexToRgbA';

export default {
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: `inset 0px 0px 0px 2000px ${hexToRgbA('#757575', 0.3)}`,
  },
};
