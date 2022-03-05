import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Georgia: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Georgia
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.SubtitleList}>
          Georgia company registration <br />
          Georgian company LTD for international business:
        </p>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            Registration of a legal entity (LLC)
          </li>
          <li className={styles.ListLi}>
            Obtaining a license from international financial company and tax
            authorities.
          </li>
        </ol>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            Required documents for registration of LLC:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Document which proves the identity of founder: <br />
                If the founder is already a legal entity, its constituent
                documents and decisions are required. In case of foreign
                company, the company's documents must be translated, legalized
                and certified with an apostille.
              </li>
              <li className={styles.SublistLi}>Power of Attorney</li>
              <li className={styles.SublistLi}>
                Consent from owner of real estate or a properly prepared and
                certified contract with the right to use these things. (rent,
                lend, etc.).
              </li>
              <li className={styles.SublistLi}>
                Contract on appointment of an authorized person to management.{' '}
                <br />
                The registration of LLC is carried out in the business register
                for which one must apply to the House of Justice or a public
                register.
              </li>
            </ul>
          </li>

          <li className={styles.ListLi}>
            Required documents for representative office registration in a
            foreign company:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Constitutive documents of the company registration, which is
                registered.
              </li>
              <li className={styles.SublistLi}>
                Certified in accordance with the established procedure,
                legalized or certified by an apostille of the decision (minutes
                of the meeting) of the company whose representative office is
                registered, subsequently translated and notarized.
              </li>
              <li className={styles.SublistLi}>
                Power of attorney legalized and certified with an apostille,
                subsequently translated and notarized.
              </li>
              <li className={styles.SublistLi}>
                The consent of the authorized person from management by being
                appointed to the specified position.
              </li>
            </ul>
          </li>

          <li className={styles.ListLi}>
            To register a representative office in an offshore zone, the same
            documentation and procedures are required as set out in Article 2.
          </li>

          <li className={styles.ListLi}>
            The necessary documents required in order to open bank accounts for
            all 3 mentioned legal entities in Georgia:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>Director’s address;</li>
              <li className={styles.SublistLi}>Constitutive documents;</li>
              <li className={styles.SublistLi}>Extracts.</li>
            </ul>
          </li>

          <li className={styles.ListLi}>
            In order to obtain financial licenses in Georgia: <br />
            Registration of international company and obtaining a corresponding
            license is carried out by the Tax Service.
          </li>
        </ol>

        <p className={styles.SubtitleList}>Documents to be submitted:</p>
        <ol className={styles.List}>
          <li className={styles.ListLi}>Certificate from the National Bank;</li>
          <li className={styles.ListLi}>Extract from the business register;</li>
          <li className={styles.ListLi}>
            Power of Attorney (for office work through a representative office).
          </li>
        </ol>

        <p className={`${styles.Paragraph} ${styles.Italic}`}>Note: Assuming that legal entity contacts relevant authorities within one month to obtain the status of international financial company- it will be assigned in the same year. In case of date expiration this status will be assigned for the next calendar year.
</p>
      </div>
    </>
  );
};

export default Georgia;
