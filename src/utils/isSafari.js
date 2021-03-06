/* eslint-disable max-len */
/**
 *
 * Reference
 * https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
 *
 */

// Safari 3.0+ "[object HTMLElementConstructor]"
const isSafari = () => navigator.userAgent.toLowerCase().indexOf('safari/') > -1
  && navigator.userAgent.toLowerCase().indexOf('chrome') < 0;

export default isSafari;
