import React from 'react';
import { BaseTitle } from '@base/index';
import styles from './JurisdictionIPopupContents.module.scss';

interface Props {}

const Dominica: React.FC<Props> = () => {
  return (
    <>
      <div className={styles.JurisdictionPopupWrapper}></div>

      <BaseTitle type='h2' className={styles.Title}>
        Dominica
      </BaseTitle>

      <div className={styles.Content}>
        <p className={styles.SubtitleList}>
          In order to register a limited liability company (LLP) in Estonia, you
          must submit the following documents and provide the following
          information:
        </p>

        <ul className={styles.List}>
          <li className={styles.ListLi}>
            The name of company: with latin letters, English version is also
            possible. It must comply with the laws of the Republic of Estonia.
          </li>
          <li className={styles.ListLi}>
            Information about the founders must be provided:
          </li>
          <li className={styles.ListLi}>
            (individuals - name, surname, personal code, residential address;
            for legal entities - name, registration number, address, authority
            of the person representing him, his name, surname, personal code,
            address of the representative, his position); all constituent
            documents must be translated into Estonian and notarized.
          </li>
          <li className={styles.ListLi}>
            The legal address of the future company must be provided:
          </li>
          <li className={styles.ListLi}>
            This may be the home or legal address of any of the founders or the
            office that the company plans to rent or use- you will receive mail
            at this address.
          </li>
          <li className={styles.ListLi}>
            The desired amount of share capital - for a limited liability
            company the minimum amount of share capital is EUR 2500
          </li>
        </ul>

        <h2 className={styles.Subtitle}>Obligations to register:</h2>

        <ul className={styles.List}>
          <li className={styles.ListLi}>
            Submit an inquiry from your chosen Estonian banking institution
            regarding payment of the authorized capital to a temporary account
            of your company which opened in the bank.
          </li>
          <li className={styles.ListLi}>
            The order of distribution of shares between the founders (as a
            percentage or shares), the total number of shares, the nominal value
            of one share.
          </li>
          <li className={styles.ListLi}>
            How many board members (name, surname, personal code, address of
            residence and passport details of each board member), only a
            resident of the EU and the European Economic Area can be a member of
            the board.
          </li>
          <li className={styles.ListLi}>
            Name, surname, personal code, address and passport data of an
            accountant or accounting company (or the name and registration
            number of an accounting company), which accounting program your
            accountant uses, as well as the main activities of the company (At
            least three - four types of activities). You must also inform if you
            would like to register as a VAT payer with the Estonian State
            Revenue Service.
          </li>
        </ul>

        <h2 className={styles.Subtitle}>
          After registration you will receive:
        </h2>

        <ul className={styles.List}>
          <li className={styles.ListLi}>
            B-card <br /> The B-card is an extract from Estonian Commercial
            Register and contains the following information of Estonian company:
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>Date of establishment</li>
              <li className={styles.SublistLi}>Name</li>
              <li className={styles.SublistLi}>Registration code</li>
              <li className={styles.SublistLi}>
                Date of amendments from Estonian Commercial Register.
              </li>
              <li className={styles.SublistLi}>Legal Address</li>
              <li className={styles.SublistLi}>Types of activity</li>
              <li className={styles.SublistLi}>Members of the board</li>
              <li className={styles.SublistLi}>Authorized Capital</li>
              <li className={styles.SublistLi}>Enterprise type</li>
              <li className={styles.SublistLi}>
                date of the last change in the Charter
              </li>
              <li className={styles.SublistLi}>
                date of beginning and end of the fiscal year
              </li>
            </ul>
          </li>
          <li className={styles.ListLi}>
            Charter <br /> The company&#39;s charter is an extract from the
            Commercial Code of Estonia and includes the main articles regulating
            procedure for holding a General Meeting, voting of owners, making
            decisions by the General Meeting, etc. Charter also contains
            information on the authorized capital of company
          </li>
          <li className={styles.ListLi}>
            Taxes
            <ul className={styles.Sublist}>
              <li className={styles.SublistLi}>
                Since 2000, Estonia has introduced a 0% corporate income tax
                rate. This applies only to the profits of the company, i.e.
                unallocated. If the shareholders or shareholders decide to
                distribute profits in the form of dividends, then the company
                pays an additional income tax in the amount of 21/79
                (approximately 26.6%) for the shareholders.
              </li>
              <li className={styles.SublistLi}>Social tax: 33%</li>
              <li className={styles.SublistLi}>
                Income tax from individual: 21%
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dominica;
