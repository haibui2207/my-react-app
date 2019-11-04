import { THEME } from '../../../../constants';

const btnDefaultAttribute = {
  height: 45,
  flex: 'none',
  fontSize: 16,
  width: '100%',
  maxWidth: 200,
  border: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
  fontWeight: 'bold',
  userSelect: 'none',
  textAlign: 'center',
  position: 'relative',
  alignItems: 'center',
  borderRadius: [0, 20],
  display: 'inline-flex',
  textDecoration: 'none',
  justifyContent: 'center',
  textTransform: 'uppercase',
  transition: THEME.transition,
  '&:focus': { outline: 'none' },
};

const renderButton = (color, background) => ({ color, background });

export default {
  root: {
    ...btnDefaultAttribute,
    '&:hover': {
      '& $reveal': { width: '100%' },
      '& $children': { marginLeft: 8 },
    },
    '&.reverse': {
      '& $reveal': { left: 'unset', right: 0 },
      '&:hover $children': { marginLeft: 0, marginRight: 8 },
    },
  },
  reveal: {
    top: 0,
    left: 0,
    width: 0,
    height: '100%',
    position: 'absolute',
    transition: THEME.transition,
    backgroundColor: THEME.colors.pink,
  },
  children: { transition: THEME.transition, zIndex: 2 },
  default: {
    ...renderButton(THEME.colors.white, THEME.colors.black),
  },
};
