import React from 'react';
import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import styles from './Home.module.scss';
import { ALL_ICONS } from '@constants/icons';
import Image from 'next/image';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.HeaderBlock}>
        <BaseContainer>
          <div className={styles.HeaderBlockContainer}>
            <BaseIcon
              icon={ALL_ICONS.LOGO_TEXT}
              viewBox="0 0 269 20"
              className={styles.LogoText}
            />

            <BaseIcon
              icon={ALL_ICONS.LOGO}
              viewBox="0 0 439 87"
              className={styles.Logo}
            />
          </div>
        </BaseContainer>
      </div>

      <BaseContainer>
        <div className={styles.HelloBlock}>
          <div className={styles.BlockLeft}>
            <span className={styles.ContentText}>
              <BaseTitle className={styles.HelloBlockTitle}>Hello!</BaseTitle>
              <BaseText className={styles.HelloBlockText}>
                Welcome to Esoque, the foundation of the future of the financial
                world. We are the best experts in the financial industry with
                more than 16 years of modern finance and information
                technologies knowledge.
              </BaseText>
            </span>
            <span className={styles.ContentImage}>
              <Image
                src="/images/landing/home/imgHomeUnicorn.png"
                layout={'fill'}
                // width={653}
                // height={503}
                alt={'Unicorn image'}
              />
            </span>
          </div>

          <div className={styles.BlockRight}>
            <BaseTitle className={styles.HelloBlockTitle}>
              We build Unicorns!
            </BaseTitle>
            <BaseText className={styles.HelloBlockText}>
              Yes, that is true, you can make a new PayPal, Stripe or Revolut,
              or even launch the financial projects for the space.
            </BaseText>
            <BaseText className={styles.HelloBlockText}>
              Our team would help you to find the proper jurisdiction for your
              business and get all required regulatory permissions to launch
              your unicorn.
            </BaseText>
            <BaseText className={styles.HelloBlockText}>
              If you are a well-established business we will help you to expand
              it and grow your opportunities. We have successfully been working
              with European banks to develop their financial infrastructure and
              get regulatory permissions.
            </BaseText>
          </div>
        </div>
      </BaseContainer>

      <div className={styles.ServicesBlock}>
        <BaseContainer>
          <BaseTitle className={styles.ServicesBlockTitle}>
            Services we offer
          </BaseTitle>
          <div className={styles.ServicesBlockItems}>
            <div className={styles.ServicesBlockItem}>
              <BaseTitle type="h2" className={styles.ServicesItemTitle}>
                Unicorns
              </BaseTitle>
              <div className={styles.ServicesItemText}>
                We would help to build a new revolutionary business. Need help
                with the regulatory permissions? Here we are!
              </div>
            </div>
            <div className={styles.ServicesBlockItem}>
              <BaseTitle type="h2" className={styles.ServicesItemTitle}>
                Sidious
              </BaseTitle>
              <div className={styles.ServicesItemText}>
                If you are looking for a solution that would help you to work
                with your customers, our KYC platform is the best choice.
                Automate your B2B or B2C flows!
              </div>
            </div>
            <div className={styles.ServicesBlockItem}>
              <BaseTitle type="h2" className={styles.ServicesItemTitle}>
                Dark Side
              </BaseTitle>
              <div className={styles.ServicesItemText}>
                Come to the dark side and join us. We will help you to
                incorporate the company in a few hours and get started your
                business with the space speed!
              </div>
            </div>
            <div className={styles.ServicesBlockItem}>
              <BaseTitle type="h2" className={styles.ServicesItemTitle}>
                Eco
              </BaseTitle>
              <div className={styles.ServicesItemText}>
                We can help you not only to grow your business but also to save
                the planet. Join the growing trend of eco-friendly fintech
                startups with us!
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>

      <div className={styles.ConclusionBlock}>
        <BaseContainer>
          <div className={styles.ConclusionBlockContent}>
            <div className={styles.ConclusionBlockImage}>
              <Image
                layout={'fill'}
                alt={'Money Bag image'}
                loading="lazy"
                blurDataURL="/images/landing/home/imgHomeMoneyBag.png"
                src="/images/landing/home/imgHomeMoneyBag.png"
              />
            </div>

            <div className={styles.ConclusionBlockTitle}>
              <p>
                Build the future with us and we will open you to a new dimension
                of FinTech.
              </p>
            </div>
          </div>
        </BaseContainer>
      </div>
    </div>
  );
};

export default Home;
