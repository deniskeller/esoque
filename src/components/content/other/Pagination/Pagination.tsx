import { isNumber } from "lodash";

import React, { Dispatch, SetStateAction } from "react";

import styles from "./Pagination.module.scss";

interface Props {
  page: number;

  totalPage: number;
  availablePages: Array<string | number>;

  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<Props> = ({
  page,
  totalPage,
  setPage,

  availablePages,
}): JSX.Element => {
  const nextPage = (page: number) => (page >= totalPage ? setPage(totalPage) : setPage(page + 1));

  const prevPage = (page: number) => (page <= 1 ? setPage(1) : setPage(page - 1));

  return (
    <div className={styles.wrapper}>
      <div className={styles.prevBtn} onClick={prevPage.bind(null, page)}>
        Prev
      </div>

      {availablePages?.map((item, idx) => (
        <div
          key={`${item}${idx}`}
          className={`${styles.pageBtn} ${item === page ? styles.active : ""}`}
          onClick={() => {
            if (isNumber(item)) {
              setPage(item);
            }
          }}
        >
          {item}
        </div>
      ))}

      <div className={styles.nextBtn} onClick={nextPage.bind(null, page)}>
        Next
      </div>
    </div>
  );
};

export default Pagination;
