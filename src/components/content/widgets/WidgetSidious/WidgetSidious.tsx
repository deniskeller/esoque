import React from "react";
import {
  CorporateDocuments,
  CopiesCertification,
  SignatureCertifications,
  CorporateDocumentsPopup,
  NotAcceptingPopup,
  CertificationPopup,
  RequestSuccessPopup,
} from "@content/index";

import styles from "./WidgetSidious.module.scss";
import { useSelector } from "react-redux";
import { EsoqueState } from "@store/store";
import RequestErrorPopup from "@content/popup/RequestErrorPopup/RequestErrorPopup";

interface Props {}

const WidgetSidious: React.FC<Props> = ({}) => {
  const { popup } = useSelector((state: EsoqueState) => state.modals);

  const tabs = [
    { id: 1, title: "Corporate Documents" },
    { id: 2, title: "Copies Certification" },
    { id: 3, title: "Signature Certifications" },
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
                tab === index ? styles.Active : ""
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
              tab === 0 ? styles.Active : ""
            }`}
          >
            <CorporateDocuments />

            {/* Modal */}
            {popup === "CorporateDocumentsPopup" && tab === 0 && (
              <CorporateDocumentsPopup className="CorporateDocumentsPopup" />
            )}
            {popup === "NotAcceptingPopup" && tab === 0 && (
              <NotAcceptingPopup className="NotAcceptingPopup" />
            )}
          </div>

          {/* tab 2 */}

          <div
            className={`${styles.TabContentItem} ${
              tab === 1 ? styles.Active : ""
            }`}
          >
            <CopiesCertification />

            {popup === "CertificationPopup" && tab === 1 && (
              <CertificationPopup className="CertificationPopup" />
            )}
          </div>

          {/* tab 3 */}

          <div
            className={`${styles.TabContentItem} ${
              tab === 2 ? styles.Active : ""
            }`}
          >
            <SignatureCertifications />

            {popup === "CertificationPopup" && tab === 2 && (
              <CertificationPopup className="CertificationPopup" />
            )}
          </div>

          {/* success */}
          {popup === "RequestSuccessPopup" && (
            <RequestSuccessPopup className="RequestSuccessPopup" />
          )}

          {/* error */}
          {popup === "RequestErrorPopup" && (
            <RequestErrorPopup className="RequestErrorPopup" />
          )}
        </div>
      </div>
    </>
  );
};

export default WidgetSidious;
