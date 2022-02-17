import React, { useState } from 'react';
import { BaseButton, BaseContainer, BaseText, BaseTitle } from '@base/index';
import Image from 'next/image';
import styles from './Esoque.module.scss';

interface Props {}

const Esoque: React.FC<Props> = () => {
  const [moreInfo, setMoreInfo] = useState(false);

  const moreInfoHandler = () => {
    setMoreInfo(true);
  };

  return (
    <>
      <BaseContainer>
        <div className={styles.WelcomeBlock}>
          <BaseTitle className={styles.WelcomeBlockTitle}>Esoque</BaseTitle>
          <div className={styles.WelcomeBlockUl}>
            <div className={styles.WelcomeBlockImage}>
              <Image
                layout={'fill'}
                alt={'Esocue image'}
                priority={true}
                src='/images/landing/imgEsoque.png'
              />
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                Esoque is an investment company operating in the United States,
                Canada, the United Kingdom, New Zealand and Australia.
              </BaseText>
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                The headquarter of the company is located in New York,
                Manhattan.
              </BaseText>
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                By offering the regulatory service we can provide advice about
                license achievement in any country that is listed on our
                licensing page, we can also provide professional compliance
                advice and help you to structure your financial business in the
                right way.
              </BaseText>
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                Our company is managed by professional management with extensive
                knowledge and experience in the fields of compliance,
                international law, finance, accounting, safeguarding,
                regulatory, insurance and law enforcement authorities.
              </BaseText>
            </div>
            <div className={styles.WelcomeBlockLi}>
              <BaseText className={styles.WelcomeBlockText}>
                For the decade we have been working with wealthy families all
                around the world and helping them to build an international
                business. The companies that we were working with became
                international acquirers, financial institutions or were
                successfully acquired. We got such achievements as the British
                Award with the nomination as the 5 Best UK Fintech startups, our
                Chief Executive Officer was interviewed by Forbes and our
                business got multi-million valuations from the Big 4.
              </BaseText>
            </div>
          </div>
        </div>
      </BaseContainer>

      <div className={styles.AboutContainer}>
        <BaseContainer>
          <div className={styles.About}>
            <div className={styles.AboutImage}>
              <Image
                src='/images/landing/imgEsoque2.png'
                layout={'fill'}
                alt={'Esocue image'}
              />
            </div>
            <BaseTitle className={styles.AboutTitle}>
              Welcome to Esoque - the freedom to be wealthy in the modern
              fintech world.
            </BaseTitle>

            <div className={styles.AboutSubtitle}>
              <p>
                we will not say who we are, we prefer that our customers would
                tell about us instead.
              </p>
            </div>

            <div className={styles.AboutIcon}>
              <div className={styles.AboutIconCircleDown}>
                <Image
                  src='/images/landing/iconEsoqueArrowDown.png'
                  layout={'fill'}
                  alt={'Esocue image'}
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>

      <BaseContainer>
        <div className={styles.GraphBlock}>
          <BaseTitle className={styles.GraphBlockTitle}>
            Financial Historical Records
          </BaseTitle>
          <BaseTitle className={styles.GraphBlockSubtitle}>
            Total assets that are managed
          </BaseTitle>
          <div
            className={`${styles.GraphBlockImg} ${styles.GraphBlockImgDesktop}`}
          >
            <Image
              layout={'fill'}
              priority={true}
              alt={'Esocue image'}
              src='/images/landing/imgEsoqueGraph.png'
            />
            {/* {moreInfo && moreInfo ? (
              <Image
                src='/images/landing/imgEsoqueGraph2.png'
                layout={'fill'}
                priority={true}
                alt={'Esocue image'}
              />
            ) : (
              <Image
                src='/images/landing/imgEsoqueGraph.png'
                layout={'fill'}
                priority={true}
                alt={'Esocue image'}
              />
            )} */}
          </div>

          <div
            className={`${styles.GraphBlockImg} ${styles.GraphBlockImgMobile}`}
          >
            <Image
              src='/images/landing/imgEsoqueGraphMobile.png'
              layout={'fill'}
              priority={true}
              alt={'Esocue image'}
            />
            {/* <Image
              src='/images/landing/imgEsoqueGraph2.png'
              layout={'fill'}
              priority={true}
              alt={'Esocue image'}
            /> */}
          </div>

          {/* <div className={styles.GraphBlockGraph}>
            <div className={styles.Graph}></div>
          </div> */}
          {moreInfo && moreInfo ? (
            ''
          ) : (
            <BaseButton
              className={styles.GraphBlockBtn}
              onClick={moreInfoHandler}
            >
              See more
            </BaseButton>
          )}
        </div>
      </BaseContainer>
    </>
  );
};

export default Esoque;
