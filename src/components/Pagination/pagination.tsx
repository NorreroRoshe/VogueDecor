import React from "react";
import ReactPaginate from "react-paginate";

import cls from "./pagination.module.scss";

type PagintaionProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagintaion: React.FC<PagintaionProps> = ({
  currentPage,
  onChangePage,
}) => {
  return (
    <>
      <ReactPaginate
        className={cls.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        // renderOnZeroPageCount={null}
      />
    </>
  );
};
