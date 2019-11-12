import React, { Suspense, lazy } from 'react';

import { LoadingDoodle } from '../components/base/Loading';

/**
 * Async loading component
 * @param callback function return component module
 *
 * Syntax: callback = (componentPath) => import(componentPath)
 *
 * @param timeout time delay loading component
 *
 */
const loadLazyComponent = (callback, timeout = 999) => {
  const Component = lazy(
    () => new Promise((resolve) => {
      setTimeout(() => resolve(callback()), timeout);
    }),
  );

  return (props) => (
    <Suspense fallback={<LoadingDoodle />}>
      <Component {...props} />
    </Suspense>
  );
};

export default loadLazyComponent;
