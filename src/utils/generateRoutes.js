import React from 'react';
import { Route, Redirect } from 'react-router';

import { revealComponent } from '../HOCs';

import generateId from './generateId';

/**
 * Generate routes
 * @param routes is an object extends from RouteProps and RedirectProps
 * with more args
 * - isRedirect: boolean - in case using Redirect
 * - title: string required - using for title tag
 */
const generateRoutes = (routes) => {
  if (!routes || !Array.isArray(routes) || !routes.length) {
    return null;
  }

  return routes.map(({
    title, isRedirect, component, ...rest
  }) => {
    if (isRedirect) {
      return <Redirect key={title} {...rest} />;
    }

    return (
      <Route
        key={generateId()}
        component={revealComponent(component)}
        {...rest}
      />
    );
  });
};

export default generateRoutes;
