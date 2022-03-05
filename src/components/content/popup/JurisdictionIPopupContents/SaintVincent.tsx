import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const SaintVincent: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Saint Vincent
      </BaseTitle>

      <div className={styles.Content}>
        <h2 className={styles.Subtitle}>Company structure</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            Registration address - The company must have a reagent and address
            in S. Vincent.
          </li>
          <li className={styles.ListLi}>
            Company Management - Company must have at least one director if a
            company has more than one shareholder, it should have at least two
            directors.
          </li>
          <li className={styles.ListLi}>
            Secretary – no requirements for secretary.
          </li>
          <li className={styles.ListLi}>
            Capital of company (value, type of shares) – We register companies
            with a capital of 50,000 $ divided into 50,000 shares at US $ 1.00
            each.
          </li>
          <li className={styles.ListLi}>
            Shareholders – Physical or legal person. It is possible to issue
            bearer shares, which must be kept by the reagent.
          </li>
        </ol>

        <h2 className={styles.Subtitle}>Reporting and taxation</h2>

        <p className={styles.Paragraph}>
          IBC or LLC registered in S. Vincent must provide reg. agent
          declaration that the company at a certain address stores annual
          financial statements and financial documents (books, vouchers,
          invoices, contracts, acts and other documents relating to the
          financial activities of the company and explaining financial
          transactions, documents must be stored for at least 7 years from the
          date release) and, if necessary, these statements can be provided to
          reg. agent on demand FSA (Financial Services Authority). <br />
          The authorities also indicates that the company&#39;s financial period
          does not have to be from January to December, but the deadline for
          submitting declarations is December 31 of each calendar year.
        </p>
      </div>
    </>
  );
};

export default SaintVincent;
