import React, { useEffect } from 'react';

// import { LandingNavbar } from '@nav/index';

import styles from './Application.module.scss';

const Application: React.FC = ({ children }) => {
  return (
    <div className={styles.App}>
      {/* <LandingNavbar /> */}
      {children}
    </div>
  );
};

export default Application;
