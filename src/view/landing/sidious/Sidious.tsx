import React from 'react';
import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import {
  CertificationPopup,
  CorporateDocumentsPopup,
  ImprovingItem,
  NotAcceptingPopup,
  RequestSuccessPopup,
  WidgetSidious,
} from '@content/index';
import Image from 'next/image';
import styles from './Sidious.module.scss';
import { ALL_ICONS } from '@constants/icons';

interface Props {}

const improvingData = [
  {
    image: '/images/landing/sidious/iconSidiousManOfficeWorker',
    dataList: [
      'Corporate Lawyers',
      'Real Estate Agents',
      'Real Estate Lawyers',
      'Divorce / Inheritance Lawyers',
    ],
  },
  {
    image: '/images/landing/sidious/iconSidiousBank',
    dataList: [
      'Compliance / Onboarding Specialists',
      'Electronic Money Institutionss',
      'Banks',
      'Other Regulated Entitie',
    ],
  },
  {
    image: '/images/landing/sidious/iconSidiousShoppingCart',
    dataList: [
      'Logistics Platforms',
      'Market Places',
      'Registered Agents',
      'Co-Working',
    ],
  },
  {
    image: '/images/landing/sidious/iconSidiousDollarBanknote',
    dataList: [
      'Security Brokers',
      'Financial Investments Companies',
      'Wealth Management Offices',
    ],
  },
];

