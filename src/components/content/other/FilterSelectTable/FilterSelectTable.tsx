import React from "react";

import { BaseButton, BaseSelectApp } from "@base/index";

import styles from "./FilterSelectTable.module.scss";
import LabelWrapper from "../LabelWrapper/LabelWrapper";

interface Props {
  className?: string;
  firmOptions: { title: string; value: string }[];
  statusOptions: { title: string; value: string }[];
  showOptions: { title: string; value: string }[];
  countShow: number;
  show: string;

  selectedFirm: string;
  selectedStatus: string;
  page: number;
  skip: number;
  resetFilters: () => void;

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

  skip,
  page,
  selectedFirm,
  selectedStatus,

  applyFilters,
  onSelectFirm,
  onSelectStatus,
  onSelectShow,

  resetFilters,
}): JSX.Element => {
  return (
    <div className={`${styles.filter} ${className}`}>
      <div className={styles.filterSelectGroup}>
        <div className={styles.filterSelect}>
          <LabelWrapper isRequared={false} label="Select Firm">
            <BaseSelectApp
              selectedValue={selectedFirm}
              inputSize="Small"
              onChange={onSelectFirm}
              options={firmOptions}
            />
          </LabelWrapper>
        </div>
        <div className={styles.filterSelect}>
          <LabelWrapper isRequared={false} label="Filter by Status">
            <BaseSelectApp
              selectedValue={selectedStatus}
              inputSize="Small"
              onChange={onSelectStatus}
              options={statusOptions}
            />
          </LabelWrapper>
        </div>
        <div className={styles.filterBtnGroup}>
          <BaseButton className={styles.filterBtnApply} onClick={applyFilters}>
            Apply Filters
          </BaseButton>

          <BaseButton type="success" className={styles.filterBtnReset} onClick={resetFilters}>
            Reset
          </BaseButton>
        </div>
      </div>

      <div className={styles.show}>
        <span className={styles.showText}>Show</span>

        <span className={styles.showSubtitle}>{`${page === 1 ? 1 : Math.min(skip + 1, countShow)} to ${Math.min(
          +show * page,
          countShow
        )} of ${countShow} entries`}</span>

        <LabelWrapper className={styles.showSelect} isRequared={false}>
          <BaseSelectApp
            placeholder={showOptions[0].value}
            selectedValue={show}
            inputSize="VerySmall"
            onChange={onSelectShow}
            options={showOptions}
          />
        </LabelWrapper>
      </div>
    </div>
  );
};
export default FilterSelectTable;
