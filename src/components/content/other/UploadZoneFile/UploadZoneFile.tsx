import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import styles from "./UploadZoneFile.module.scss";

interface IProps {
  onDrop: (files: File[]) => void;
  isMultiple?: boolean
}

const UploadZoneFile: React.FC<IProps> = ({ onDrop, isMultiple }): JSX.Element => {
  function onDropFunc(files: File[]){
    if (files.length > 1 && isMultiple === false){
      onDrop([files[0]])
    }else{
      onDrop(files)
    }
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onDropFunc });
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
