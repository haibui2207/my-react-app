/**
 * @param grid is an object with format
 * grid: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
 */
const generateGrid = (grid) => (grid
  ? Object.keys(grid).reduce(
    (result, key) => `${result} col-${key}-${grid[key]}`,
    '',
  )
  : null);

export default generateGrid;
