import { BaseInput, BaseSelect, BaseButton } from '@base/index';
import Image from 'next/image';
import React from 'react';
import styles from './SignatureCertifications.module.scss';

interface Props {}

const SignatureCertifications: React.FC<Props> = ({}) => {
  return (
    <div className={styles.SignatureCertifications}>
      <p className={styles.Description}>
        We can remotely verify Your Signature on any Original Document <br />
        Here you may appoint remote meeting for signature verification on any
        document: just choose the type of verification and proceed to
        appointments calendar
      </p>
      <p className={styles.CovidDescription}>
        Due to COVID -19 situation we can remotely verify personal and corporate
        documents.
      </p>
    </div>
  );
};

export default SignatureCertifications;
