import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const UnitedKingdom: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        United Kingdom
      </BaseTitle>

      <div className={styles.Content}>
        <h2 className={styles.Subtitle}>Company Structure</h2>

        <p className={styles.Paragraph}>
          Address of Registration: The company must have a registered address in
          the UK.
        </p>

        <p className={styles.Paragraph}>
          The company is managed with the help of a director.
        </p>
        <p className={styles.Paragraph}>
          Secretary: The secretary performs only administrative tasks- receiving
          and sending documents respectively. Secretary is not a representative
          of the company to communicate with the tax administration (NOT tax
          advisor, NOT tax agent).
        </p>
        <p className={styles.SubtitleList}>
          Company capital (value, type of shares):
        </p>
        <ol className={styles.List}>
          <li className={styles.ListLi}>The minimum capital is 1 pound</li>
          <li className={styles.ListLi}>
            All registered (issued capital) must be distributed
          </li>
          <li className={styles.ListLi}>
            A share certificate is issued only on paid-up capital
          </li>
        </ol>
        <p className={styles.Paragraph}>
          Shareholders: As part of the company&#39;s shareholders, it is
          necessary to have at least one individual.
        </p>

        <h2 className={styles.Subtitle}>Taxation</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            General Rules (Tax Residency, Base and Rates):
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                In the standard case, the companies registered are not UK
                residents, but all companies have a tax number
              </li>
              <li className={styles.SublistLi}>
                The company is considered a tax resident of the United Kingdom
                when company is registered in the UK and / or the company&#39;s
                headquarters is located in the country. In case of disputable
                issues, when the center of a foreign company is located in the
                UK, it is necessary to consider the situation according to the
                rules of the convention between specific countries.
              </li>
              <li className={styles.SublistLi}>
                The global income of a resident company is subject to taxation,
                taking into account the use of taxes paid outside the UK to
                reduce payable tax.
              </li>
              <li className={styles.SublistLi}>
                The rate on the profit of the enterprise depends on the size of
                the taxable profit. In cases where taxable income: <br />
                -is less than 300,000 pounds, then the rate of 20% is applicable
                to the taxable profit of the enterprise, <br />
                -with taxable profits between 300’000 and 1’500’000 pounds-
                progressive rate of 20 to 24% is applied., <br />
                -taxable profits in the amount of 1,500,000 pounds, apply a rate
                of 24%.
              </li>
            </ul>
          </li>

          <li className={styles.ListLi}>
            Tax Exemption <br />
            This type of company is exempted from paying capital gains tax
          </li>

          <li className={styles.ListLi}>
            Tax Sources
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Dividends - dividend distribution is not subject to withholding
                tax paid by a UK company. A 20% withholding tax is applicable to
                dividends paid by companies such as Real Estate Investment
                Trust.
              </li>
              <li className={styles.SublistLi}>
                Interest Payments- interest payments to non-residents of the UK
                are withheld from the 20% source. (2012). This rate can be
                reduced (by a separate request to the tax office) by the EU
                directive on parent and subsidiary companies or under an
                international convention, however, since the companies are
                non-resident, they cannot use international conventions to
                reduce the tax on the source.
              </li>
              <li className={styles.SublistLi}>
                Reward of owning or utilizing intellectual property- Withholding
                tax of 20% applies when paid to non-residents. This rate may be
                reduced or income may be exempt from withholding tax in
                accordance with the EU directive on interest payments and
                remuneration from the ownership and use of intellectual
                property.
              </li>
            </ul>
          </li>
        </ol>

        <h2 className={styles.Subtitle}>Annual Reports</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            Terms of annual maintenance, duties and fines
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Company jurisdiction must be renewed by the date of registration
                anniversary, but no later than 20 days after the anniversary of
                registration.
              </li>
              <li className={styles.SublistLi}>
                English companies are required to submit annual reports within
                nine months after the end of the financial period (the end of
                the financial period is considered the last calendar day of the
                company&#39;s month of registration).
              </li>
            </ul>
          </li>

          <li className={styles.ListLi}>
            Submission deadlines, periods and penalties <br />
            British company is required to submit a tax report within 12 months
            after the end of the company&#39;s tax period.
          </li>

          <li className={styles.ListLi}>
            Tax Payments <br />
            Corporate Income Tax must be paid within 9 months and one day after
            the end of the tax period.
          </li>

          <li className={styles.ListLi}>
            Additional reporting liabilities (tax audit) <br />
            Financial statements of audit are obligatory only if the following
            criteria are met:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Annual turnover is more than 6,5 million pounds
              </li>
              <li className={styles.SublistLi}>
                Balance amount reaches 3.26 million pounds.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
};

export default UnitedKingdom;
