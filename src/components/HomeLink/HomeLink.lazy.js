import React, { lazy, Suspense } from 'react';

const LazyHomeLink = lazy(() => import('./HomeLink'));

const HomeLink = props => (
  <Suspense fallback={null}>
    <LazyHomeLink {...props} />
  </Suspense>
);

export default HomeLink;
