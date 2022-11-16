import React from "react";
import s from "./Pagination.module.scss";
import PaginationShowMore from "./PaginationShowMore";

const Pagination = () => {
  return (
    <div className={s.wrapper}>
      <PaginationShowMore />
    </div>
  );
};

export default Pagination;
