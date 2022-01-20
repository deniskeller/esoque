import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { BaseContainer } from '@base/index';
import styles from './Home.module.scss';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.LogoBlock}>
        {/* <Image src={} layout={'fill'} alt={'Portfolio card'} /> */}
      </div>
      <BaseContainer>
        <h1 style={{ color: 'white' }}>Home page</h1>
      </BaseContainer>
    </>
  );
};

export default Home;
