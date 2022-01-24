import React, { ReactNode } from 'react';
import styles from './BaseTitle.module.scss';

interface Props {
  children: ReactNode;
  style?: object;
  type?: string;
  className?: string;
}

const BaseTitle: React.FC<Props> = ({
  children,
  style,
  type = 'h1',
  className,
}) => {
  if (type == 'h1') {
    return (
      <div className={`${className}`}>
        <h1
          style={{ ...style }}
          className={`${styles.Title} ${styles['Title_' + type]}`}
        >
          {children}
        </h1>
      </div>
    );
  } else if (type == 'h2') {
    return (
      <div className={`${className}`}>
        <h2
          style={{ ...style }}
          className={`${styles.Title} ${styles['Title_' + type]}`}
        >
          {children}
        </h2>
      </div>
    );
  } else if (type == 'h3') {
    return (
      <div className={`${className}`}>
        <h3
          style={{ ...style }}
          className={`${styles.Title} ${styles['Title_' + type]}`}
        >
          {children}
        </h3>
      </div>
    );
  }
};

export default BaseTitle;
