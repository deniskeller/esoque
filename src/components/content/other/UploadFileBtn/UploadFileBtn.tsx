import React, { ChangeEvent } from "react";

import styles from "./UploadFileBtn.module.scss";

interface IUpload {
  uploadFiles: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadFileBtn: React.FC<IUpload> = ({ uploadFiles }): JSX.Element => {
  return (
    <label className={styles.Upload}>
      <span>Select file to attach</span>
      <input type="file" onChange={uploadFiles} />
    </label>
  );
};
export default UploadFileBtn;
