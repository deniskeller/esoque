import React from "react";
import Image from "next/image";
import styles from "./IconHorse.module.scss";

interface Props {
  className?: string;
}

const IconHorse: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${styles.IconHorse} ${className}`}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src="/images/landing/unicorns/iconUnicornsHorse.png"
          layout={"fill"}
          alt={"Unicorn image"}
        />
      </div>
    </div>
  );
};

export default IconHorse;
