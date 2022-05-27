import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { BaseButton, BaseIcon, BaseInput } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { feedbackSubscribe } from '@api/feedbackForms';
import { validateEmail } from '@utils/validateInputs';

import styles from './Footer.module.scss';

const links = [
  { href: '/privacy_policy', title: 'Privacy Policy' },
  { href: '/contacts', title: 'Contacts' },
  { href: '/terms_and_conditions', title: 'Terms & Conditions' },
  { href: '/pricing_information', title: 'Pricing Information' },
  { href: '/cookies_policy', title: 'Cookies Policy' },
  { href: '/complaints_procedure', title: 'Complaints Procedure' },
  { href: '/covid19_policy', title: 'COVID-19 Company Policy' },
  { href: '/modern_slavery_statement', title: 'Modern Slavery Statement' },
  { href: '/website_terms', title: 'Website Terms' },
  { href: '/careers', title: 'Careers' },
  { href: '/news_and_insights', title: 'News & Insights' },
];

const Footer: React.FC = ({}) => {
  const router = useRouter();
  const [type, setType] = React.useState('');

  const [email, setEmail] = React.useState<string>('');

  const [emailErr, setEmailErr] = React.useState<boolean>(false);
  const [subEmail, setSubEmail] = React.useState<boolean>(false);

  const subscribe = async () => {
    if (email && !emailErr) {
      const res = await feedbackSubscribe(email);
      res ? setSubEmail(true) : setSubEmail(false);
    }
  };

  React.useEffect(() => {
    if (router.pathname == '/esoque') {
      setType('light');
    }
  }, [router.pathname]);

  React.useEffect(() => {
    if (email)
      if (validateEmail(email)) {
        setEmailErr(false);
      } else {
        setEmailErr(true);
      }
  }, [email]);

  return (
    <div
      className={`${styles.FooterWrapper} ${
        type == 'light' ? styles.Light : ''
      }`}
    >
      <div className={styles.Footer}>
        {/* top */}
        <div className={styles.FooterTop}>
          <div className={styles.FooterLogoWrapper}>
            <Link href="/">
              <a>
                <div className={styles.FooterLogo}>
                  <BaseIcon
                    icon={ALL_ICONS.LOGO_TEXT}
                    viewBox="0 0 290 22"
                    className={styles.LogoText}
                  />
                  <BaseIcon
                    icon={ALL_ICONS.LOGO}
                    viewBox="0 0 440 70"
                    className={styles.Logo}
                  />
                </div>
              </a>
            </Link>

            <div className={styles.LogoSubText}>
              Copyright © 2022 Esoque Inc, 17 State Street Suite 4000,
              Manhattan, New York, NY 10004. All TM rights reserved.
            </div>
          </div>
          <div className={styles.FooterNavbar}>
            {links &&
              links.map((item, idex) => {
                return (
                  <Link href={`${item.href}`} key={idex}>
                    <a className={styles.Link}>{item.title}</a>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* center */}
        <div className={styles.FooterCenter}>
          <div className={styles.FooterEmailForm}>
            {/* Subscribe email */}
            {subEmail ? (
              <div className={styles.EmailSuccessWrapper}>
                <div className={styles.EmailSuccess}>
                  Congratulations! You have successfully subscribed to updates.
                </div>
              </div>
            ) : (
              <>
                <span>
                  Subscribe to get updates and notify about our exchange and
                  products
                </span>
                <BaseInput
                  className={styles.FooterEmailFormInput}
                  type="text"
                  name="Email"
                  value={email}
                  error={emailErr}
                  placeholder="Email address"
                  onChange={(value: string) => {
                    setEmail(value);
                  }}
                />
                <BaseButton
                  className={styles.FooterEmailFormBtn}
                  type="success_white"
                  onClick={subscribe}
                >
                  Subscribe
                </BaseButton>
              </>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.FooterBottom}>
          <div className={styles.PaymentsText}>
            We accept following payment methods: Visa, MasterCard, UnionPay,
            American Express, Discover, Diners Club, AHA, Wire Transfers,
            Binance
          </div>
          <div className={styles.PaymentsWrapper}>
            <div className={styles.PaymentsIcons}>
              <BaseIcon
                icon={ALL_ICONS.VISA}
                className={styles.PaymentsIconVisa}
                viewBox="0 0 90 29"
              />
              <BaseIcon
                icon={ALL_ICONS.MS}
                className={styles.PaymentsIconMS}
                viewBox="0 0 59 45"
              />
              <BaseIcon
                icon={ALL_ICONS.UNION_PAY}
                className={styles.PaymentsIconUnionPay}
                viewBox="0 0 54 34"
              />
              <BaseIcon
                icon={ALL_ICONS.A_EXPRESS}
                className={styles.PaymentsIconExpress}
                viewBox="0 0 41 41"
              />
              <BaseIcon
                icon={ALL_ICONS.DISCOVER}
                className={styles.PaymentsIconDiscover}
                viewBox="0 0 105 27"
              />
              <BaseIcon
                icon={ALL_ICONS.DENIS_CLUB}
                className={styles.PaymentsIconDenis}
                viewBox="0 0 116 30"
              />
              <BaseIcon
                icon={ALL_ICONS.SWIFT}
                className={styles.PaymentsIconSwift}
                viewBox="0 0 47 46"
              />
              <BaseIcon
                icon={ALL_ICONS.BINANCE}
                className={styles.PaymentsIconBinance}
                viewBox="0 0 127 25"
              />
              <BaseIcon
                icon={ALL_ICONS.PCI}
                className={styles.PaymentsIconPCI}
                viewBox="0 0 117 40"
              />
            </div>
            <div className={styles.Social}>
              <BaseIcon
                icon={ALL_ICONS.FOOTER_FB}
                className={styles.SocialFb}
                viewBox="0 0 13 28"
              />
              <BaseIcon
                icon={ALL_ICONS.FOOTER_INST}
                className={styles.SocialInst}
                viewBox="0 0 25 27"
              />
              <BaseIcon
                icon={ALL_ICONS.FOOTER_TW}
                className={styles.SocialTw}
                viewBox="0 0 27 23"
              />
              <BaseIcon
                icon={ALL_ICONS.FOOTER_LINKEDIN}
                className={styles.SocialLinkedin}
                viewBox="0 0 24 24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
