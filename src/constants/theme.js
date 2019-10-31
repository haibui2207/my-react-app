import COLORS from './colors';
import BREAKPOINTS from './breakpoints';

const primary = '#6e8efb';
const secondary = '#a777e3';
const transition = 'all 0.5s ease';
const boxShadow = '0px 10px 10px rgba(0,0,0,0.2);';

export default {
  color: {
    ...COLORS,
    primary,
    secondary,
  },
  breakpoints: BREAKPOINTS,
  transition,
  boxShadow,
};
