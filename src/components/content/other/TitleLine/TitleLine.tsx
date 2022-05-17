import React from "react";

import styles from "./TitleLine.module.scss";

interface Props {
  type: "dark" | "yellow";
  text: string;
  className?: string;
}

const TitleLine: React.FC<Props> = ({ type, text, className }): JSX.Element => {
  return (
    <div className={`${styles.wrapper} ${styles["line_" + type]} ${className}`}>
      <span>{text}</span>
    </div>
  );
};
export default TitleLine;
