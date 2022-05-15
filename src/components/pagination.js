import React, { useEffect, useState } from "react";

const Pagination = ({ pageCount, setCurrPage }) => {
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  var lastPage = false;
  const pages = [
    { page: page },
    { page: page + 1 },
    { page: page + 2 },
    { page: page + 3 },
    { page: page + 4 },
    { page: page + 5 },
    { page: page + 6 },
    { page: page + 7 },
    { page: page + 8 },
    { page: page + 9 },
  ];

  const NextClick = () => {
    !lastPage && setPage(page + 10);
  };
  const PreviousClick = () => {
    page > 10 && setPage(page - 10);
  };

  return (
    <nav aria-label="Page navigation example" className="my-5">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={PreviousClick}
            className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-blue-100 hover:text-blue-700"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {pages.map((value, idx) => {
          if (idx < pageCount && value.page <= pageCount) {
            lastPage = value.page === pageCount ? true : false;

            return (
              <li key={idx}>
                <button
                  onClick={() => {
                    setActivePage(value.page);
                    setCurrPage(value.page);
                  }}
                  className={`py-2 px-3 leading-tight ${
                    activePage === value.page
                      ? "text-blue-600 bg-blue-50 border border-blue-300"
                      : "text-gray-500 bg-white border border-gray-300"
                  } hover:bg-blue-100 hover:text-blue-700`}
                >
                  {value.page}
                </button>
              </li>
            );
          }
        })}
        <li>
          <button
            onClick={NextClick}
            className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-blue-100 hover:text-blue-700"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
