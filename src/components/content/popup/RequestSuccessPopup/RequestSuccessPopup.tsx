import React from "react";
import { BaseButton, BasePopup } from "@base/index";
import { useDispatch } from "react-redux";
import { actions as actionsModal } from "store/modals/reducer";

import styles from "./RequestSuccessPopup.module.scss";

interface Props {
  className?: string;
}

const RequestSuccessPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  const bodyClassName = "overflow-hidden";

  const closeModal = () => {
    document.body.classList.remove(bodyClassName);
    dispatch(actionsModal.setPopup({ popup: "", id: 0 }));
  };

  return (
    <BasePopup className={className} type="mini">
      <div className={styles.Title}>Thanks!</div>
      <div className={styles.Subtitle}>
        <p>Your request has been successfully sent. We will reach you soon!</p>
      </div>

      <BaseButton onClick={closeModal} className={styles.Button} type="success">
        Great
      </BaseButton>
    </BasePopup>
  );
};

export default RequestSuccessPopup;
