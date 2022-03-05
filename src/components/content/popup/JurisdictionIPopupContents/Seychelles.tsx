import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Seychelles: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Seychelles
      </BaseTitle>

      <div className={styles.Content}>
        <h2 className={styles.Subtitle}>Company Structure</h2>

        <p className={styles.Paragraph}>
          International Business Company - IBC, regulated by the International
          Business Company Act, due to different jurisdictions it is not meant
          for domestic market operations, but rather outside the jurisdiction
          where they are registered. <br /> Registered company address must be
          located at Seychelles
        </p>

        <h2 className={styles.Subtitle}>Management of company</h2>

        <p className={styles.Paragraph}>
          The director may be a physical or legal person resident of any
          jurisdiction. <br /> Company Capital (Size, type of shares) <br /> We
          register companies with a capital of 50,000 $ divided into 50,000
          shares of US $ 1.00 each.
        </p>

        <h2 className={styles.Subtitle}>Shareholders</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>Physical or legal person.</li>
          <li className={styles.ListLi}>Bearer shares can be issued.</li>
        </ol>

        <h2 className={styles.Subtitle}>
          Documents issued after registration (package of documents)
        </h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            Package of constituent documents under the Apostille:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Certificate of Incorporation, Certificate of Good Standing.{' '}
              </li>
              <li className={styles.SublistLi}>
                Resolution of Subscriber- Appointment of first Director
              </li>
              <li className={styles.SublistLi}>
                Memorandum & Article of Association (Articles of
                Incorporation/Public Deed).{' '}
              </li>
              <li className={styles.SublistLi}>Certificate of Collation</li>
            </ul>
          </li>

          <li className={styles.ListLi}>
            Package of nominal documents:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Consent to Act as Nominee Director.{' '}
              </li>
              <li className={styles.SublistLi}>
                Resolution of Director - appointing a representative.{' '}
              </li>
              <li className={styles.SublistLi}>
                Power of Attorney (with apostille).
              </li>
              <li className={styles.SublistLi}>Special power of attorney. </li>
              <li className={styles.SublistLi}>
                Letter Resignation of nominee Director.
              </li>
              <li className={styles.SublistLi}>
                Resolution of the Director issuing shares.
              </li>
              <li className={styles.SublistLi}>Declaration of Non-trading.</li>
              <li className={styles.SublistLi}>
                Declaration of interest’s transfer.
              </li>
              <li className={styles.SublistLi}>Share certificate.</li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Seychelles;
