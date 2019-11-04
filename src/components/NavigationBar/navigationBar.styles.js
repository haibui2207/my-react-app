import { THEME } from '../../constants';
import { hexToRgbA } from '../../utils';

export default {
  root: {
    top: 0,
    left: 0,
    zIndex: 9999,
    width: '100%',
    marginBottom: 45,
    position: 'fixed',
    padding: [60, 60, 0],
    transition: THEME.transition,
    justifyContent: 'space-between',
    fontFamily: '"Lobster", cursive, Roboto, "sans-serif"',
  },
  logoWrapper: {
    width: 62,
    height: 45,
    padding: 0,
    cursor: 'pointer',
    position: 'relative',
  },
  logo: {
    top: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
    transition: THEME.transition,
  },
  navbarCollapse: { flexGrow: 'unset' },
  navBar: { alignItems: 'center' },
  navItem: {
    transition: THEME.transition,
    borderBottom: `2px solid ${hexToRgbA(THEME.colors.black, 0)}`,
    '&.active': {
      borderBottom: `2px solid ${hexToRgbA(THEME.colors.black, 0.2)}`,
      '& $navLink': { color: THEME.colors.pink },
      '&:hover $navLink': { color: THEME.colors.pink },
    },
    '&:hover': {
      borderBottom: `2px solid ${hexToRgbA(THEME.colors.black)}`,
      '& $navLink': { color: THEME.colors.pink },
    },
    '& + $navItem': { marginLeft: 32 },
  },
  navLink: {
    fontSize: 14,
    cursor: 'pointer',
    padding: '0 !important',
    color: THEME.colors.black,
    transition: THEME.transition,
  },
  [`@media (max-width: ${THEME.breakpoints.maxMd}px)`]: {
    root: { padding: [20, 20, 0] },
  },
};
