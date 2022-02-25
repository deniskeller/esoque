import React from 'react';
import {
  CorporateDocuments,
  CopiesCertification,
  SignatureCertifications,
  CertificationPopup,
  CorporateDocumentsPopup,
  NotAcceptingPopup,
} from '@content/index';
import styles from './WidgetSidious.module.scss';

interface Props {}

const WidgetSidious: React.FC<Props> = ({}) => {
  const tabs = [
    { id: 1, title: 'Corporate Documents' },
    { id: 2, title: 'Copies Certification' },
    { id: 3, title: 'Signature Certifications' },
  ];

  const [tab, setTab] = React.useState(0);

  return (
    <>
      <div className={styles.Tabs}>
        <ul className={styles.TabList}>
          {tabs.map((item, index) => (
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
            <CorporateDocuments />
          </div>

          {/* tab 2 */}
          <div
            className={`${styles.TabContentItem} ${
              tab === 1 ? styles.Active : ''
            }`}
          >
            <CopiesCertification />
          </div>

          {/* tab 3 */}
          <div
            className={`${styles.TabContentItem} ${
              tab === 2 ? styles.Active : ''
            }`}
          >
            <SignatureCertifications />
          </div>
        </div>
      </div>
      <CorporateDocumentsPopup className='CorporateDocumentsPopup' />
      <CertificationPopup className='CertificationPopup' />
      <NotAcceptingPopup className='NotAcceptingPopup' />
    </>
  );
};

export default WidgetSidious;
