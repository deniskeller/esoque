import React from 'react';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import Image from 'next/image';
import {
  AdvantageItem,
  CountryItem,
  JurisdictionCountryItem,
} from '@content/index';
import styles from './Darkside.module.scss';

interface Props {}

//моковые данные
const advantages = [
  {
    title: 'Save Time',
    subtitle: 'Start your own company lightening quick',
    image: 'iconDarksideHourglassDone.png',
    width: 50,
    height: 50,
  },
  {
    title: 'Save Your Efforts',
    subtitle: 'No more boring paperwork and complex decision making',
    image: 'iconDarksideHighVoltage.png',
    width: 46,
    height: 58,
  },
  {
    title: 'Go Global',
    subtitle: 'Extend and develop your business on an international scale',
    image: 'iconDarksideGlobe.png',
    width: 46,
    height: 46,
  },
  // {
  //   title: 'Go Global',
  //   subtitle: 'Extend and develop your business on an international scale',
  //   image: 'iconDarksideGlobe.png',
  //   width: 46,
  //   height: 46,
  // },
  // {
  //   title: 'Go Global',
  //   subtitle: 'Extend and develop your business on an international scale',
  //   image: 'iconDarksideGlobe.png',
  //   width: 46,
  //   height: 46,
  // },
];

const jurisdictions = [
  {
    id: 1,
    title: 'London',
    subtitle: 'London [United Kingdom] - 550 EUR',
    image: 'imgDarksideLondon',
  },
  {
    id: 2,
    title: 'Hong kong',
    subtitle: 'Hong Kong [China] - 2100 EUR',
    image: 'imgDarksideHongkong',
  },
  // {
  //   id: 3,
  //   title: 'Hong kong',
  //   subtitle: 'Hong Kong [China] - 2100 EUR',
  //   image: 'imgDarksideHongkong',
  // },
];

const sequencing = [
  {
    title: 'Naming',
    subtitle: 'Create or choose a ready-made company',
    image: 'iconDarksideLightBulb.png',
    width: 51,
    height: 51,
  },
  {
    title: 'Processing',
    subtitle: 'Submit your digital application and payment',
    image: 'iconDarksideCreditCard.png',
    width: 51,
    height: 51,
  },
  {
    title: 'Confirmation',
    subtitle: 'Sign the documents and start doing business',
    image: 'iconDarksideClinkingGlasses.png',
    width: 51,
    height: 51,
  },
];

const countryItems = [
  { id: 1, title: 'SCOTLAND', image: 'flag-scotland.png' },
  { id: 2, title: 'IRELAND', image: 'flag-ireland.png' },
  { id: 3, title: 'CANADA', image: 'flag-canada.png' },
  { id: 4, title: 'CYPRUS', image: 'flag-cyprus.png' },
  { id: 5, title: 'LATVIA', image: 'flag-latvia.png' },
  { id: 6, title: 'ESTONIA', image: 'flag-estonia.png' },
  { id: 7, title: 'LITHUANIA', image: 'flag-lithuania.png' },
  { id: 8, title: 'SWEDEN', image: 'flag-sweden.png' },
  { id: 9, title: 'LIECHTENSTEIN', image: 'flag-liechtenstein.png' },
  { id: 10, title: 'LUXEMBOURG', image: 'flag-luxembourg.png' },
  { id: 11, title: 'NETHERLANDS', image: 'flag-netherlands.png' },
  { id: 12, title: 'SWITZERLAND', image: 'flag-switzerland.png' },
  { id: 13, title: 'SINGAPORE', image: 'flag-singapore.png' },
  { id: 14, title: 'HONG KONG', image: 'flag-hong-kong.png' },
  { id: 15, title: 'HUNGARY', image: 'flag-hungary.png' },
  {
    id: 16,
    title: 'SAINT VINCENT & THE GRENADINES',
    image: 'flag-st-vincent-grenadines.png',
  },
  { id: 17, title: 'DOMINICA', image: 'flag-dominica.png' },
  { id: 18, title: 'MARSHALL ISLANDS', image: 'flag-marshall-islands.png' },
  { id: 19, title: 'SEYCHELLES', image: 'flag-seychelles.png' },
  { id: 20, title: 'UNITED KINGDOM', image: 'flag-united-kingdom.png' },
  { id: 21, title: 'CURACAO', image: 'flag-curacao.png' },
  { id: 22, title: 'MALTA', image: 'flag-malta.png' },
  { id: 23, title: 'ALDERNEY', image: 'flag-alderney.png' },
  { id: 24, title: 'JERSEY', image: 'flag-jersey.png' },
  { id: 25, title: 'GIBRALTAR', image: 'flag-gibraltar.png' },
  { id: 26, title: 'USA', image: 'flag-united-states.png' },
];

