import React from 'react';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import Image from 'next/image';
import styles from './Careers.module.scss';
import Breadcrumbs from '@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs';

const Careers = () => {
  return (
    <div className={styles.Wrapper}>
      <BaseContainer>
        <div className={styles.Breadcrumbs}>
          <Breadcrumbs roorHref="/" rootPathName="Home" />
        </div>
        <BaseTitle className={styles.Title}>Careers</BaseTitle>
      </BaseContainer>
    </div>
  );
};

export default Careers;
