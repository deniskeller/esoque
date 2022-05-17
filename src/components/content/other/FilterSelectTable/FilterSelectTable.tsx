import React from "react";

import { BaseButton } from "@base/index";
import AppSelect from "@content/other/AppSelect/AppSelect";

import styles from "./FilterSelectTable.module.scss";

interface Props {
  className?: string;
  firmOptions: { title: string; value: string }[];
  statusOptions: { title: string; value: string }[];
  showOptions: { title: string; value: string }[];
  countShow: number;
  show: string;
  applyFilters: () => void;
  onSelectFirm: (val: string) => void;
  onSelectStatus: (val: string) => void;
  onSelectShow: (val: string) => void;
}

const FilterSelectTable: React.FC<Props> = ({
  firmOptions,
  statusOptions,
  className,
  showOptions,
  countShow,
  show,
  applyFilters,
  onSelectFirm,
  onSelectStatus,
  onSelectShow,
}): JSX.Element => {
  return (
    <div className={`${styles.filter} ${className}`}>
      <div className={styles.filterSelectGroup}>
        <div className={styles.filterSelect}>
          <AppSelect
            inputSize="Small"
            options={firmOptions}
            onChange={onSelectFirm}
            isRequared={false}
            placeholder={firmOptions[0]?.title}
            label="Select Firm"
          />
        </div>
        <div className={styles.filterSelect}>
          <AppSelect
            inputSize="Small"
            options={statusOptions}
            onChange={onSelectStatus}
            isRequared={false}
            placeholder="All"
            label="Filter by Status"
          />
        </div>
        <div className={styles.filterBtnGroup}>
          <BaseButton className={styles.filterBtnApply} onClick={applyFilters}>
            Apply Filters
          </BaseButton>
          <BaseButton type="success" className={styles.filterBtnReset}>
            Reset
          </BaseButton>
        </div>
      </div>

      <div className={styles.show}>
        <span className={styles.showText}>Show</span>
        <span
          className={styles.showSubtitle}
        >{`1 to ${show} of ${countShow} entries`}</span>

        <AppSelect
          className={styles.showSelect}
          inputSize="VerySmall"
          options={showOptions}
          onChange={onSelectShow}
          isRequared={false}
          placeholder={showOptions[0].value}
        />
      </div>
    </div>
  );
};
export default FilterSelectTable;
