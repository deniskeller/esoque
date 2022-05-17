import React, { Dispatch, SetStateAction } from "react";

import styles from "./Pagination.module.scss";

interface Props {
  page: number;
  limit: number;
  skip: number;
  count: number;
  totalPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<Props> = ({
  page,
  totalPage,
  setPage,
}): JSX.Element => {
  //   const [pages, setPages] = React.useState<number[]>();

  const nextPage = (page: number) =>
    page >= totalPage ? setPage(totalPage) : setPage(page + 1);

  const prevPage = (page: number) =>
    page <= 1 ? setPage(1) : setPage(page - 1);

  const chagePage = (page: number) => {
    setPage(page);
  };

  const pageArr = (totalPage: number) => {
    let arr = [];
    for (let i = 0; i < totalPage; i++) {
      arr.push(i + 1);
    }
    return arr;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.prevBtn} onClick={prevPage.bind(null, page)}>
        Prev
      </div>

      {pageArr(totalPage)?.map((pageNum) => {
        return (
          <div
            key={pageNum}
            className={`${styles.pageBtn} ${
              pageNum === page ? styles.active : ""
            }`}
            onClick={chagePage.bind(null, pageNum)}
          >
            {pageNum}
          </div>
        );
      })}

      <div className={styles.nextBtn} onClick={nextPage.bind(null, page)}>
        Next
      </div>
    </div>
  );
};

export default Pagination;
