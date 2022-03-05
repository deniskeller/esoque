import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Scotland: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Scotland
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.Paragraph}>
          Term of company registration: 26-28 days
        </p>

        <p className={styles.Paragraph}>
          Usually companies registered in Scotland are non-residents of the UK,
          thus obtaining VAT number in this jurisdiction, generally, is
          impossible. Partnership type of company is exempt by paying taxes from
          profits of the enterprise when profits are received outside UK.
          Additionally, Scotland’s jurisdiction is exempt from filing reports
          and auditing.
        </p>

        <p className={styles.SubtitleList}>
          Partners (members) of companies are unequal:
        </p>
        <ol className={styles.List}>
          <li className={styles.ListLi}>General Partner (general partner)</li>
          <li className={styles.ListLi}>
            Limited Partner (partner whose statutes are limited by statute)
          </li>
        </ol>

        <p className={styles.Paragraph}>
          Partnership (LP) has no share capital and partners must contribute
          initial capital of 2 GBP. Partnership’s property is distributed in the
          ratio established by Partnership Agreement and fixed by Certificate of
          Ownership.
        </p>

        <p className={styles.Paragraph}>
          There are no minimal capital requirements and It is possible to
          register a company with both nominee shareholders and unique client
          shareholders.
        </p>
      </div>
    </>
  );
};

export default Scotland;