const Darkside: React.FC<Props> = () => {
  return (
    <>
      <BaseContainer>
        <div className={styles.WelcomeBlock}>
          <BaseTitle className={styles.WelcomeBlockTitle}>Dark Side</BaseTitle>
          <ul className={styles.WelcomeBlockUl}>
            <li className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                Welcome to the Dark Side, we have cookies and more! If you are a
                FinTech firm, one of the first questions that you may have
                before starting the business, is what jurisdiction to choose?
                Right?
              </BaseText>
            </li>
            <li className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                For decades we were developing our skills and now we can offer
                you the fully automated online solution to establish a company
                in minutes!
              </BaseText>
            </li>
          </ul>
          <div className={styles.WelcomeBlockImage}>
            <Image
              src='/images/landing/imgDarksidePlanet.png'
              layout={'fill'}
              alt={'Unicorn image'}
            />
          </div>
        </div>

        <div className={styles.WidgetBlock}>
          <div className={styles.WidgetBlockImage}>
            <Image
              src='/images/landing/imgDarksideCompass.png'
              layout={'fill'}
              alt={'Unicorn image'}
            />
          </div>
          <BaseTitle className={styles.WidgetBlockTitle}>
            Create and set up your company within few days with Esoque Compass
          </BaseTitle>

          <div className={styles.WidgetBlockWidget}>
            {/* тут должен быть виджет */}
            <BaseTitle>тут должен быть виджет</BaseTitle>
          </div>

          <div className={styles.WidgetBlockAdvantages}>
            {advantages &&
              advantages.map((item, index) => {
                return (
                  <AdvantageItem
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    width={item.width}
                    height={item.height}
                    key={index}
                    className={styles.WidgetBlockAdvantagesItem}
                  />
                );
              })}
          </div>
        </div>
      </BaseContainer>

      <div className={styles.JurisdictionsBlock}>
        <BaseContainer>
          <BaseTitle className={styles.WelcomeBlockTitle}>
            Popular Jurisdictions
          </BaseTitle>
        </BaseContainer>

        <div className={styles.JurisdictionsBlockCountry}>
          {jurisdictions &&
            jurisdictions.map((item) => {
              return (
                <JurisdictionCountryItem
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  key={item.id}
                />
              );
            })}
        </div>

        <BaseContainer>
          <BaseTitle className={styles.HowItWorksTitle}>How it works</BaseTitle>

          <div className={styles.HowItWorksItems}>
            {sequencing &&
              sequencing.map((item, index) => {
                return (
                  <AdvantageItem
                    backgroundType='light'
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    width={item.width}
                    height={item.height}
                    key={index}
                    className={styles.HowItWorksItem}
                  />
                );
              })}
          </div>
        </BaseContainer>
      </div>

      <BaseContainer>
        <div className={styles.JurisdictionsCountryBlock}>
          <BaseTitle className={styles.JurisdictionsCountryBlockTitle}>
            Esoque offers company formation services for start-up companies and
            existing holdings in the following jurisdictions:
          </BaseTitle>

          <div className={styles.JurisdictionsCountryItems}>
            {countryItems &&
              countryItems.map((item) => {
                return (
                  <CountryItem
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    key={item.id}
                  />
                );
              })}
          </div>
        </div>
      </BaseContainer>

      <div className={styles.SomeBlockContainer}>
        <BaseContainer>
          <div className={styles.SomeBlock}>
            <div className={styles.SomeBlockMore}>
              <div className={styles.SomeBlockMoreItem}>
                <div className={styles.WelcomeBlockImage}>
                  <Image
                    src='/images/landing/iconDarksideFaceWithRollingEyes.png'
                    layout={'fill'}
                    alt={''}
                  />
                </div>
                <p>
                  We know that starting your own business can be quite a
                  devastating experience
                </p>
              </div>

              <div className={styles.SomeBlockMoreItem}>
                <div className={styles.WelcomeBlockImage}>
                  <Image
                    src='/images/landing/iconDarksideExplodingHead.png'
                    layout={'fill'}
                    alt={''}
                  />
                </div>
                <p>
                  Most of us are unaware of all the underlying complexities and
                  simply don’t know where to begin
                </p>
              </div>
            </div>

            <div className={styles.SomeBlockSolo}>
              <div className={styles.SomeBlockSoloItem}>
                <div className={styles.WelcomeBlockImage}>
                  <Image
                    src='/images/landing/iconDarksideCompass.png'
                    layout={'fill'}
                    alt={''}
                  />
                </div>
                <p className={styles.Pink}>
                  This is why we have built Esoque Compass. A simple tool
                  designed to start your own company effortlessly.
                </p>
              </div>
            </div>

            <div className={styles.SomeBlockMore}>
              <div className={styles.SomeBlockMoreItem}>
                <p className={styles.Small}>
                  Stripping you off from boring paperwork and complex desicions
                  - we strive to help you focus on what is truly important for
                  your business.
                </p>
              </div>

              <div className={styles.SomeBlockMoreItem}>
                <p className={styles.Small}>
                  With that in mind we have dedicated our efforts to make your
                  company purchasing decisions as simple and straightforward as
                  possible.
                </p>
              </div>
            </div>

            <div className={styles.SomeBlockSolo}>
              <div className={styles.SomeBlockSoloItem}>
                <div className={styles.WelcomeBlockImage}>
                  <Image
                    src='/images/landing/iconDarksideSmilingFaceWithHeartEyes.png'
                    layout={'fill'}
                    alt={''}
                  />
                </div>
                <p>
                  Just choose your desired jurisdiction, company name and we
                  will help you handle the rest.
                </p>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Darkside;
