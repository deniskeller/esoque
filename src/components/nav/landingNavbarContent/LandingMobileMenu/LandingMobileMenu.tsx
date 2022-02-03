import React, { ReactNode } from 'react';
import styles from './LandingMobileMenu.module.scss';

interface Props {
  children: ReactNode;
  visible: Boolean;
  setVisible: (value: boolean) => void;
}

const LandingMobileMenu: React.FC<Props> = ({
  children,
  visible,
  setVisible,
}) => {
  return (
    <div
      className={` ${styles.MobileMenuPopup} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.MobileMenuPopupContent}>
        <div
          className={styles.MobileMenuPopupClose}
          onClick={() => setVisible(false)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {children}
      </div>
    </div>
  );
};

export default LandingMobileMenu;
