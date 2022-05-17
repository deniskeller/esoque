import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import styles from "./UploadZoneFile.module.scss";

interface IProps {
  onDrop: (files: File[]) => void;
}

const UploadZoneFile: React.FC<IProps> = ({ onDrop }): JSX.Element => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      className={`${styles.Wrapper} ${isDragActive ? styles.Active : ""}`}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <span>{isDragActive ? "Drop this files" : "Drag files here"}</span>
    </div>
  );
};

export default UploadZoneFile;
