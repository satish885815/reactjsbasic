import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

function Main() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    setLoading(false);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=12&page=${page}`
    );
    const data = await res.json();

    setData((prev) => [...prev, ...data]);
    //   .then((res) => res.json())
    //   .then((data) => setData(data))
    //   .catch((err) => setError(err.message));
  };

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div>
      <CardComponent data={data} />
    </div>
  );
}

export default Main;
