/**
 * Generate bootstrap grid class
 *
 * @param grid object
 *
 * grid: {
 *   xs: number,
 *   sm: number,
 *   md: number,
 *   lg: number,
 *   xl: number,
 * }
 *
 */
const generateGrid = (grid) => (grid
  ? Object.keys(grid).reduce(
    (result, key) => `${result} col-${key}-${grid[key]}`,
    '',
  )
  : null);

export default generateGrid;
