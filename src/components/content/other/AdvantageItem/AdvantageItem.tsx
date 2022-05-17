import { BaseTitle, BaseText } from "@base/index";
import Image from "next/image";
import React from "react";
import styles from "./AdvantageItem.module.scss";

interface Props {
  title?: string;
  subtitle?: string;
  width?: number;
  height?: number;
  image: string;
  className?: string;
  backgroundType?: string;
}

const AdvantageItem: React.FC<Props> = ({
  title,
  subtitle,
  width = 51,
  height = 51,
  image,
  className,
  backgroundType = "dark",
}) => {
  return (
    <div
      className={`${styles.AdvantageItem} ${className} ${
        backgroundType == "light" ? styles.Light : styles.Dark
      }`}
    >
      <div className={styles.AdvantageItemImage}>
        <Image
          src={image}
          width={width}
          height={height}
          priority
          // layout='fill'
          alt={""}
        />
      </div>

      <BaseTitle type="h3" className={styles.AdvantageItemTitle}>
        {title}
      </BaseTitle>

      <BaseText className={styles.AdvantageItemSubtitle}>{subtitle}</BaseText>
    </div>
  );
};

export default AdvantageItem;
