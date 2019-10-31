export default {
  works: {
    height: '100%',
    display: 'flex',
    paddingLeft: '16vw',
    width: 'max-content',
    paddingRight: '15vw',
  },
  card: {
    width: '34vw',
    minWidth: 350,
    borderRadius: [0, 45],
    '& + $card': {
      marginLeft: '6.5vw',
    },
  },
};
