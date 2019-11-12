import { hexToRgbA } from '../../../../utils';

export default {
  root: {
    top: 0,
    left: 0,
    zIndex: 99999,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    pointerEvents: 'none',
    justifyContent: 'center',
    boxShadow: `inset 0px 0px 0px 2000px ${hexToRgbA('#18173C', 0.4)}`,
  },
};
