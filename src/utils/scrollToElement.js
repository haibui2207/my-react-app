import isIE from './isIE';
import isEdge from './isEdge';

const defaultScrollOffset = 50;
const defaultScrollOptions = { behavior: 'smooth' };

const getElementOffsetTop = (id) => {
  const element = document.getElementById(id);

  if (!element) {
    return null;
  }

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;

  return elementRect - bodyRect;
};

const smoothScrollForOldBrowsers = (offsetPosition) => {
  const { pageYOffset } = window;
  const distance = Math.max(0, offsetPosition) - pageYOffset;
  const startTime = new Date().getTime();
  const defaultDuration = 999;
  const duration = Math.min(Math.abs(distance), defaultDuration);

  const timer = setInterval(() => {
    const speed = Math.min(1, (new Date().getTime() - startTime) / duration);
    const nextPosition = Math.max(
      0,
      Math.floor(
        pageYOffset
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

  if (elementPosition === null) {
    return;
  }

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
