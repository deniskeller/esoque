import { BaseInput, BaseSelect, BaseButton } from '@base/index';
import Image from 'next/image';
import React from 'react';
import styles from './WidgetSidious.module.scss';

interface Props {}

interface ISelectItem {
  title: string;
}

const options = [
  { value: 'SCOTLAND', title: 'SCOTLAND' },
  { value: 'IRELAND', title: 'IRELAND' },
  { value: 'CANADA', title: 'CANADA' },
  { value: 'CYPRUS', title: 'CYPRUS' },
];

const WidgetSidious: React.FC<Props> = ({}) => {
  const [companyName, setCompanyName] = React.useState<string>('');
  const [option, setOption] = React.useState<string>('');

  //логика для инпута
  const changeHandlerCompanyName = (value: string) => {
    setCompanyName(value);
  };

  //логика для селекта
  const changeHandlerJuristdiction = (value: string) => {
    console.log('gender: ', value);
    setOption(value);
  };

  //сабмит
  const submitFormData = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  //логика для табов
  let data = [
    { id: 1, title: 'Corporate Documents' },
    { id: 2, title: 'Copies Certification' },
    { id: 3, title: 'Signature Certifications' },
  ];

  const [tab, setTab] = React.useState(0);

  React.useEffect(() => {
    console.log('tab: ', tab);
  }, [tab]);

  return (
    <>
      <div className={styles.Tabs}>
        <ul className={styles.TabList}>
          {data.map((item, index) => (
            <li
              onClick={() => setTab(index)}
              className={`${styles.TabItem} ${
                tab === index ? styles.Active : ''
              }`}
              key={item.id}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className={styles.TabContent}>
          {/* tab 1 */}
          <div
            className={`${styles.TabContentItem} ${
              tab === 0 ? styles.Active : ''
            }`}
          >
            <div className={styles.CorporateDocuments}>
              <p className={styles.Description}>
                Specify company, jurisdiction, choose and order documents. Hard
                copy or electronic. Fast service, clear pricing.
              </p>

              <div className={styles.ImageDesktop}>
                <Image
                  src={`/images/landing/imgSidious2.png`}
                  layout='fill'
                  alt={''}
                />
              </div>
              <div className={styles.ImageTablet}>
                <Image
                  src={`/images/landing/imgSidious2Tablet.png`}
                  layout='fill'
                  alt={''}
                />
              </div>
              <div className={styles.ImageMobile}>
                <Image
                  src={`/images/landing/imgSidious2Mobile.png`}
                  layout='fill'
                  alt={''}
                />
              </div>

              <div className={styles.Widgetform}>
                <BaseInput
                  name='companyName'
                  placeholder='Your Company Name'
                  type='text'
                  value={companyName}
                  onChange={changeHandlerCompanyName}
                  className={styles.Input}
                  error=''
                />

                <BaseSelect
                  placeholder='Selected Juristdiction'
                  options={options}
                  onChange={changeHandlerJuristdiction}
                  className={`${styles.Select} ${styles.SelectJuristdiction}`}
                />

                <BaseButton onClick={submitFormData} className={styles.Button}>
                  Check
                </BaseButton>
              </div>
            </div>
          </div>

          {/* tab 2 */}
          <div
            className={`${styles.TabContentItem} ${
              tab === 1 ? styles.Active : ''
            }`}
          >
            <div className={styles.CopiesCertification}>
              <p className={styles.Description}>
                We can remotely verify any Document as a True Copy <br /> Here
                you may appoint remote meeting to verify the copy of any
                document - personal or corporate: just choose the type of the
                verification and required document. <br /> After payment you
                will receive the link to Notary remote appointment calendar.
              </p>
              <p className={styles.CovidDescription}>
                Due to COVID -19 situation we can remotely verify personal and
                corporate documents.
              </p>
            </div>
          </div>

          {/* tab 3 */}
          <div
            className={`${styles.TabContentItem} ${
              tab === 2 ? styles.Active : ''
            }`}
          >
            <div className={styles.SignatureCertifications}>
              <p className={styles.Description}>
                We can remotely verify Your Signature on any Original Document{' '}
                <br />
                Here you may appoint remote meeting for signature verification
                on any document: just choose the type of verification and
                proceed to appointments calendar
              </p>
              <p className={styles.CovidDescription}>
                Due to COVID -19 situation we can remotely verify personal and
                corporate documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetSidious;
