import { hexToRgbA } from '../../../../utils';
import { THEME } from '../../../../constants';

export default {
  '@keyframes backgroundEffect': {
    from: {
      backgroundColor: 'transparent',
      border: '1px solid transparent',
    },
    to: {
      boxShadow: `0px 5px 40px 5px ${hexToRgbA(THEME.colors.black, 0.75)}`,
      backgroundColor: hexToRgbA(THEME.colors.black, 0.15),
      border: `1px solid ${hexToRgbA(THEME.colors.black, 0.1)}`,
    },
  },
  root: {
    width: '100%',
    borderRadius: 5,
    padding: [70, 20],
    textAlign: 'center',
    animation: '$backgroundEffect .7s ease-in .45s forwards',
  },
  title: {
    fontSize: 64,
    marginBottom: 50,
    cursor: 'default',
    userSelect: 'none',
    color: THEME.colors.white,
  },
  button: {
    marginTop: 30,
  },
};
