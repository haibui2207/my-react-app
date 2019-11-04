export default {
  works: {
    height: '100%',
    display: 'flex',
    margin: [0, '15vw', 0, '16vw'],
    width: 'max-content',
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
