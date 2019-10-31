import { THEME } from './constants';
import { hexToRgbA } from './utils';

export default {
  '@global': {
    html: {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: THEME.color.black,
        border: `3px solid ${THEME.color.white}`,
        '&:hover': { backgroundColor: hexToRgbA(THEME.color.black, 0.4) },
      },
      '&::-webkit-scrollbar': {
        background: THEME.color.white,
        overflow: 'visible',
        width: 15,
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
