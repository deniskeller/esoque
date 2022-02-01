import React from 'react';
import Image from 'next/image';
import styles from './IconHorse.module.scss';

interface Props {
  className?: string;
}

const IconHorse: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${styles.IconHorse} ${className}`}>
      <Image
        src='/images/landing/iconUnicornsHorse.png'
        layout={'fill'}
        alt={'Unicorn image'}
      />
    </div>
  );
};

export default IconHorse;
