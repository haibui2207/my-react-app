import { THEME } from '../../constants';

export default {
  root: { padding: 60, transition: THEME.transition },
  content: {
    top: 0,
    left: 0,
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    width: 'max-content',
    padding: [150, 60, 60],
    transition: 'padding 0.5s ease',
  },
  works: { display: 'flex' },
  [`@media (max-width: ${THEME.breakpoints.maxMd}px)`]: {
    root: { padding: 20 },
    content: { padding: [100, 20, 20] },
  },
};
