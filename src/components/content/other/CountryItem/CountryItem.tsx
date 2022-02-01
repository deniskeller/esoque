import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPopup } from 'store/modals/actions';
import styles from './CountryItem.module.scss';

interface Props {
  id: number;
  title: string;
  image: string;
}

const CountryItem: React.FC<Props> = ({ id, title, image }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch(setPopup('UnicornsPopup', id));
  };

  return (
    <div className={styles.CountryItem} onClick={handleClick}>
      <div className={styles.CountryItemImage}>
        <Image
          src={`/images/landing/flags/${image}`}
          layout={'fill'}
          alt={''}
        />
      </div>
      <div className={styles.CountryItemTitle}>{title}</div>
    </div>
  );
};

export default CountryItem;
