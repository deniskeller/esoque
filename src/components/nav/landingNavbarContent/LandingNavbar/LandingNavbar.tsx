import React from 'react';
import { useRouter } from 'next/router';

import { BaseButton, BaseContainer } from '@base/index';
import { LandingMobileMenu, LandingNavbarLink } from '../../index';

import styles from './LandingNavbar.module.scss';
import SelectLanguage from '../SelectLanguage/SelectLanguage';

interface Props {}

const links = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/unicorns',
    title: 'Unicorns',
  },
  {
    href: '/darkside',
    title: 'Dark Side',
  },
  {
    href: '/sidious',
    title: 'Sidious',
  },
  {
    href: '/eco',
    title: 'Eco',
  },
  {
    href: '/esoque',
    title: 'Esoque',
  },
];

const languages = [
  { value: 'en', title: 'en' },
  { value: 'ru', title: 'ru' },
  { value: 'kz', title: 'kz' },
  { value: 'ger', title: 'ger' },
  { value: 'ger', title: 'ger' },
  { value: 'ger', title: 'ger' },
];

const LandingNavbar: React.FC<Props> = () => {
  const router = useRouter();
  const [modal, setModal] = React.useState(false);
  const menuOpen = () => {
    setModal(true);
  };

  const goToLogin = () => {
    router.push('/login');
  };
  const goToRegister = () => {
    router.push('/signup');
  };

  React.useEffect(() => {
    const className = 'overflow-hidden';

    if (modal) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [modal]);

  return (
    <div className={styles.Container}>
      <div className={styles.Navbar}>
        <ul className={styles.Navbar__nav}>
          {links.map((link, index) => {
            return (
              <LandingNavbarLink
                href={link.href}
                title={link.title}
                index={index}
                key={index}
              />
            );
          })}
        </ul>

        <SelectLanguage
          className={styles.Navbar__select_language}
          placeholder='en'
          optionsValue={languages}
          type='language'
        />

        <BaseButton
          type='empty'
          onClick={goToLogin}
          className={styles.BtnLogin}
        >
          Log In
        </BaseButton>
        <BaseButton onClick={goToRegister} className={styles.BtnSignup}>
          Sign Up
        </BaseButton>

        <LandingMobileMenu visible={modal} setVisible={setModal}>
          <ul>
            {links.map((link, index) => {
              return (
                <LandingNavbarLink
                  href={link.href}
                  title={link.title}
                  index={index}
                  key={index}
                />
              );
            })}
          </ul>
        </LandingMobileMenu>
      </div>
    </div>
  );
};

export default LandingNavbar;
