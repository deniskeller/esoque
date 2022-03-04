import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Latvia: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Latvia
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.SubtitleList}>
          To register a limited liability company (LLC) in Latvia, you must
          submit the following documents and provide the following information:
        </p>

        <ul className={styles.List}>
          <li className={styles.ListLi}>
            Individuals - name, surname, personal code, residential address;{' '}
          </li>
          <li className={styles.ListLi}>
            Information about the founders:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Individuals - name, surname, personal code, residential address;
              </li>
              <li className={styles.SublistLi}>
                For legal entities - name, registration number, address,
                authority of the person representing him, his name, surname,
                personal code, representative address, his position;
              </li>
              <li className={styles.SublistLi}>
                All constituent documents must be translated into Latvian and
                notarized.
              </li>
            </ul>
          </li>
          <li className={styles.ListLi}>
            The legal address of future company. This may be the home or legal
            address from any of the founders or the office address that the
            company plans to rent or use, because mail will be sent to this
            address.
          </li>
          <li className={styles.ListLi}>
            Preferred bank in Latvia to open a temporary account for crediting
            authorized capital and the subsequent work of the company.
          </li>
          <li className={styles.ListLi}>
            Distribution of shares between the founders (in percent or amount),
            the total number of shares, the nominal value of one share.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Latvia;
