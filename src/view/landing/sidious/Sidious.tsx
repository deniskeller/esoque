import React from 'react';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import styles from './Sidious.module.scss';
import Image from 'next/image';
import { ImprovingItem } from '@content/index';

interface Props {}

const improvingData = [
  {
    image: 'iconSidiousManOfficeWorker',
    dataList: [
      'Corporate Lawyers',
      'Real Estate Agents',
      'Real Estate Lawyers',
      'Divorce / Inheritance Lawyers',
    ],
  },
  {
    image: 'iconSidiousBank',
    dataList: [
      'Compliance / Onboarding Specialists',
      'Electronic Money Institutionss',
      'Banks',
      'Other Regulated Entitie',
    ],
  },
  {
    image: 'iconSidiousShoppingCart',
    dataList: [
      'Logistics Platforms',
      'Market Places',
      'Registered Agents',
      'Co-Working',
    ],
  },
  {
    image: 'iconSidiousDollarBanknote',
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
          <ul className={styles.WelcomeBlockUl}>
            <li className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                With us now you have access to corporate information and
                official company documents in almost all countries in the world.
              </BaseText>
            </li>
            <li className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                Information is based only on official / Government sources and
                can be utilized for KYC/KYB purposes.
              </BaseText>
            </li>
            <li className={styles.WelcomeBlockLi}>
              <BaseText
                className={`${styles.WelcomeBlockText} ${styles.GreenTExt}`}
              >
                Information is based only on official / Government sources and
                can be utilized for KYC/KYB purposes.
              </BaseText>
            </li>
          </ul>
          <div className={styles.WelcomeBlockImage}>
            <Image
              src='/images/landing/imgSidious1.png'
              layout={'fill'}
              alt={''}
            />
          </div>

          <div className={styles.AboutIcon}>
            <div className={styles.AboutIconCircleDown}>
              <Image
                src='/images/landing/iconEsoqueArrowDown.png'
                layout={'fill'}
                alt={''}
              />
            </div>
          </div>
        </div>
      </BaseContainer>

      <div className={styles.WidgetBlockContainer}>
        <BaseContainer>
          <div className={styles.Widget}>
            <Image
              src='/images/landing/imgSidious2.png'
              layout={'fill'}
              alt={''}
            />
          </div>
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
              src='/images/landing/imgSidious3.png'
              layout={'fill'}
              alt={''}
            />
          </div>
        </div>
      </BaseContainer>

      <div className={styles.PlatformBenefitsBlockContainer}>
        <BaseContainer>
          <div className={styles.PlatformBenefitsBlock}>
            <BaseTitle className={styles.PlatformBenefitsBlockTitle}>
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
                  src='/images/landing/imgSidious4.png'
                  layout={'fill'}
                  alt={''}
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>

      <BaseContainer>
        <div className={styles.ImprovingBlock}>
          <BaseTitle className={styles.ImprovingBlockTitle}>
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
          <BaseTitle className={styles.HowItWorksBlockTitle}>
            How it works
          </BaseTitle>

          <div className={styles.HowItWorksBlockImage}>
            <Image
              src='/images/landing/imgSidious5.png'
              layout={'fill'}
              alt={''}
            />
          </div>

          <BaseTitle className={styles.HowItWorksBlockSubtitle}>
            Fast. Simple. Legal.
          </BaseTitle>
        </div>
      </div>
    </>
  );
};

export default Sidious;