const Sidious: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <div className={styles.WelcomeBlock}>
          <BaseTitle className={styles.WelcomeBlockTitle}>Sidious</BaseTitle>
          <div className={styles.WelcomeBlockUl}>
            <div className={styles.WelcomeBlockImage}>
              <Image
                layout={'fill'}
                alt={''}
                priority={true}
                placeholder="blur"
                blurDataURL="/images/landing/sidious/imgSidious1.png"
                src="/images/landing/sidious/imgSidious1.png"
              />
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                With us now you have access to corporate information and
                official company documents in almost all countries in the world.
              </BaseText>
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                Information is based only on official / Government sources and
                can be utilized for KYC/KYB purposes.
              </BaseText>
            </div>
            <div className={`${styles.WelcomeBlockLi} ${styles.GreenTExt}`}>
              <BaseText className={`${styles.WelcomeBlockText}`}>
                Validate Corporate/Personal Identity Online: Fast, Accurate,
                Responsible.
              </BaseText>
            </div>
          </div>

          <div className={styles.AboutIcon}>
            <div className={styles.AboutIconCircleDown}>
              <BaseIcon icon={ALL_ICONS.ARROW_DOWN} viewBox="0 0 30 68" />
            </div>
          </div>
        </div>
      </BaseContainer>

      <div className={styles.WidgetBlockContainer}>
        <BaseContainer>
          <WidgetSidious />
        </BaseContainer>
      </div>

      <BaseContainer>
        <div className={styles.AdaptationBlock}>
          <BaseTitle className={styles.AdaptationBlockTitle}>
            Client’s onboarding
          </BaseTitle>
          <BaseTitle className={styles.AdaptationBlockSubtitle}>
            The challenge for regulated institutions
          </BaseTitle>
          <div className={styles.AdaptationBlockImage}>
            <Image
              src="/images/landing/sidious/imgSidious3.png"
              layout={'fill'}
              alt={''}
              blurDataURL="/images/landing/sidious/imgSidious3.png"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div>
      </BaseContainer>

      <div className={styles.PlatformBenefitsBlockContainer}>
        <BaseContainer>
          <div className={styles.PlatformBenefitsBlock}>
            <BaseTitle type="h2" className={styles.PlatformBenefitsBlockTitle}>
              KYC/KYB platform for onboarding and monitoring
            </BaseTitle>

            <div className={styles.PlatformBenefits}>
              <div className={styles.PlatformBenefitsText}>
                <BaseTitle className={styles.PlatformBenefitsBlockSubtitle}>
                  Improving the process of onboarding
                </BaseTitle>
                <ul className={styles.PlatformBenefitsBlockList}>
                  <li className={styles.PlatformBenefitsBlockListItem}>
                    <span></span>
                    <p>Verify that the company exists and is active</p>
                  </li>
                  <li className={styles.PlatformBenefitsBlockListItem}>
                    <span></span>
                    <p>Verify Live Personal Identity</p>
                  </li>
                  <li className={styles.PlatformBenefitsBlockListItem}>
                    <span></span>
                    <p>
                      Identify all the key individuals, discover corporate
                      structure and management
                    </p>
                  </li>
                  <li className={styles.PlatformBenefitsBlockListItem}>
                    <span></span>
                    <p>
                      See the ownership structure up to the very last person -
                      the ultimate beneficial owner
                    </p>
                  </li>
                  <li className={styles.PlatformBenefitsBlockListItem}>
                    <span></span>
                    <p>
                      Compare data from Government records to corporate
                      documents and clear with AML databases
                    </p>
                  </li>
                  <li className={styles.PlatformBenefitsBlockListItem}>
                    <span></span>
                    <p>
                      Request Government verification Certificates of Incumbency
                      and Good Sanding certified by apostil or consulate
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.PlatformBenefitsImage}>
                <Image
                  layout={'fill'}
                  alt={''}
                  src="/images/landing/sidious/imgSidious4.png"
                  blurDataURL="/images/landing/sidious/imgSidious4.png"
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>

      <BaseContainer>
        <div className={styles.ImprovingBlock}>
          <BaseTitle type="h2" className={styles.ImprovingBlockTitle}>
            Improving the process of onboarding
          </BaseTitle>
          <BaseTitle className={styles.ImprovingBlockSubtitle}>
            Our customers: Regulated Institutions
          </BaseTitle>
          <div className={styles.ImprovingBlockItems}>
            {improvingData &&
              improvingData.map((item, index) => {
                return (
                  <ImprovingItem
                    key={index}
                    itemList={item.dataList}
                    image={item.image}
                  />
                );
              })}
          </div>
        </div>
      </BaseContainer>

      <div className={styles.HowItWorksBlockContainer}>
        <div className={styles.HowItWorksBlock}>
          <BaseTitle type="h2" className={styles.HowItWorksBlockTitle}>
            How it works
          </BaseTitle>

          {/* <div
            className={`${styles.HowItWorksBlockImage} ${styles.DesktopImage}`}
          >
            <Image
              layout={'fill'}
              alt="preview"
              src="/images/landing/sidious/imgSidious5tablet.png"
              blurDataURL="/images/landing/sidious/imgSidious5tablet.png"
              placeholder="blur"
              loading="lazy"
            />
          </div> */}

          <div
            className={`${styles.HowItWorksBlockImage} ${styles.TabletImage}`}
          >
            <Image
              layout={'fill'}
              alt="preview"
              src="/images/landing/sidious/imgSidious5tablet.png"
              blurDataURL="/images/landing/sidious/imgSidious5tablet.png"
              placeholder="blur"
              loading="lazy"
            />
          </div>

          <div
            className={`${styles.HowItWorksBlockImage} ${styles.MobileImage}`}
          >
            <Image
              layout={'fill'}
              alt="preview"
              src="/images/landing/imgSidious5mobile.png"
              blurDataURL="/images/landing/sidious/imgSidious5mobile.png"
              placeholder="blur"
              loading="lazy"
            />
          </div>

          <BaseTitle className={styles.HowItWorksBlockSubtitle}>
            Fast. Simple. Legal.
          </BaseTitle>
        </div>
      </div>

      <CertificationPopup className="CertificationPopup" />
      {/* если юристидция не обсулживается */}
      <NotAcceptingPopup className="NotAcceptingPopup" />
      {/* дефолтная */}
      <CorporateDocumentsPopup className="CorporateDocumentsPopup" />
      {/* success */}
      <RequestSuccessPopup className="RequestSuccessPopup" />
    </>
  );
};

export default Sidious;
