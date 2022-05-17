import Image from "next/image";
import React from "react";
import { JurisdictionPopup } from "@content/index";

import styles from "./JurisdictionCountryItem.module.scss";

interface Props {
  popup?: string;
  id: number;
  title: string;
  subtitle: string;
  image: string;
  openModal?: () => void;
}

const JurisdictionCountryItem: React.FC<Props> = ({
  popup,
  id,
  title,
  subtitle,
  image,
  openModal,
}) => {
  {
    popup === title && <JurisdictionPopup className="JurisdictionPopup" />;
  }
  return (
    <div className={styles.CountryItem}>
      <div className={styles.CountryItemImage}>
        <Image src={image} layout={"fill"} alt={""} />
        <div className={styles.CountryItemTitle}>
          <h1>{title}</h1>
        </div>
      </div>

      <div className={styles.CountryItemDescription}>
        <p>{subtitle}</p>
        <span onClick={openModal}>
          <p>+</p>
        </span>
      </div>
    </div>
  );
};

export default JurisdictionCountryItem;
