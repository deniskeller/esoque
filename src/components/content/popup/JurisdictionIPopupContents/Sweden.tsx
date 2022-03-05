import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Sweden: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Sweden
      </BaseTitle>

      <div className={styles.Content}>
        <h2 className={styles.Subtitle}>Features</h2>

        <p className={styles.Paragraph}>
          In Sweden there are 2 types of companies available for use in
          international business. <br />
          Limited Partnership (KB) and a limited liability company (AB). <br />
          For trade operations, a limited partnership (KB) is more preferred
          than a limited liability company (AB).
        </p>

        <p className={styles.SubtitleList}>
          Features of the partnership structure:
        </p>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            At least two partners must be: one general and one with limited
            liability.
          </li>
          <li className={styles.ListLi}>
            Swedish corporate tax does not apply if all profits go to offshore
            partners.
          </li>
          <li className={styles.ListLi}>
            There is no partnership capital requirement. Partnership capital
            consists of partner contributions (the amount of capital is
            established by partners)
          </li>
          <li className={styles.ListLi}>No personal visit is required.</li>
        </ol>

        <h2 className={styles.Subtitle}>Application</h2>

        <p className={styles.SubtitleList}>
          SWEDISH COMMUNITY PARTNERSHIP (KB) FOR TRADE <br />
          The Swedish limited partnership (‘’ KB ’’) has tax transparency and
          flexibility, for instance, Swedish corporate tax is not charged if the
          partners are non-residents and the partnership conducts trading
          activities exclusively outside Sweden. <br />
          Swedish limited partnership (‘’ KB ’’) is a partnership with two types
          of partners: a limited liability company and a general partner (each
          partner can be both individuals or legal entities):
        </p>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            The general partner (Komplementar) who owns the partnership
            management- shares the company's profit in predetermined proportions
            and bears unlimited liability for the debts of the partnership
          </li>
          <li className={styles.ListLi}>
            Like shareholders, limited partners (Kommanditdelager) have limited
            liability, that is, exclusively for the company's debts (min. SEK
            100 or EUR 10) to the extent of their contribution and do not have
            the right to manage the partnership.
          </li>
        </ol>

        <p className={styles.Paragraph}>
          Limited partnership is often registered as a trading company with the
          possibility of obtaining a Swedish VAT number - but only if one of the
          partners is a resident of Sweden.
        </p>

        <p className={styles.Paragraph}>
          KB has rights to open bank accounts outside of Sweden. (Swedish bank
          accounts are available only to those enterprises that conduct trading
          activities in Sweden).
        </p>

        <p className={styles.Paragraph}>
          KB has rights to open bank accounts outside of Sweden. (Swedish bank
          accounts are available only to those enterprises that conduct trading
          activities in Sweden).
        </p>

        <h2 className={styles.Subtitle}>Taxes</h2>

        <p className={styles.Paragraph}>
          CORPORATE TAX (Corporate Profit Tax): The standard rate is 26.3%.{' '}
          <br />
          For limited partnerships (KB), corporate tax can be excluded if
          partners operate only outside Sweden.
        </p>

        <p className={styles.Paragraph}>
          INCOMING DIVIDENDS: 0% rate if profits are received from resident
          companies + “Tax Exemption” requirements apply if: <br />
          ownership of shares is at least 25%; <br />
          the subsidiary has tax residency status in a country with a corporate
          tax rate close to Sweden. If the "tax exemption" is not applicable,
          then the tax rate on incoming dividends is 26.3%.
        </p>

        <p className={styles.Paragraph}>
          TAX ON GROWTH OF CAPITAL: Capital gains from the sale of shares are
          generally subject to a corporate tax of 26.3%. In the above terms, tax
          exemption may also apply.
        </p>

        <p className={styles.SubtitleList}>WITHHOLDING TAX:</p>

        <ol className={styles.List}>
          <li className={styles.ListLi}>
            BY ROYALTY: A royalty tax is usually not withheld. However, there is
            a possibility that royalties may be considered profit of the
            permanent establishment and therefore may be taxed at 26.3%.
          </li>

          <li className={styles.ListLi}>
            ON DIVIDENDS: a total rate of 30%, which can be reduced under the
            effect of an EU directive or a double tax treaty. Dividends paid by
            a Swedish holding company may be exempt from tax, subject to
            compliance with all requirements:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                all shares are held in the company as business assets
              </li>
              <li className={styles.SublistLi}>
                parent company is subject to income tax minimum 15.4%
              </li>
              <li className={styles.SublistLi}>
                the parent company owns at least 25% of the Swedish company
              </li>
            </ul>
          </li>

          <li className={styles.ListLi}>
            ON INTEREST PAYMENTS: tax is not withheld.
          </li>
          <li className={styles.ListLi}>
            PUBLIC TAXATION AGREEMENT: with 80 countries, including Cyprus.
          </li>
          <li className={styles.ListLi}>
            TAX ON ADDED COST (VAT): The standard rate for domestic sales is
            25%.
          </li>
        </ol>
      </div>
    </>
  );
};

export default Sweden;
