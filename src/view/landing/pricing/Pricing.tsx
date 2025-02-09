import React from 'react';

import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import Breadcrumbs from '@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs';
import Link from 'next/link';

import styles from './Pricing.module.scss';

const imgNames = [
  {
    title: 'Licensing',
    img: 'licensing.png',
    href: '/pricing_information/licensing',
  },
  {
    title: 'Company Formation',
    img: 'company.png',
    href: '/pricing_information/company_formation',
  },
  {
    title: 'Compliance Software',
    img: 'software.png',
    href: '/pricing_information/compliance_software',
  },
  {
    title: 'Payment Software',
    img: 'payment.png',
    href: '/pricing_information/payment_software',
  },
  {
    title: 'Support Services',
    img: 'support.png',
    href: '/pricing_information/support_services',
  },
];

const Pricing = () => {
  return (
    <BaseContainer>
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
            <Card key={i} title={el.title} img={el.img} href={el.href} />
          ))}
        </div>
      </div>
    </BaseContainer>
  );
};

export default Pricing;

type Card = {
  title: string;
  img: string;
  href: string;
};

const Card = ({ title, img, href }: Card) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardTitle}>{title}</div>
      <div className={styles.CardImg}>
        <img src={`/images/landing/pricing/${img}`} />
      </div>
      <Link href={href}>
        <a className={styles.CardBtn}>Price-list</a>
      </Link>
    </div>
  );
};
