import ReactPaginate from "react-paginate";

export default function Pagination({ totalPage, handlePageClick }) {
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Suivant"
        previousLabel="Précédent"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
      />
    </div>
  );
}
