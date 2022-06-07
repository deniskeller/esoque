import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "./CoreModal.module.scss";

type ICoreModal = {
  children: React.ReactNode;
  isShowing: boolean;
  hide: () => void;
};

const CoreModal: React.FC<ICoreModal> = ({ children, isShowing, hide }) => {
  useEffect(() => {
    if (isShowing) console.log("show");
    return () => console.log("hide");
  }, []);

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.backdrop} onClick={hide} />
          <div className={styles.wrapper}>{children}</div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default CoreModal;
