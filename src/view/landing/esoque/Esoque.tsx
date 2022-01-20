import React from 'react';
import { useTranslation } from 'next-i18next';
import { BaseContainer } from '@base/index';
import styles from './Esoque.module.scss';

interface Props {}

const Esoque: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <h1 style={{ color: 'white' }}>Esoque page</h1>
    </BaseContainer>
  );
};

export default Esoque;
