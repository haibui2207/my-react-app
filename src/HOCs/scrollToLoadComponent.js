import React, { useState } from 'react';

import { useEventListener, generateId } from '../utils';

/**
 * Load component when scroll down to component position
 * @param {*} Component - React class | function component
 */
const scrollToLoadComponent = (Component) => (props) => {
  const [isLoaded, setLoadComponent] = useState(false);
  // Using id as state to make sure id only generated once time
  const [id] = useState(generateId());

  const onMouseWheel = () => {
    /**
     * If component is not loaded then listen scroll event to load component
     * Make sure run when component is not loaded
     */
    if (!isLoaded) {
      const contact = document.getElementById(id);
      /**
       * Make sure element existed and
       * Don't setState again when component is loaded
       */
      if (contact) {
        // Currently this app is scrolling horizontal
        // so if using for vertical scroll just change
        // Width -> Height, Left -> right, scrollY -> scrollX
        // Scroll horizontal load
        setLoadComponent(
          window.innerWidth + window.scrollY >= contact.offsetLeft,
        );
      }
    }
  };

  useEventListener('wheel', onMouseWheel);
  useEventListener('scroll', onMouseWheel);

  return (
    <div id={id} style={{ visibility: isLoaded ? 'none' : 'block' }}>
      <Component {...props} />
    </div>
  );
};

export default scrollToLoadComponent;
