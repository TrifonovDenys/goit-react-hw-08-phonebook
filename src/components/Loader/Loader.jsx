import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = props => (
  <ContentLoader
    speed={0.4}
    width={375}
    height={220}
    viewBox="0 0 375 220"
    backgroundColor="white"
    foregroundColor="rgb(79, 70, 229)"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="375" height="60" />
    <rect x="0" y="80" rx="10" ry="10" width="375" height="60" />
    <rect x="0" y="160" rx="10" ry="10" width="375" height="60" />
  </ContentLoader>
);

export default MyLoader;
