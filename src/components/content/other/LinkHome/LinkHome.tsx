import React from 'react';
import Link from 'next/link';
import styles from './LinkHome.module.scss';

interface Props {
  style?: object;
  className?: string;
}

const LinkHome: React.FC<Props> = ({ style, className }) => {
  return (
    <Link href={'/'}>
      <a className={`${styles.Link} ${className}`} style={{ ...style }}>
        Home
      </a>
    </Link>
  );
};

export default LinkHome;
