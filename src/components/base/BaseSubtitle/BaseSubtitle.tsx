import React, { ReactNode } from 'react';
import styles from './BaseSubtitle.module.scss';

interface Props {
  children: ReactNode;
  style?: object;
  type?: string;
  className?: string;
}

const BaseSubtitle: React.FC<Props> = ({
  children,
  style,
  type = 'h1',
  className,
}) => {
  return (
    <h1
      style={{ ...style }}
      className={`${styles.Title} ${styles['Title_' + type]} ${className}`}
    >
      {children}
    </h1>
  );
  // if (type == 'h1') {
  //   return (
  //     <h1
  //       style={{ ...style }}
  //       className={`${styles.Title} ${styles['Title_' + type]} ${className}`}
  //     >
  //       {children}
  //     </h1>
  //   );
  // } else if (type == 'h2') {
  //   <h2
  //     style={{ ...style }}
  //     className={`${styles.Title} ${styles['Title_' + type]} ${className}`}
  //   >
  //     {children}
  //   </h2>;
  // } else if (type == 'h3') {
  //   <h3
  //     style={{ ...style }}
  //     className={`${styles.Title} ${styles['Title_' + type]} ${className}`}
  //   >
  //     {children}
  //   </h3>;
  // }
};

export default BaseSubtitle;
