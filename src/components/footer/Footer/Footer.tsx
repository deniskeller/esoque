import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import styles from './Footer.module.scss';

const links = [
  { href: '/', title: 'Contacts' },
  { href: '/', title: 'Pricing Information' },
  { href: '/', title: 'Privacy Policy' },
  { href: '/', title: 'Complaints Procedure' },
  { href: '/', title: 'Terms & Conditions' },
  { href: '/', title: 'Modern Slavery Statement' },
  { href: '/', title: 'Cookies Policy' },
  { href: '/', title: 'Careers' },
  { href: '/', title: 'COVID-19 Company Policy' },
  { href: '/', title: 'News & Insights' },
];

const Footer: React.FC = ({}) => {
  const router = useRouter();
  const [type, setType] = React.useState('');

  React.useEffect(() => {
    if (router.pathname == '/esoque') {
      setType('light');
    }
  }, [router.pathname]);

  return (
    <>
      <div
        className={`${styles.FooterWrapper} ${
          type == 'light' ? styles.Light : ''
        }`}
      >
        <BaseContainer>
          <div className={styles.Footer}>
            <div className={styles.FooterLogoContent}>
              <div className={styles.FooterLogoContentTop}>
                <BaseIcon
                  icon={ALL_ICONS.LOGO_TEXT}
                  viewBox='0 0 290 22'
                  className={styles.LogoText}
                />
                <BaseIcon
                  icon={ALL_ICONS.LOGO}
                  viewBox='0 0 440 70'
                  className={styles.Logo}
                />
              </div>
              <div className={styles.FooterLogoContentBottom}>
                <BaseIcon
                  icon={ALL_ICONS.LOGO_ESOQUE}
                  viewBox='0 0 174 17'
                  className={styles.LogoEsoque}
                />
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
        </BaseContainer>
      </div>
    </>
  );
};

export default Footer;
