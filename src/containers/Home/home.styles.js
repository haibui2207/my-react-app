import { THEME } from '../../constants';

// DON'T USE THEME.TRANSITION IN THIS FILE CAUSE ANIMATION FAILED

export default {
  root: {
    padding: 60,
    transition: 'padding 0.5s ease',
    '&.hideContent': {
      height: [['unset'], '!important'],
      '& $content': {
        opacity: 0,
      },
    },
  },
  videoBg: {
    top: 0,
    left: 0,
    width: '100%',
    position: 'fixed',
  },
  content: {
    top: 0,
    left: 0,
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    width: 'max-content',
    padding: [150, 60, 60],
    transition: 'padding 0.5s ease, opacity 0.5s ease',
  },
  works: { display: 'flex' },
  btnToggleContent: {
    right: 20,
    bottom: 20,
    cursor: 'pointer',
    position: 'fixed',
    color: THEME.colors.white,
  },
  [`@media (max-width: ${THEME.breakpoints.maxMd}px)`]: {
    root: { padding: 20 },
    content: { padding: [100, 20, 20] },
  },
};
