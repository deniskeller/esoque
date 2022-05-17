import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { actions as actionsModals } from "@store/modals/reducer";
import styles from "./CountryItem.module.scss";

interface Props {
  id: number;
  title: string;
  image: string;
}

const CountryItem: React.FC<Props> = ({ id, title, image }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // <<<<<<< HEAD
    dispatch(actionsModals.setPopup({ popup: "JurisdictionPopup", id }));
    // =======
    // dispatch(setPopup("JurisdictionPopup", id));
    // >>>>>>> origin/html
  };

  return (
    <div className={styles.CountryItem} onClick={handleClick}>
      <div className={styles.CountryItemImage}>
        <Image
          src={`/images/landing/flags/${image}`}
          layout={"fill"}
          alt={""}
          priority
        />
      </div>
      <div className={styles.CountryItemTitle}>{title}</div>
    </div>
  );
};

export default CountryItem;
