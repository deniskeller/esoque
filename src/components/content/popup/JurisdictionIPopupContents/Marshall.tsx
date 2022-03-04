import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Marshall: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Marshall Islands
      </BaseTitle>

      <div className={styles.Content}>
        <h2 className={styles.Subtitle}>Company Structure:</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            Registered address and Regent are located on the Marshall Islands.
          </li>
          <li className={styles.ListLi}>
            The company must have at least one secretary.
          </li>
          <li className={styles.ListLi}>
            Our companies are registered with a capital of USD 50,000 $, divided
            into 50,000 shares worth US $ 1.00 each.
          </li>
          <li className={styles.ListLi}>
            The capital of company can be increased or decreased by the request
            of client.
          </li>
          <li className={styles.ListLi}>
            Shares can be issued by par value or no-par value.
          </li>
          <li className={styles.ListLi}>
            Shares issued by par value can be denominated in any currency.
          </li>
          <li className={styles.ListLi}>
            When registering a company with a capital above 500 no par value or
            higher than 50,000 USD par value, capitalization tax must be paid.
          </li>
          <li className={styles.ListLi}>
            Shareholders may be individuals or legal entities of any residence.
          </li>
          <li className={styles.ListLi}>
            It is possible to register a company with bearer shares.
          </li>
          <li className={styles.ListLi}>
            Registration time requires 12 business days.
          </li>
        </ol>

        <h2 className={styles.Subtitle}>Company purchase includes:</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>Payment of the annual state duty. </li>
          <li className={styles.ListLi}>
            Payment for services of a registered agent.
          </li>
          <li className={styles.ListLi}>Payment for legal address.</li>
          <li className={styles.ListLi}>Payment of nominal service.</li>
          <li className={styles.ListLi}>
            Release of a general power of attorney (without Apostille).
          </li>
          <li className={styles.ListLi}>
            Apostilled power of attorney is ordered and paid separately.
          </li>
        </ol>

        <h2 className={styles.Subtitle}>Reporting and Taxation:</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            IBC companies are not taxable in the Marshall Islands.
          </li>
          <li className={styles.ListLi}>
            IBC companies do not have to file annual reports in the Marshall
            Islands.
          </li>
          <li className={styles.ListLi}>
            Additional reporting liabilities (tax audit): none.
          </li>
        </ol>
      </div>
    </>
  );
};

export default Marshall;
