import { THEME } from '../../../constants';

export default {
  '@keyframes contactTitleEffect': {
    '0%': { color: 'transparent' },
    '50%': { color: 'transparent' },
    '70%': { color: THEME.color.black },
    '100%': { color: THEME.color.black },
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
    animation: '$contactTitleEffect 1s linear 0.5s 1 forwards',
    '&:before': {
      top: '50%',
      content: '""',
      height: '105%',
      display: 'block',
      animation: 'inherit',
      position: 'absolute',
      transform: 'translateY(-50%)',
      backgroundColor: THEME.color.black,
      animationName: '$contactTitleBeforeEffect',
    },
    '&:nth-child(2)': { animationDelay: '0.6s' },
  },
  subTitle: {
    position: 'relative',
    opacity: 0,
    animation: '$subTitleBeforeEffect 0.5s linear 1.4s 1 forwards',
  },
  description: {
    fontSize: 30,
    fontWeight: 300,
    marginBottom: 48,
    cursor: 'default',
    userSelect: 'none',
  },
  button: {
    maxWidth: 238,
  },
};
