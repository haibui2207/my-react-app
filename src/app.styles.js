import { THEME } from './constants';
import { hexToRgbA } from './utils';

export default {
  '@global': {
    html: {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: THEME.colors.black,
        border: `3px solid ${THEME.colors.white}`,
        '&:hover': { backgroundColor: hexToRgbA(THEME.colors.black, 0.4) },
      },
      '&::-webkit-scrollbar': {
        background: 'transparent',
        overflow: 'visible',
        width: 15,
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0)',
      },
    },
    body: {
      margin: 0,
      fontFamily: '"Source Sans Pro", sans-serif',
      // fontFamily: '"Lobster", cursive, Roboto, "sans-serif"',
    },
    strong: { fontWeight: 'bold' },
  },
};
