import React from 'react';
import { BaseText, BaseTitle } from '@base/index';
import Image from 'next/image';
import styles from './ServicesItem.module.scss';
import { IconHorse } from '@content/index';

interface IServicesItem {
  itemTitle: string;
  itemList: string[];
}

interface Props {
  item: IServicesItem;
}

const ServicesItem: React.FC<Props> = ({ item }) => {
  const [visible, setVisible] = React.useState(false);

  const onClickVisibleHandler = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.ServicesItem} onClick={onClickVisibleHandler}>
      <IconHorse className={styles.ServicesItemImage} />
      <BaseTitle type='h3' className={styles.ServicesItemTitle}>
        {item.itemTitle}
      </BaseTitle>
      <BaseText className={styles.ServicesItemSubtitle}>
        {item.itemList[0]}
      </BaseText>
      <ul
        className={`${styles.ServicesItemUl} ${!visible ? styles.Hidden : ''}`}
      >
        {item.itemList.slice(1).map((elem) => {
          return (
            <li className={styles.ServicesItemLi} key={elem}>
              {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServicesItem;
