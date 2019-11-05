import { THEME } from '../../../constants';
import { hexToRgbA } from '../../../utils';

export default {
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: `inset 0px 0px 0px 2000px ${hexToRgbA(THEME.colors.gray, 0.4)}`,
  },
  form: {
    width: '100%',
    maxWidth: 450,
    margin: 'auto',
    padding: [0, 10],
  },
};
