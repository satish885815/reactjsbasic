import React, { useEffect, useState } from "react";

function Pagination() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const getData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const result = await res.json();
    if (result && result.products) {
      setData(result.products);
      setTotal(Math.ceil(result.total / 10));
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (page < total) {
      setPage((next) => next + 1);
    }
  };

  const handleClickPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (total <= 6) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2);

      if (page > 4) pages.push("...");

      for (
        let i = Math.max(3, page - 1);
        i <= Math.min(total - 2, page + 1);
        i++
      ) {
        pages.push(i);
      }

      if (page < total - 3) pages.push("...");
      pages.push(total - 1, total);
    }

    return pages;
  };

  return (
    <div className="w-5/6 m-auto">
      <h1 className="text-xl">Product Collection</h1>
      <div className="grid grid-cols-4 mt-6">
        {data.map((product, index) => {
          const { images, title } = product;
          return (
            <div className="w-52 h-52 shadow mt-3" key={index}>
              <img className="w-44 h-44 object-cover" src={images[0]} alt="" />
              <span className="line-clamp-1">{title}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-3 mt-3">
        <span
          onClick={handlePrev}
          className="border border-2 rounded-md p-3 cursor-pointer"
        >
          ◀
        </span>
        {renderPageNumbers().map((pageNum, index) => (
          <span
            key={index}
            onClick={() =>
              typeof pageNum === "number" && handleClickPage(pageNum)
            }
            className={`border border-2 rounded-md p-3 cursor-pointer ${
              page === pageNum ? "bg-gray-300" : ""
            }`}
          >
            {pageNum}
          </span>
        ))}
        <span
          onClick={handleNext}
          className="border border-2 rounded-md p-3 cursor-pointer"
        >
          ▶
        </span>
      </div>
    </div>
  );
}

export default React.memo(Pagination);
