import React from 'react';
import { useTranslation } from 'next-i18next';
import { BaseContainer } from '@base/index';
import styles from './Darkside.module.scss';

interface Props {}

const Darkside: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <h1 style={{ color: 'white' }}>Darkside page</h1>
    </BaseContainer>
  );
};

export default Darkside;
