/* eslint-disable max-len */
/**
 *
 * Reference
 * Thanks to Dan's StackOverflow answer for this:
 * http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
 * https://gist.github.com/davidtheclark/5515733#file-iselementinviewport-js
 *
 */

/**
* Detect element is visibling in viewport or not
* @param {*} id - string. Element's id
* @param {*} isAnyPart - boolean. Detect element in viewport 100% or any part of the element. Default 100%
*/

const isElementInViewport = (id, isAnyPart = false) => {
  const el = document.getElementById(id);
  if (!el) {
    return false;
  }

  const rect = el.getBoundingClientRect();

  if (isAnyPart) {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

    return vertInView && horInView;
  }

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom
      <= (window.innerHeight || document.documentElement.clientHeight)
    && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default isElementInViewport;
