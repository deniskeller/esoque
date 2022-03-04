import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Cyprus: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Cyprus
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.Paragraph}>
          Cyprus is not an offshore jurisdiction. At the same time, Cyprus
          maintains one of the lowest general rates of income tax in Europe. In
          combination with various tax benefits for holding companies, this
          makes this jurisdiction attractive for any kind of activity: both
          holding and trading. Since the company is a tax resident in Cyprus, it
          can take advantage of double tax treaties.
        </p>
        <p className={styles.Paragraph}>
          Registration time requires 6-7 weeks. Cyprus company after
          registration by default is considered a resident. However, the basic
          rule for determining residence for a Cyprus company is the place of
          management and control of the company. Resident companies are required
          to pay tax on the taxable profits of enterprise and the defense fee
          when it arises. In cases where a Cypriot company wants to become
          non-resident, it is obliged to prescribe this in preparation of the
          annual financial statements. The profit tax of enterprise is 12.5% on
          the income that company receives from main activity. Income derived
          from a non-core business is subject to a defense fee of 15% to 30%.
          From January 13, 2014, in accordance with Law 167 (1) of 2012,
          supplementing the VAT law of 2000(4) of 2012, the VAT rate of 18%
          increases to 19%, and the VAT rate of 8% increases to 9%.
        </p>
        <p className={styles.Paragraph}>
          Dividends received from a non-resident subsidiary are currently
          exempted from paying a defense fee of 20%, provided that the tax rate
          on the company's profits in the subsidiary’s jurisdiction is at least
          5%, no more than 50% of the subsidiary’s activity is investment.
          Withholding tax is 0%. Regarding the structure of the company it must
          have a registered address in Cyprus, moreover, the company may have
          one or more directors - individuals and / or legal entities resident
          in any jurisdiction. Having one secretary is a necessary – a physical
          or legal resident in any jurisdiction. Regarding equity, we register
          companies with a capital of EUR 1,000.00 divided into 1,000 common
          shares of EUR 1.00 each. It is important to emphasize that capital can
          be increased in the course of the company. Type of shares - only
          registered. In addition, the company may have one or more shareholders
          - individuals and / or legal entities, residents of any jurisdiction.
        </p>
        <p className={styles.Paragraph}>
          The period of financial statements is calendar year 01/01-31/12,
          however financial statements must be submitted by December 31 of the
          following year. The same period for tax reporting, although it must be
          submitted within 15 months after the end of the financial period.
        </p>
      </div>
    </>
  );
};

export default Cyprus;
