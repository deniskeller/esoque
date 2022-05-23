import React, { ReactNode } from 'react';
import { BaseIcon } from '@base/index';
import styles from './AccordionItem.module.scss';
import { ALL_ICONS } from '@constants/icons';

interface IProps {
  children: ReactNode | ReactNode[];
  title: string;
}

const AccordionItem: React.FC<IProps> = ({ title, children }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  return (
    <>
      <div className={styles.AccordionItem}>
        <div
          className={styles.AccordionHeader}
          onClick={() => setIsVisible(!isVisible)}
        >
          <div className={styles.AccordionHeaderTitle}>{title}</div>

          {isVisible ? (
            <div className={`${styles.AccordionHeaderToggle} ${styles.Open}`}>
              <BaseIcon
                icon={ALL_ICONS.ACCORDION_OPEN}
                viewBox="0 0 24 21"
                className={styles.IconAccordionOpen}
              />
            </div>
          ) : (
            <div className={`${styles.AccordionHeaderToggle} ${styles.Close}`}>
              <BaseIcon
                icon={ALL_ICONS.CALCULATED_POPUP_CLOSE}
                viewBox="0 0 20 23"
                className={styles.IconAccordionClose}
              />
            </div>
          )}
        </div>
        <div
          className={`${styles.AccordionContent} ${
            isVisible ? styles.AccordionContentHidden : ''
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
