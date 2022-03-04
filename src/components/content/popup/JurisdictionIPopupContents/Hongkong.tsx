import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Hongkong: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Hongkong
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.Paragraph}>
          When buying Hong Kong companies it is important to know that Hong Kong
          is not an offshore jurisdiction (standard income tax rate is 16.5%),
          however, unlike most jurisdictions, taxation occurs according to the
          territorial principle - the company income derived from sources in
          Hong Kong is taxed.
        </p>
        <p className={styles.Paragraph}>
          Thus, in case if income is received from sources outside of Hong Kong,
          the income tax is 0%.
        </p>
        <p className={styles.Paragraph}>
          Regarding the management of company, it is necessary to know that a
          company can have one director solely individual resident of any
          jurisdiction. Having local secretary is a mandatory. <br />
          Concerning shareholders, there must be at least one shareholder-
          physical or legal person resident of any country. Annual Reporting-
          Annual submission of the consolidated financial statement + audit is
          required.
        </p>

        <h2 className={styles.Subtitle}>Registration Procedure:</h2>

        <p className={styles.SubtitleList}>
          The company name must end with word Limited (the abbreviation Ltd is
          not accepted). Registration deadlines take about 40 business days.{' '}
          <br /> In order to register company:
        </p>

        <ol className={styles.List}>
          <li className={styles.ListLi}>Desired name;</li>
          <li className={styles.ListLi}>
            To Beneficiary:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>Copy of Passport</li>
              <li className={styles.SublistLi}>
                Utility bill (proof of bill for utilities).
              </li>
            </ul>
          </li>
          <li className={styles.ListLi}>
            To Shareholder:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Scans of main registration documents
              </li>
              <li className={styles.SublistLi}>Copy of Passport</li>
              <li className={styles.SublistLi}>
                Utility bill (proof of bill for utilities)
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Hongkong;
