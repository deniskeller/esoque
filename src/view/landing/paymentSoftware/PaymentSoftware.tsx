import React, { SyntheticEvent } from 'react';

import {
  BaseCheckbox,
  BaseContainer,
  BaseIcon,
  BaseSubtitle,
  BaseTitle,
} from '@base/index';
import Breadcrumbs from '@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs';
import useOnClickOutside from '@hooks/useOnClickOutside';
import styles from './PaymentSoftware.module.scss';
import { ALL_ICONS } from '@constants/icons';
import AccordionItem from '@content/other/AccordionItem/AccordionItem';

const mockData = [
  {
    name: 'Main e-Bank Module',
    price: '£ 300,000',
  },
  {
    name: 'Cryptocurrency Module',
    price: '£ 100,000',
  },
  {
    name: '45 Currency Module',
    price: '£ 100,000',
  },
  {
    name: 'AML Module',
    price: '£ 100,000',
  },
  {
    name: 'Passive SWIFT (GB) Module',
    price: '£ 75,000',
  },
  {
    name: 'Card Module T1 (for payment card issue through issuer’s bank)',
    price: '£ 150,000',
  },
  {
    name: 'Card Module T2 (payment card acquiring for deposits)',
    price: '£ 350,000',
  },
  {
    name: 'British Correspondence Accounts Bank Connection',
    price: '£ 150,000',
  },
  {
    name: 'Online KYC Service for B2C/B2B',
    price: '£ 100,000',
  },
  {
    name: 'Company House Register',
    price: '£ 50,000',
  },
  {
    name: 'EBR Register',
    price: '£ 75,000',
  },
  {
    name: 'Compass White Label Setup',
    price: '£ 100,000',
  },
];

const PaymentSoftware: React.FC = () => {
  //логика модалки калькулятора
  const [hidden, setHidden] = React.useState<boolean>(false);
  const showCalculatedPopup = (event: SyntheticEvent) => {
    event.stopPropagation();
    setHidden(true);
  };

  //убрать any и задать правильный тип
  const closeCalculatedPopup = (event: any) => {
    event.stopPropagation();
    setHidden(false);
  };
  const thisPopup = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(thisPopup, closeCalculatedPopup);

  //логика чекбоксов
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <div className={styles.Container}>
      <BaseContainer>
        <div className={styles.Breadcrumbs}>
          <Breadcrumbs roorHref="/" rootPathName="Home" />
        </div>

        <div className={styles.Header}>
          <div className={styles.HeaderDescription}>
            <BaseTitle className={styles.Title}>Payment Software</BaseTitle>
          </div>
          <div className={styles.HeaderActions}>
            <div className={styles.Calculated} onClick={showCalculatedPopup}>
              <span>TOTAL COST £ #calculated</span>
              <div
                className={`${styles.CalculatedPopup} ${
                  !hidden ? styles.Hidden : ''
                }`}
                ref={thisPopup}
              >
                <div className={styles.Close} onClick={closeCalculatedPopup}>
                  <BaseIcon
                    icon={ALL_ICONS.CALCULATED_POPUP_CLOSE}
                    viewBox="0 0 20 23"
                    className={styles.IconClose}
                  />
                </div>
                <div className={styles.List}>
                  <div className={styles.ListItem}>
                    <div className={styles.ListItemDelete}>
                      <BaseIcon
                        icon={ALL_ICONS.TRASH_CAN}
                        viewBox="0 0 22 23"
                        className={styles.IconDelete}
                      />
                    </div>
                    <div className={styles.ListItemName}>Position #1</div>
                    <div className={styles.ListItemPrice}>price</div>
                  </div>
                  <div className={styles.ListItem}>
                    <div className={styles.ListItemDelete}>
                      <BaseIcon
                        icon={ALL_ICONS.TRASH_CAN}
                        viewBox="0 0 22 23"
                        className={styles.IconDelete}
                      />
                    </div>
                    <div className={styles.ListItemName}>Position #2</div>
                    <div className={styles.ListItemPrice}>price</div>
                  </div>
                  <div className={styles.ListItem}>
                    <div className={styles.ListItemDelete}>
                      <BaseIcon
                        icon={ALL_ICONS.TRASH_CAN}
                        viewBox="0 0 22 23"
                        className={styles.IconDelete}
                      />
                    </div>
                    <div className={styles.ListItemName}>Position #3</div>
                    <div className={styles.ListItemPrice}>price</div>
                  </div>
                </div>
                <div className={styles.Info}>
                  <div className={styles.Total}>TOTAL</div>
                  <div className={styles.Price}>price</div>
                </div>
              </div>
            </div>
            <div className={styles.Order}>ORDER</div>
          </div>
        </div>

        <div className={styles.List}>
          {mockData?.map((el, i) => {
            return (
              <div className={styles.ListItem} key={i}>
                <div className={styles.Checkbox}>
                  <BaseCheckbox
                    checkboxValue={isChecked}
                    onClick={setIsChecked}
                  />
                </div>
                <div className={styles.Title}>{el.name}</div>
                <div className={styles.Value}>{el.price}</div>
              </div>
            );
          })}
        </div>
      </BaseContainer>
    </div>
  );
};

export default PaymentSoftware;
