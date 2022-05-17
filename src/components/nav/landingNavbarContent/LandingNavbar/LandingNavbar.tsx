import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BaseButton, BaseIcon } from "@base/index";
import { LandingMobileMenu, LandingNavbarLink } from "../../index";

import styles from "./LandingNavbar.module.scss";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import { useTranslation } from "next-i18next";
import { EsoqueState } from "@store/store";
import { useSelector } from "react-redux";
import { logout } from "@api/login";

import Link from "next/link";
import { ALL_ICONS } from "@constants/icons";
interface Props {}

const links = [
  // {
  //   href: "/",
  //   title: "home",
  // },
  {
    href: "/unicorns",
    title: "unicorns",
  },
  {
    href: "/darkside",
    title: "darkside",
  },
  {
    href: "/sidious",
    title: "sidious",
  },
  {
    href: "/eco",
    title: "eco",
  },
  {
    href: "/esoque",
    title: "esoque",
  },
];

const languages = [
  { value: "en", title: "en" },
  // { value: "ru", title: "ru" },
  // { value: "kz", title: "kz" },
  // { value: "ger", title: "ger" },
  // { value: "ger", title: "ger" },
  // { value: "ger", title: "ger" },
];

const LandingNavbar: React.FC<Props> = () => {
  const [modal, setModal] = React.useState(false);

  const { userData, isAuthenificated } = useSelector(
    (state: EsoqueState) => state.user
  );

  const { i18n, t } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    router.reload();
  };

  const menuOpen = () => {
    setModal(true);
  };
  const goToLogin = () => {
    router.push("/login");
  };
  const goToRegister = () => {
    router.push("/signup");
  };

  const logoutUser = async () => {
    const res = await logout();
    if (res) {
      router.reload();
    }
  };

  React.useEffect(() => {
    const className = "overflow-hidden";
    if (modal) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [modal]);

  return (
    <div className={styles.Container}>
      <div className={styles.Navbar}>
        <span className={styles.NavbarDesktop}>
          <div className={styles.Navbar__logo}>
            <Link href="/">
              <>
                <BaseIcon
                  className={styles.logo_text}
                  icon={ALL_ICONS.LOGO_TEXT}
                  viewBox="0 0 290 22"
                />
                <BaseIcon
                  className={styles.logo}
                  icon={ALL_ICONS.LOGO}
                  viewBox="0 0 440 70"
                />
              </>
            </Link>
          </div>

          <ul className={styles.Navbar__nav}>
            {links.map((link, index) => {
              return (
                <LandingNavbarLink
                  href={link.href}
                  title={t(`header:menu-items.${link.title}`)}
                  index={index}
                  key={index}
                />
              );
            })}
          </ul>
          {/* <SelectLanguage
            changeLanguage={changeLanguage}
            className={styles.Navbar__select_language}
            placeholder={i18n.language || "en"}
            optionsValue={languages}
            type="language"
          /> */}
          {!isAuthenificated ? (
            <>
              <BaseButton
                type="empty"
                onClick={goToLogin}
                className={styles.BtnLogin}
              >
                {t("header:auth-buttons.login")}
              </BaseButton>
              <BaseButton onClick={goToRegister} className={styles.BtnSignup}>
                {t("header:auth-buttons.signup")}
              </BaseButton>
            </>
          ) : (
            <>
              <div className={styles.User}>
                Hello, {userData?.firstName} {userData?.lastName}
              </div>
              <BaseButton onClick={logoutUser} className={styles.BtnSignup}>
                Logout
              </BaseButton>
              <div className={styles.linkApp}>
                <Link href={"/app/"}>Hello, esoque.com!</Link>
              </div>
            </>
          )}
        </span>

        <div className={styles.NavbarMobile}>
          <div className={styles.NavbarMobileBurger} onClick={menuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <LandingMobileMenu visible={modal} setVisible={setModal}>
            <ul className={styles.NavbarMobileNav}>
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

            {/* <SelectLanguage
              changeLanguage={changeLanguage}
              className={styles.Navbar__select_language}
              placeholder={i18n.language || "en"}
              optionsValue={languages}
              type="language"
            /> */}

            {!isAuthenificated ? (
              <>
                <BaseButton
                  type="empty"
                  onClick={goToLogin}
                  className={styles.BtnLogin}
                >
                  Log In
                </BaseButton>
                <BaseButton onClick={goToRegister} className={styles.BtnSignup}>
                  Sign Up
                </BaseButton>
              </>
            ) : (
              <>
                <div className={styles.User}>Hello, John Andersen</div>
                <BaseButton onClick={logoutUser} className={styles.BtnSignup}>
                  Logout
                </BaseButton>
              </>
            )}
          </LandingMobileMenu>
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
