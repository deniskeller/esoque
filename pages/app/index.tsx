// import type { NextPage } from 'next';
// import styles from './Home.module.scss';

import { Application } from '@layouts/index';
import { HomeApp } from '@view/index';

const HomePageApp = () => {
  return (
    <Application>
      <HomeApp />
    </Application>
  );
};

export default HomePageApp;
