import React from "react";
import { useDispatch } from "react-redux";
import { actions as actionsModals } from "@store/modals/reducer";
import styles from "./BusinessItem.module.scss";

interface Props {
  id: number;
  title: string;
}

const BusinessItem: React.FC<Props> = ({ title, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actionsModals.setPopup({ popup: "UnicornsPopup", id }));
  };

  return (
    <div className={styles.OurWorkBusinessItem} onClick={handleClick}>
      <div className={styles.OurWorkBusinessItemTitle}>{title}</div>
    </div>
  );
};

export default BusinessItem;
