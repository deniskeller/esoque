import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Usa: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Usa
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.Paragraph}>
          In standard cases, we register LLCs company after client’s order, this
          type of partnership consists of two or more members, practically only
          client members are registered (mainly physical, but it is also
          possible to register legal entities). Registration of US companies is
          possible only with client directors. The reason is as follows: several
          years ago, the law changed in States and now it is necessary to submit
          tax reports in a timely manner as well as declare income if it exceeds
          10,000 USD. If the income is not declared - criminal responsibility is
          applied to director.
        </p>
        <p className={styles.Paragraph}>
          According to reporting, there are no requirements for submitting
          financial statements in the US states for LLC forms of companies.
          Although, there is a mandatory requirement for a tax report.
        </p>
        <p className={styles.Paragraph}>
          Contribution of share capital is not required.
        </p>
        <p className={styles.Paragraph}>
          Regarding the registration procedure, the prepared forms of
          registration documents are signed by partners themselves and originals
          are sent to our reg agent after receiving all the requested documents.
          Deadlines for registering the company and receiving first registration
          documents are about 2 weeks.
        </p>
        <p className={styles.Paragraph}>
          Documents under the Apostille don’t need to be legalized any further.
        </p>

        <p className={styles.SubtitleList}>
          For registration you must answer the questions from short profile of a
          company.
        </p>
        <ol className={styles.List}>
          <li className={styles.ListLi}>
            The beneficiary, what jurisdiction, special signs, of a professional
            or a public nature.
          </li>
          <li className={styles.ListLi}>Expected activity. (in detail)</li>
          <li className={styles.ListLi}>
            Company partners. (names and countries)
          </li>
          <li className={styles.ListLi}>Estimated turnover.</li>
        </ol>

        <p className={styles.Paragraph}>
          The prices of registering US companies are listed below (EUR). By
          drawing your attention, the easiest way to register a company is in
          the state of Oregon. Extension cost is the same.
        </p>

        <p className={styles.Paragraph}>
          <span>USA: Delaware</span>1,300.00
          <br />
          <span>USA: Oregon</span>750.00
        </p>

        <p className={styles.Paragraph}>
          From experience, the state of Oregon in terms of registration is the
          fastest, and registration procedure the easiest.
        </p>
      </div>
    </>
  );
};

export default Usa;
