import React, { useEffect } from 'react';

// import { Navbar } from '@nav/index';

import styles from './Application.module.scss';

const Application: React.FC = ({ children }) => {
  return (
    <div className={styles.App}>
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default Application;
