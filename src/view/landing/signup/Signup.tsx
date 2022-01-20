import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { BaseContainer } from '@base/index';
import styles from './Signup.module.scss';

interface Props {}

const Signup: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <h1 style={{ color: 'white' }}>Signup page</h1>
    </BaseContainer>
  );
};

export default Signup;
