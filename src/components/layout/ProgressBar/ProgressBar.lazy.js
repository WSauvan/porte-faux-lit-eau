import React, { lazy, Suspense } from 'react';

const LazyProgressBar = lazy(() => import('./ProgressBar'));

const ProgressBar = props => (
  <Suspense fallback={null}>
    <LazyProgressBar {...props} />
  </Suspense>
);

export default ProgressBar;
