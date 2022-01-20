import React from 'react';
import { useTranslation } from 'next-i18next';
import { BaseContainer } from '@base/index';
import styles from './Sidious.module.scss';

interface Props {}

const Sidious: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <h1 style={{ color: 'white' }}>Sidious page</h1>
    </BaseContainer>
  );
};

export default Sidious;
