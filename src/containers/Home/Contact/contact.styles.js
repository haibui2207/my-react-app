import { THEME } from '../../../constants';

export default {
  '@keyframes contactTitleEffect': {
    '0%': { color: 'transparent' },
    '50%': { color: 'transparent' },
    '70%': { color: THEME.colors.white },
    '100%': { color: THEME.colors.white },
  },
  '@keyframes contactTitleBeforeEffect': {
    '0%': { width: 0, left: '100%' },
    '35%': { width: '120%', left: '-20%' },
    '65%': { width: '120%', left: '-20%' },
    '100%': { width: 0, left: '-20%' },
  },
  '@keyframes subTitleBeforeEffect': {
    '0%': { right: -100, opacity: 0 },
    '100%': { right: 0, opacity: 1 },
  },
  contact: {
    maxWidth: 610,
    marginTop: 35,
    display: 'flex',
    textAlign: 'right',
    alignItems: 'flex-end',
    flexDirection: 'column',
    '&.animate': {
      '& $contactTitle': {
        animation: '$contactTitleEffect 1s linear 0.5s 1 forwards',
        '&:before': {
          animation: 'inherit',
          animationName: '$contactTitleBeforeEffect',
        },
        '&:nth-child(2)': { animationDelay: '0.6s' },
      },
      '& $subTitle': {
        animation: '$subTitleBeforeEffect 0.5s linear 1.4s 1 forwards',
      },
    },
  },
  contactTitle: {
    fontSize: 45,
    marginBottom: 10,
    cursor: 'default',
    fontWeight: 'bold',
    userSelect: 'none',
    letterSpacing: 0.5,
    color: 'transparent',
    width: 'max-content',
    position: 'relative',
    fontFamily: '"Lobster", cursive, Roboto, "sans-serif"',
    '&:before': {
      top: '50%',
      content: '""',
      height: '105%',
      display: 'block',
      position: 'absolute',
      transform: 'translateY(-50%)',
      backgroundColor: THEME.colors.white,
    },
  },
  subTitle: {
    position: 'relative',
    opacity: 0,
  },
  description: {
    fontSize: 30,
    fontWeight: 300,
    marginBottom: 48,
    cursor: 'default',
    userSelect: 'none',
    color: THEME.colors.white,
  },
  button: { maxWidth: 238 },
  [`@media (max-width: ${THEME.breakpoints.maxXXl}px)`]: {
    contactTitle: { fontSize: 35 },
    description: { fontSize: 20 },
  },
  [`@media (max-width: ${THEME.breakpoints.maxMd}px)`]: {
    contactTitle: { fontSize: 25 },
    description: { fontSize: 16, marginBottom: 32 },
    button: { transform: 'scale(0.7)', transformOrigin: 'top right' },
  },
  [`@media (max-width: ${THEME.breakpoints.maxSm}px)`]: {
    contact: {
      width: 'calc(100vw - 40px)',
      minWidth: 'unset',
      maxWidth: 'unset',
    },
  },
};
