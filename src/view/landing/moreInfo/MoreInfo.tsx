import React from 'react';
import { BaseContainer, BaseTitle } from '@base/index';
import Image from 'next/image';
import styles from './MoreInfo.module.scss';

interface Props {}

const MoreInfo: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <div className={styles.GraphBlock}>
          <BaseTitle className={styles.GraphBlockTitle}>
            Financial Historical Records
          </BaseTitle>
          <BaseTitle className={styles.GraphBlockSubtitle}>
            Total assets that are managed
          </BaseTitle>
          <div className={styles.GraphBlockImg}>
            <Image
              src='/images/landing/imgEsoqueGraph2.png'
              layout={'fill'}
              alt={'Esocue image'}
            />
          </div>
        </div>
      </BaseContainer>
    </>
  );
};

export default MoreInfo;
