import { THEME } from '../../constants';
import { hexToRgbA } from '../../utils';

export default {
  root: {
    width: '100%',
    maxWidth: 636,
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: [0, 20],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: THEME.colors.gray,
    transition: THEME.transition,
    '&:hover': {
      boxShadow: `inset 0px 0px 0px 2000px ${hexToRgbA(
        THEME.colors.black,
        0.2,
      )}`,
      '& $title, & $subTitle': { color: THEME.colors.white },
    },
  },
  cardTitles: {
    left: '7%',
    bottom: '3.5%',
    position: 'absolute',
  },
  title: {
    margin: 0,
    fontSize: 45,
    lineHeight: '54px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'transparent',
    transition: THEME.transition,
  },
  subTitle: {
    extend: 'title',
    fontSize: 10,
  },
};
