import isIE from './isIE';
import isEdge from './isEdge';

const defaultScrollOffset = 60;
const defaultScrollOptions = { behavior: 'smooth' };

const getElementOffsetTop = (id) => {
  const element = document.getElementById(id);

  if (!element) {
    return null;
  }

  // Currently this app using scroll horizontal so
  // if using scroll vertical change left to top
  const bodyRect = document.body.getBoundingClientRect().left;
  const elementRect = element.getBoundingClientRect().left;
  console.log(element.getBoundingClientRect());

  return elementRect - bodyRect;
};

const smoothScrollForOldBrowsers = (offsetPosition) => {
  const { pageXOffset } = window;
  const distance = Math.max(0, offsetPosition) - pageXOffset;
  const startTime = new Date().getTime();
  const defaultDuration = 999;
  const duration = Math.min(Math.abs(distance), defaultDuration);

  const timer = setInterval(() => {
    const speed = Math.min(1, (new Date().getTime() - startTime) / duration);
    const nextPosition = Math.max(
      0,
      Math.floor(
        pageXOffset
          + distance
            * (speed < 0.5 ? 2 * speed ** 2 : speed * (4 - speed * 2) - 1),
      ),
    );

    window.scrollTo(0, nextPosition);
    if (Math.floor(offsetPosition) >= nextPosition) {
      clearInterval(timer);
    }
  }, 10);
};

const scrollToElement = (
  id,
  offset = defaultScrollOffset,
  options = defaultScrollOptions,
) => {
  const elementPosition = getElementOffsetTop(id);

  console.log(elementPosition);

  if (elementPosition === null) return;

  const maxScrollOffset = document.documentElement.scrollHeight
    - document.documentElement.clientHeight
    - 1;
  const offsetPosition = Math.min(elementPosition - offset, maxScrollOffset);

  if (isIE || isEdge) {
    smoothScrollForOldBrowsers(offsetPosition);
  } else {
    window.scrollTo({
      ...options,
      top: offsetPosition,
    });
  }
};

export default scrollToElement;
