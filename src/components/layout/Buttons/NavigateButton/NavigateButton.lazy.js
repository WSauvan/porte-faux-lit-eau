import React, { lazy, Suspense } from 'react';

const LazyNavigateButton = lazy(() => import('./NavigateButton'));

const NavigateButton = props => (
  <Suspense fallback={null}>
    <LazyNavigateButton {...props} />
  </Suspense>
);

export default NavigateButton;
