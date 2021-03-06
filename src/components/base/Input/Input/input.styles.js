import { THEME } from '../../../../constants';
import { hexToRgbA } from '../../../../utils';

const labelWrapperStyles = {
  top: 0,
  left: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  cursor: 'default',
  textAlign: 'left',
  userSelect: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  transition: THEME.transition,
  borderBottom: `2px solid ${hexToRgbA(THEME.colors.black, 0.6)}`,
  '&:after': {
    width: '100%',
    zIndex: 1,
    bottom: -2,
    transform: 'scale(0, 1)',
    content: '""',
    display: 'block',
    position: 'absolute',
    transition: THEME.transition,
    borderBottom: `2px solid ${THEME.colors.lightBlue}`,
  },
};

const labelContentStyles = {
  top: 0,
  left: 0,
  position: 'absolute',
  transition: THEME.transition,
  color: `${hexToRgbA(THEME.colors.black, 0.6)}`,
};

const labelFocusEffect = {
  '& $labelContent': {
    top: -12,
    fontSize: 12,
    color: THEME.colors.lightBlue,
  },
  '&:after': { transform: 'scale(1)' },
};

const inputStyle = {
  width: '100%',
  border: 'none',
  position: 'relative',
  background: 'transparent',
  '&::placeholder': { opacity: 0 },
};

const inputFocusEffect = {
  '&:focus': {
    outline: 'none',
    '& + $label': { ...labelFocusEffect },
  },
};

export default {
  root: {
    fontSize: 20,
    width: '100%',
    marginBottom: 20,
    position: 'relative',
    fontFamily: '"Lobster", cursive, Roboto, "sans-serif"',
  },
  labelWrapper: {
    ...labelWrapperStyles,
  },
  labelContent: {
    ...labelContentStyles,
  },
  input: {
    ...inputStyle,
    ...inputFocusEffect,
  },
};
