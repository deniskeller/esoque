import React from "react";

import { BaseText, BaseTitle } from "@base/index";
import Breadcrumbs from "@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs";

import styles from "./Pricing.module.scss";

const imgNames = [
  { title: "Licensing", img: "licensing.png" },
  { title: "Company Formation", img: "company.png" },
  { title: "Compliance Software", img: "software.png" },
  { title: "Payment Software", img: "payment.png" },
  { title: "Support Services", img: "support.png" },
];

const Pricing = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.TextBlock}>
          <div className={styles.Breadcrumbs}>
            <Breadcrumbs roorHref="/" rootPathName="Home" />
          </div>
          <BaseTitle className={styles.Title}>
            <span>Pricing Information</span>
          </BaseTitle>
          <BaseText className={styles.Description}>
            With Esoque account, you can access the following key features. The
            earlier you join, the better offer you will receive to undertake
            business account and set up with us. Our offer is simple, and with
            no commitment, you can manage your bills, invoices, tax and more
            from one Esoque business account.
          </BaseText>
        </div>

        <div className={styles.List}>
          {imgNames.map((el, i) => (
            <Card key={i} title={el.title} img={el.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

type Card = {
  title: string;
  img: string;
};

const Card = ({ title, img }: Card) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardTitle}>{title}</div>
      <div className={styles.CardImg}>
        <img src={`/images/landing/pricing/${img}`} />
      </div>
      <div className={styles.CardBtn}>Price-list</div>
    </div>
  );
};
