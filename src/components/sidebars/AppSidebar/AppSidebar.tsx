import React from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import { linksData } from "./linksData";

import styles from "./AppSidebar.module.scss";
import { useSelector } from "react-redux";
import { EsoqueState } from "@store/store";
import { BaseButton } from "@base/index";

const AppSidebar: React.FC = (): JSX.Element => {
  const router = useRouter();

  const {
    isAuthenificated,
    userData: { firstName, lastName },
  } = useSelector((state: EsoqueState) => state.user);

  const links = linksData.map((link) => {
    return (
      <div key={link.url} className={styles.linkWrapper}>
        <div className={styles.link}>
          <div className={styles.icon}>
            <Image src={`/images/app/sidebar/${link.img}`} layout="fill" />
          </div>

          <span>
            <Link href={link.url}>
              {link.name === "Profile" && isAuthenificated
                ? `${firstName} ${lastName}`
                : link.name}
            </Link>
          </span>
        </div>

        <span className={router.asPath === link.url ? styles.active : ""} />
      </div>
    );
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>CONNECT</div>
      <div className={styles.listLink}>{links}</div>

      <button className={styles.btn}>
        <div>
          <img src="/images/app/sidebar/plus.png" />
        </div>
        <span>Start an Application</span>
      </button>
      <div className={styles.info}>Some caption about</div>
    </div>
  );
};
export default AppSidebar;
