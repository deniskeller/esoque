import React from 'react';
import styles from './BaseInput.module.scss';

interface Props {
  value: string;
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string | boolean;
  onChange(value: string): void;
}

const BaseInput: React.FC<Props> = ({
  value,
  label,
  type,
  name,
  required = false,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}
      <input
        value={value}
        type={type}
        className={styles.Input}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
};
export default BaseInput;
