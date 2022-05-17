import React from "react";
import { BaseButton, BaseText, BaseTitle } from "@base/index";
import { LinkHome } from "@content/index";
import { useRouter } from "next/router";

import Image from "next/image";

import styles from "./CompletedReset.module.scss";

interface Props {
  title: string;
  subtitle: string;
  btnText: string;
}

const CompletedReset: React.FC<Props> = ({ title, subtitle, btnText }) => {
  const router = useRouter();

  return (
    <form action="" method="post" className={styles.Completed}>
      <BaseTitle className={styles.Title}>{title}</BaseTitle>

      <div className={styles.Image}>
        <Image
          src="/images/landing/register/class.png"
          layout="fill"
          alt={"Completed images"}
        />
      </div>

      <BaseText className={styles.Subtitle}>{subtitle}</BaseText>
      <BaseButton
        onClick={(e) => {
          e.preventDefault();
          router.push("/login");
        }}
        className={styles.Btn}
      >
        {btnText}
      </BaseButton>

      <LinkHome className={styles.LinkHome} />
    </form>
  );
};

export default CompletedReset;
