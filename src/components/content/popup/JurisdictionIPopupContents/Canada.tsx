import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Canada: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Canada
      </BaseTitle>

      <div className={styles.Content}>
        <h2 className={styles.Subtitle}>
          Canada EPC: extra-provincial company
        </h2>

        <p className={styles.Paragraph}>
          Canada is not considered an off-shore jurisdiction, subject to
          taxation is the entire global profit of the company. If the company
          doesn’t operate in Canada, it’s not a tax resident, therefore none of
          the taxes are applied. The reputation of Canada as a fairly
          transparent jurisdiction in terms of tax authorities and public
          authorities creates extra-provincial company an attractive tool for
          international tax planning.
        </p>

        <h2 className={styles.Subtitle}>Company structure:</h2>

        <ul className={styles.List}>
          <li className={styles.ListLi}>
            The company does not have the status of separate legal entity, thus
            structure simultaneously consists of two corporate entities: a low
            tax jurisdiction company and its corporate entity in Canada. After
            the termination of company's existence in a low tax jurisdiction,
            the Canadian company ceases to exist.
          </li>
          <li className={styles.ListLi}>
            The Canadian company doesn’t have a separate share capital. It forms
            the authorized capital from company of low tax jurisdiction.
          </li>
          <li className={styles.ListLi}>
            The registered address is in Canada and it is not a compulsory to
            have a real presence at the registration address, for instance,
            employee, telephone.
          </li>
          <li className={styles.ListLi}>
            The director of the company is a non-resident of Canada
          </li>
          <li className={styles.ListLi}>
            Attorney for services - due to the fact that director of the company
            is a non-resident of Canada, company is obliged to have its
            representative - a resident of Canada, providing communication with
            government agencies.
          </li>
        </ul>

        <h2 className={styles.Subtitle}>Taxation and reporting</h2>

        <p className={styles.Paragraph}>
          Canadian extra-provincial company is not subject to taxation in Canada
          if the sources of income are outside the country. The company does not
          have to submit an annual report to the register. In order to confirm
          the absence of company income from sources in Canada, company must
          file a tax report where period is a calendar year. Submission
          deadline- June 30th.
        </p>
      </div>
    </>
  );
};

export default Canada;
