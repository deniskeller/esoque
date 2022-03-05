import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Netherlands: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Netherlands
      </BaseTitle>

      <div className={styles.Content}>
        <h2 className={styles.Subtitle}>Limited Liability Company:</h2>
        <p className={styles.Paragraph}>
          Despite the fact that the Netherlands is not an offshore jurisdiction,
          in the 80s and 90s the country was very popular for setting up holding
          companies. This served as a profitable mechanism for exemption from
          taxes on dividends received and capital gains, low rates for the
          payment of dividends and an extensive network of agreements on the
          avoidance of double taxation. But due to change in the laws and
          regulations of Netherlands and the emergence in Europe of more
          attractive jurisdictions (especially Cyprus and Luxembourg) in the
          beginning of the 21st century led to the decline of the holding
          companies in Netherlands. Currently, under certain conditions, company
          registered in Netherlands can also be used as holding company. <br />{' '}
          In connection with the registration of company in the Netherlands, it
          is considered a tax resident and, therefore, may benefit from the
          double tax treaties as well as receive a tax resident certificate.
        </p>
        <h2 className={styles.Subtitle}>Company Structure</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            Company Form: Limited Liability Company
          </li>
          <li className={styles.ListLi}>
            There is no minimum capital. The amount of paid-up capital at the
            establishment of company is negotiated between the shareholders.
          </li>
          <li className={styles.ListLi}>
            The minimum number of directors is one. The director can be any
            resident of the European Union (for example, Cyprus). However, for
            the convenience of communication with the tax inspectorate, it is
            desirable to have two directors: a resident of the Netherlands, who
            on behalf of the company communicates with the government
            institutions of the Netherlands and a resident of Cyprus - the
            nominal, who signs the documents.
          </li>
          <li className={styles.ListLi}>Bank Account - Dutch Bank</li>
        </ol>

        <h2 className={styles.Subtitle}>Taxes</h2>

        <p className={styles.Paragraph}>No capital tax.</p>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            Income taxes:
            <p className={styles.SubtitleList}>
              In the Netherlands there is a system of progressive income tax.
              Profit up to a threshold of 200,000 euros is taxed at a rate of
              20%. Profits exceeding 200,000 euros are taxed at a rate of 25%.{' '}
              <br />A Dutch company is exempt from income tax on dividends
              received and capital gains in cases when:
            </p>
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                the company owns at least 5% of a foreign company within one
                year
              </li>
              <li className={styles.SublistLi}>
                a foreign subsidiary is not taxable (the tax rate is less than
                10%), a passive company (more than 50% of the assets are
                investments in other companies) - one of the conditions must be
                met. Thus, if a company receives all its income from a holding
                activity, the effective tax rate in the Netherlands can be 0%.
              </li>
            </ul>
          </li>

          <li className={styles.ListLi}>
            Withholding tax:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Dividend tax - 15%. In case dividends are paid to a EU resident,
                the tax is 0% (according to the directive). The tax rate can be
                reduced to 0% - 10% if dividends are paid to a resident of a
                country with which the Netherlands has a double tax treaty. At
                the moment, in Netherlands there are no general rules to prevent
                the misuse of treaties for the avoidance of double taxation and
                the Directive (anti-abuse rules). However, in practice, the tax
                service does not issue tax rullings with 0% WHT, if the company
                shareholder is a Cypriot and Maltese company. This means that at
                least according to the current regulations, when transferring
                dividends to these jurisdictions, a 0% rate should be applied,
                the tax service of the Netherlands will consider each case
                individually and does not guarantee that the zero rate will be
                applied.
              </li>
              <li className={styles.SublistLi}>
                Tax on payments and payment of remuneration for the possession
                and use of intellectual property - 0%.
              </li>
              <li className={styles.SublistLi}>
                Tax on interest payments - 0%.
              </li>
            </ul>
          </li>

          <li className={styles.ListLi}>
            Other important aspects of taxation:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                In the Netherlands there are rules of “thin capitalization”,
                according to which the ratio of debt to the company’s capital
                (debt equity ratio) should be 3: 1. Interest payments on debts
                exceeding this ratio are not considered justifiable expenses for
                tax purposes.
              </li>
              <li className={styles.SublistLi}>
                According to the provisions for the prevention of abuse
                (Anti-abuse provisions), remuneration for the possession and use
                of intellectual property cannot exceed 60% of the company&#39;s
                total revenues.
              </li>
            </ul>
          </li>
        </ol>

        <h2 className={styles.Subtitle}>Compliance:</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>Financial report (Annual accounts)</li>
          <li className={styles.ListLi}>
            served in the register of enterprises;
          </li>
          <li className={styles.ListLi}>
            the company&#39;s fiscal year - the company itself can choose the
            reporting period
          </li>
          <li className={styles.ListLi}>
            deadline for submission - within 13 months after the end of the
            financial year of the company
          </li>
          <li className={styles.ListLi}>
            a company must conduct an audit if it is a medium or large company.
          </li>
          <p className={styles.SubtitleList}>
            Above compliance applies If the company meets two of the three
            conditions stated below:
          </p>
          <li className={styles.ListLi}>
            total assets over 4.4 million euros.
          </li>
          <li className={styles.ListLi}>annual more than 8.8 million euros.</li>
          <li className={styles.ListLi}>more than 49 employees.</li>
        </ol>

        <h2 className={styles.Subtitle}>Tax Report</h2>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            reporting period: calendar year and/or financial year of the
            company.
          </li>
          <li className={styles.ListLi}>
            deadline - five months after the end of the reporting period
          </li>
          <li className={styles.ListLi}>
            The tax report is submitted with a copy of the financial report.
          </li>
        </ol>
      </div>
    </>
  );
};

export default Netherlands;
