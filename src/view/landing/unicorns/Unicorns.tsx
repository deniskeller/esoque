import React from 'react';
import { useTranslation } from 'next-i18next';
import { BaseContainer } from '@base/index';
import styles from './Unicorns.module.scss';

interface Props {}

const Unicorns: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <h1 style={{ color: 'white' }}>Unicorns page</h1>
    </BaseContainer>
  );
};

export default Unicorns;
