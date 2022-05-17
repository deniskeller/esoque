import React from "react";
import Image from "next/image";
import { BaseContainer, BaseText, BaseTitle } from "@base/index";

import styles from "./Eco.module.scss";
import Link from "next/link";

interface Props {}

const Eco: React.FC<Props> = () => {
  return (
    <div className={styles.Eco}>
      <div className={styles.blur}></div>
      <BaseContainer>
        <div className={styles.WrapperPage}>
          <BaseTitle className={styles.Title}>
            <span className={styles.white}>Eco - </span>{" "}
            <span className={styles.green}>you spend, we plant!</span>
          </BaseTitle>

          <div className={styles.WrapperContent}>
            <div className={styles.List}>
              <div className={styles.ListIconWrapper}>
                <div className={styles.IconText}>
                  <Image src="/images/landing/icons/tree.svg" layout="fill" />
                </div>
                <BaseText className={styles.ListItem}>
                  Deforestation is a major environmental problem that affects
                  everyone, because it deprives us of the future. Cospay is
                  concerned to leave behind fresh air and healthy planet. That
                  is why we allocate funds to plant trees for every transaction
                  on our platform.
                </BaseText>
              </div>
              <BaseText className={styles.ListItem}>
                Saving the planet has never been so easy: you use our service
                and automatically join this important mission.
              </BaseText>
              <BaseText className={styles.ListItem}>
                <b>Use Cospay for your daily tasks and do a great job!</b>
              </BaseText>

              <BaseText className={styles.ListItem}>
                Deforestation is everyone’s problem. It provokes climate change,
                environmental pollution, natural disasters and forced migration.
                We all need to start acting and heal the lungs of our planet.
              </BaseText>
              <BaseText className={styles.ListItem}>
                There is nothing more important than "today", but you need to
                think about it "yesterday".
              </BaseText>
            </div>

            <div className={styles.WelcomeBlockImage}>
              <Image
                src={"/images/landing/eco/planet.png"}
                layout={"fill"}
                alt={"Unicorn image"}
                priority
              />
            </div>
          </div>
          <div className={styles.Btn}>
            <span className={styles.pink}>
              <Link href="/login">Join our philosophy!</Link>
            </span>
            <div className={styles.IconBtn}>
              <Image src={"/images/landing/icons/heart.svg"} layout="fill" />
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export default Eco;
