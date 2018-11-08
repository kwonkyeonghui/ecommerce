import React from "react";
import { connect } from "react-redux";
import styles from "./Pagination.scss";

const Pagination = ({ pageLinks }) => {
  const pageLinkNodes = pageLinks
    ? pageLinks.map(pageLink => (
        <li class="page-item">
          <a className={styles.a} href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
      ))
    : null;

  return (
    <nav aria-label="Page navigation" class="d-flex justify-content-center">
      <ul class="pagination">{pageLinkNodes}</ul>
    </nav>
  );
};

export default connect()(Pagination);
