import React, { useState } from 'react';

import { useEventListener } from '../utils';

/**
 * When user load page but select another browser tab.
 *
 * This function will waits until user select page tab then render component
 * @param {*} Component - React Component
 */
const revealComponent = (Component) => (props) => {
  const [isVisible, setVisible] = useState(false);

  const onPageLoad = () => {
    if (!isVisible) { setVisible(!document.hidden); }
  };

  useEventListener('visibilitychange', onPageLoad);

  return isVisible && <Component {...props} />;
};

export default revealComponent;
