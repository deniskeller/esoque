import React from 'react';
import { useTranslation } from 'next-i18next';
import { BaseContainer } from '@base/index';
import styles from './Eco.module.scss';

interface Props {}

const Eco: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <h1 style={{ color: 'white' }}>Eco page</h1>
    </BaseContainer>
  );
};

export default Eco;
