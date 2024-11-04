import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

function Main() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=12&page=${page}`
    );
    const result = await res.json();
    setData((prev) => {
      return [...prev, ...result];
    });
  };

  const handelInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => {
      window.removeEventListener("scroll", handelInfiniteScroll);
    };
  });

  return (
    <div>
      <CardComponent data={data} />
    </div>
  );
}

export default React.memo(Main);
