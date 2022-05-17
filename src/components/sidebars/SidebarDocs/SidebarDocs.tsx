import React from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import { linksData } from "./linksData";

import styles from "./SidebarDocs.module.scss";

const SidebarDocs: React.FC = (): JSX.Element => {
  const router = useRouter();

  const links = linksData.map((link) => {
    return (
      <div key={link.url} className={styles.linkWrapper}>
        <div className={styles.link}>
          <Image
            src={`/images/landing/sidebar/${link.img}`}
            width="20px"
            height="20px"
          />
          <div>
            <Link href={link.url}>{link.name}</Link>
          </div>
        </div>

        {/* Sub menu */}
        {link?.subMenu?.length && router.asPath.includes(link.url) && (
          <div className={styles.subMenu}>
            {link.subMenu.map((subLink) => {
              return (
                <div key={subLink.name} className={styles.subMenuItem}>
                  <Link href={subLink.url}>{subLink.name}</Link>
                </div>
              );
            })}
          </div>
        )}

        <span
          className={router.asPath.includes(link.url) ? styles.active : ""}
        />
      </div>
    );
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.listLink}>{links}</div>
    </div>
  );
};
export default SidebarDocs;
