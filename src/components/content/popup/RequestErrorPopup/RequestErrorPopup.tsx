import React from "react";
import { BaseButton, BasePopup } from "@base/index";
import { useDispatch } from "react-redux";
import { actions as actionsModal } from "store/modals/reducer";

import styles from "./RequestErrorPopup.module.scss";

interface Props {
  className?: string;
}

const RequestErrorPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();

  const bodyClassName = "overflow-hidden";

  const closeModal = () => {
    document.body.classList.remove(bodyClassName);
    dispatch(actionsModal.setPopup({ popup: "", id: 0 }));
  };

  return (
    <BasePopup className={className} type="mini">
      <div className={styles.Title}>Oops...</div>
      <div className={styles.Subtitle}>
        <p>
          Something went wrong :( <br />
          Please try again later
        </p>
      </div>
      <BaseButton onClick={closeModal} className={styles.Button} type="success">
        Retry
      </BaseButton>
    </BasePopup>
  );
};

export default RequestErrorPopup;
