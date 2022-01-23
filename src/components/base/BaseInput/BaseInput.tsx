import React from 'react';
import styles from './BaseInput.module.scss';

interface Props {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string | number;
  onChange(value: string | number): void;
}

const BaseInput: React.FC<Props> = ({
  value,
  label,
  type,
  error,
  name,
  required = false,
  placeholder,
  className,
  autocomplete = 'off',
  onChange,
}) => {
  return (
    <div
      className={`${styles.BaseInput} ${className} ${
        error ? styles.InputError : ''
      }`}
    >
      {label ? <label className={styles.Label}>{label}</label> : ''}
      <input
        value={value}
        type={type}
        className={`${styles.Input} ${error ? styles.Error : ''}`}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
      {error ? <label className={styles.ErrorText}>{error}</label> : ''}
    </div>
  );
};
export default BaseInput;
