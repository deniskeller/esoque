import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { BaseContainer } from '@base/index';
import styles from './Reset.module.scss';

interface Props {}

const Reset: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <h1 style={{ color: 'white' }}>Reset page</h1>
    </BaseContainer>
  );
};

export default Reset;
