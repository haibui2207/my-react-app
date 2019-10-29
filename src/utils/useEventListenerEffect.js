import { useEffect } from 'react';

/**
 * useEffect with window event listener
 * @param {*} eventName - string. Key of WindowEventMap
 * @param {*} callback - function
 */
const useEventListenerEffect = (eventName, callback) => {
  useEffect(() => {
    window.addEventListener(eventName, callback);

    return () => {
      window.removeEventListener(eventName, callback);
    };
  }, []);

  return null;
};

export default useEventListenerEffect;
