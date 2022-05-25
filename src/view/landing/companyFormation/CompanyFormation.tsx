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
import styles from './CompanyFormation.module.scss';
import { ALL_ICONS } from '@constants/icons';
import AccordionItem from '@content/other/AccordionItem/AccordionItem';

const mockData = [
  {
    title: 'Alberta',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'Cyprus',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'dominica',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'england',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'estonia',
    items: [
      {
        name: 'Custom Made',
        price: '£ 1,600',
      },
    ],
  },
  {
    title: 'hong kong',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'ireland',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'latvia',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'lithuania',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'marshall islands',
    items: [
      {
        name: 'Custom Made',
        price: '£ 1,600',
      },
    ],
  },
  {
    title: 'scotland',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'singapore',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'sweden',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'gibraltar',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'northern island',
    items: [
      {
        name: 'Custom Made',
        price: '£ 1,600',
      },
    ],
  },
  {
    title: 'canada',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'saint vincent & the grenadines',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'seychelles',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'usa',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'andora',
    items: [
      {
        name: 'Custom Made',
        price: '£ 1,600',
      },
    ],
  },
  {
    title: 'denmark',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'luxembourg',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'liechtenstein',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'switzerland',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'HUNGARY',
    items: [
      {
        name: 'Custom Made',
        price: '£ 1,600',
      },
    ],
  },
  {
    title: 'RUSSIA',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'UKRAINE',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'GEORGIA',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
  {
    title: 'GEORGIA',
    items: [
      {
        name: 'Ready Made',
        price: '£ 1,600',
      },
      {
        name: 'Custom Made',
        price: '£ 1,450',
      },
    ],
  },
];

const CompanyFormation: React.FC = () => {
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
            <BaseTitle className={styles.Title}>Company Formation</BaseTitle>
            <BaseSubtitle type="h3" className={styles.Subtitle}>
              Please select the jurisdiction you are interested in below
            </BaseSubtitle>
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

        <div className={styles.Accordion}>
          {mockData?.map((item, index) => {
            return (
              <AccordionItem title={item.title} key={index}>
                <div className={styles.List}>
                  {item.items?.map((el, i) => {
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
              </AccordionItem>
            );
          })}
        </div>
      </BaseContainer>
    </div>
  );
};

export default CompanyFormation;
