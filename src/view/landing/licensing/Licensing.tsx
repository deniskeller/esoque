import React from 'react';

import {
  BaseContainer,
  BaseIcon,
  BaseSubtitle,
  BaseText,
  BaseTitle,
} from '@base/index';
import Breadcrumbs from '@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs';
import Link from 'next/link';

import styles from './Licensing.module.scss';
import { ALL_ICONS } from '@constants/icons';

const Licensing = () => {
  return (
    <div className={styles.Container}>
      <BaseContainer>
        <div className={styles.Breadcrumbs}>
          <Breadcrumbs roorHref="/" rootPathName="Home/Pricing Information" />
        </div>

        <div className={styles.Header}>
          <div className={styles.HeaderDescription}>
            <BaseTitle className={styles.Title}>Licensing</BaseTitle>
            <BaseSubtitle type="h3">
              Please select the service you are interested in below
            </BaseSubtitle>
          </div>
          <div className={styles.HeaderActions}>
            <div className={styles.Calculated}>
              <span>TOTAL COST £ #calculated</span>
              <div className={styles.CalculatedPopup}>
                <div className={styles.Close}>
                  <BaseIcon
                    icon={ALL_ICONS.CALCULATED_POPUP_CLOSE}
                    viewBox="0 0 20 23"
                    className={styles.IconClose}
                  />
                </div>
                <div className={styles.List}>
                  <div className={styles.ListItem}></div>
                  <div className={styles.ListItem}></div>
                  <div className={styles.ListItem}></div>
                  <div className={styles.ListItem}></div>
                </div>
                <div className={styles.Info}>
                  <div className={styles.Total}></div>
                  <div className={styles.Price}></div>
                </div>
              </div>
            </div>
            <div className={styles.Order}>ORDER</div>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export default Licensing;
