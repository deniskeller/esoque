import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Dominica: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Dominica
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.Paragraph}>Time of registration: 3 weeks.</p>

        <p className={styles.Paragraph}>
          Reporting and taxation - unaccountable jurisdiction. <br />
          The main type of company for conducting international trade and
          investment activities is the International Business Company
          (International Business Company, hereinafter referred to as “IBC").
        </p>

        <h2 className={styles.Subtitle}>IBC doesn’t have the right to:</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            Conduct business with residents of Dominica.
          </li>
          <li className={styles.ListLi}>
            Own a property or shares in Dominica, except for property as office.
          </li>
          <li className={styles.ListLi}>
            Operate as a bank, trust, insurance or reinsurance company without
            obtaining the appropriate license provided by law.
          </li>
        </ol>

        <p className={styles.Paragraph}>
          All Dominican companies are released from tax exemption for at least
          20 years. This means that all income earned by IBC is exempt from
          taxation in Dominica. This also includes all dividends, interest,
          rent, royalties, capital gains realized in respect of any share, debt
          obligations and other securities as well as other payments in favor of
          the company. Every commercial company must have a registered office
          and registered agent in Dominica. Companies are usually registered
          with a share capital of USD 10,000 divided into 1,000 shares worth USD
          10.00 each. <br /> IBC must not submit any financial statements or tax
          returns in Dominica. However, the company must maintain financial
          statements reflecting the financial position of company, it can store
          its statements in any form, any part of the world. <br /> All IBCs
          registered in Dominica must pay a government fee annually by the date
          when company is registered. The amount of duty for authorized capital
          not exceeding USD 10,000 will be USD 150. In case of late payment of
          the fee, penalties up to 50% of the original duty are charged.
        </p>

        <h2 className={styles.Subtitle}>
          Documents issued after registration (package of documents)
        </h2>

        <p className={styles.SubtitleList}>
          Package of constituent documents under the Apostille:
        </p>

        <ol className={styles.List}>
          <li className={styles.ListLi}>Certificate of Incorporation.</li>
          <li className={styles.ListLi}>
            Resolution of First Director - Appointment of first Director.
          </li>
          <li className={styles.ListLi}>
            Memorandum & Article of Association.
          </li>
        </ol>

        <p className={styles.SubtitleList}>Package of nominal documents:</p>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            General Power of Attorney (with Apostille).
          </li>
          <li className={styles.ListLi}>Special Power of Attorney.</li>
          <li className={styles.ListLi}>
            Letter Resignation of nominee Director.
          </li>
          <li className={styles.ListLi}>
            Resolution of the Director issuing shares.
          </li>
          <li className={styles.ListLi}>Declaration of Non-trading.</li>
          <li className={styles.ListLi}>Declaration of interest’s transfer.</li>
          <li className={styles.ListLi}>Share certificate.</li>
        </ol>
      </div>
    </>
  );
};

export default Dominica;
