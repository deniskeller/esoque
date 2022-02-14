import {
  BaseInput,
  BaseSelect,
  BaseButton,
  BaseRadioButton,
} from '@base/index';
import Image from 'next/image';
import React from 'react';
import styles from './CopiesCertification.module.scss';

interface Props {}

const CopiesCertification: React.FC<Props> = ({}) => {
  //checkbox
  const [checkbox, setCheckbox] = React.useState(false);
  return (
    <div className={styles.CopiesCertification}>
      <p className={styles.Description}>
        We can remotely verify any Document as a True Copy <br /> Here you may
        appoint remote meeting to verify the copy of any document - personal or
        corporate: just choose the type of the verification and required
        document. <br /> After payment you will receive the link to Notary
        remote appointment calendar.
      </p>
      <p className={styles.CovidDescription}>
        Due to COVID -19 situation we can remotely verify personal and corporate
        documents.
      </p>
      <div className={styles.Table}>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <BaseRadioButton
                  id='1'
                  checkboxValue={checkbox}
                  onClick={() => setCheckbox(!checkbox)}
                ></BaseRadioButton>
              </td>
              <td>EU Licensed lawyer/company</td>
              <td>8</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <BaseRadioButton
                  id='2'
                  checkboxValue={checkbox}
                  onClick={() => setCheckbox(!checkbox)}
                ></BaseRadioButton>
              </td>
              <td>Notary</td>
              <td>0</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <BaseRadioButton
                  id='3'
                  checkboxValue={checkbox}
                  onClick={() => setCheckbox(!checkbox)}
                ></BaseRadioButton>
              </td>
              <td>Verification with Apostille</td>
              <td>7</td>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <td>CompanyD</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>3</td>
            </tr>
            <tr>
              <td>CompanyE</td>
              <td>3</td>
              <td>0</td>
              <td>3</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <strong>Grand Total</strong>
              </td>
              <td>10</td>
              <td>15</td>
              <td>8</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CopiesCertification;
