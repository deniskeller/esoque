import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Singapore: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Singapore
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.Paragraph}>
          Below are described information on the jurisdiction of Singapore.
        </p>

        <p className={styles.Paragraph}>
          The company must have a registered address in Singapore. Additionally,
          Singapore companies for tax purposes are organized as resident and
          non-resident companies. Tax residence is determined by the location of
          the board of directors and the effective management of the company. A
          resident company requires at least one resident director in accordance
          with Singapore law; To obtain non-resident status, it is necessary
          that the majority of the board of directors are located outside of
          Singapore. The main difference between these two types of companies is
          that a non-resident company cannot enjoy the benefits of double tax
          agreements. <br />
          Regarding taxation, it takes place according to the territorial
          principle - a tax is levied on the income of a company derived from
          sources in Singapore, which actually depends on whether activities are
          carried out to obtain / extract a specific income in the territory of
          Singapore. It is important to note that the company is considered a
          tax resident of Singapore, provided that the company's center of
          control and management is located on the territory of Singapore
          (Directors are meeting in the country). <br />
          In relation to withholding tax, dividends which were received by a
          Singapore resident company from a foreign company are exempt from
          withholding tax, provided that the recipient company is a tax resident
          of Singapore, and the total income tax rate of the payer’s
          jurisdiction is at least 15%. Dividends paid from by Singapore’s
          resident company to a foreign company are exempt from withholding tax.
        </p>

        <p className={styles.SubtitleList}>
          List of documents to be received from a client.
        </p>

        <ol className={styles.List}>
          <li className={styles.ListLi}>Passport (In English);</li>
          <li className={styles.ListLi}>
            Utility bill (where the beneficiary's address is visible, in
            English);
          </li>
          <li className={styles.ListLi}>Our trust agreements signed.</li>
        </ol>
      </div>
    </>
  );
};

export default Singapore;
