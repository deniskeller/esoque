import React from "react";
import { BaseContainer, BaseTitle, BaseText } from "@base/index";
import Image from "next/image";
import Breadcrumbs from "@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs";
import Map from "@content/other/Map/Map";

import styles from "./Contacts.module.scss";
import FormContactUs from "@content/forms/FormContactUs/FormContactUs";

const Contacts = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.blur}></div>
      <BaseContainer>
        <div className={styles.Wrapper}>
          <div className={styles.Breadcrumbs}>
            <Breadcrumbs roorHref="/" rootPathName="Home" />
          </div>
          <BaseTitle className={styles.Title}>
            <span>Contacts</span>
          </BaseTitle>
          <div className={styles.Content}>
            <div className={styles.ContentInfo}>
              <div className={styles.TextBlock}>
                <div className={styles.TextBlockTitle}>Office Address</div>
                <BaseText className={styles.TextBlockSubTitle}>
                  17 State Street Suite 4000, New York, NY 10004 Servcorp
                </BaseText>
              </div>
              <div className={styles.TextBlock}>
                <div className={styles.TextBlockTitle}>Phone Number</div>
                <BaseText className={styles.TextBlockSubTitle}>
                  +1(646)-417-9981
                </BaseText>
              </div>
              <div className={styles.TextBlock}>
                <div className={styles.TextBlockTitle}>Phone Number</div>
                <BaseText className={styles.TextBlockSubTitle}>
                  +1(646)-417-9981
                </BaseText>
              </div>
              <div className={styles.TextBlock}>
                <div className={styles.TextBlockTitle}>
                  Office working hours by New York time
                </div>
                <BaseText className={styles.TextBlockSubTitle}>
                  9:00 AM - 18:00 PM <br /> Saturday - closed <br /> Sunday -
                  closed <br />
                  Government and bank holidays - closed
                </BaseText>
              </div>
            </div>
            <div className={styles.ContentMap}>
              <Map />
            </div>
          </div>
          <div className={styles.ArrowDownContainer}>
            <div className={styles.ArrowDownWrapper}>
              <div className={styles.ArrowDownIconWrapper}>
                <Image
                  src="/images/landing/icons/arrowDown.svg"
                  layout={"fill"}
                  alt={"Esocue image"}
                />
              </div>
            </div>
          </div>
          <div className={styles.FormWrapper}>
            <FormContactUs />
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};
export default Contacts;
