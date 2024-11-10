import React, { useState } from "react";

function SearchUI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function debounce(cb, wait = 500) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        cb.apply(this, args);
      }, wait);
    };
  }

  const handleChange = async (event) => {
    const { value } = event.target;
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `https://demo.dataverse.org/api/search?q=${value}`
      );
      const response = await res.json();
      setData(response.data.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const optimizeHandleChange = debounce(handleChange, 500);

  return (
    <div>
      <div class="text-xl font-bold">SearchUI</div>
      <input
        class="border border-2 rounded-md p-2 mt-2 w-96"
        placeholder="Enter the search"
        onChange={optimizeHandleChange}
      />
      {loading && <div>Loading...</div>}
      <div class="shadow-lg mt-2 w-96 m-auto">
        {data &&
          data.map((ele) => {
            return <div>{ele.name}</div>;
          })}
      </div>
    </div>
  );
}

export default React.memo(SearchUI);
