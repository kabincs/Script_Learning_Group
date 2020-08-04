import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Loading = () => (
  <p>
    <Skeleton />
    <Skeleton count={5} />
  </p>
);

export default Loading;
