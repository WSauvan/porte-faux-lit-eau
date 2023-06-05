import React, { lazy, Suspense } from 'react';

const LazyModalButton = lazy(() => import('./ModalButton'));

const ModalButton = props => (
  <Suspense fallback={null}>
    <LazyModalButton {...props} />
  </Suspense>
);

export default ModalButton;
