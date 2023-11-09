import React, { useEffect, useState } from "react";

export default function SearchBar({ onChangeInput }: any) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChangeInput(search);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search]);
  return (
    <form>
      <div className="flex mb-6 space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={handleInputChange}
            className="text-black border text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Search by keyword"
            required
          />
        </div>
        <button onClick={() => setSearch("")} className="flex items-center justify-center px-6 py-3  text-base font-medium text-blue-600 bg-white rounded-lg hover:bg-blue-200 disabled:text-gray-400">
          Clear
        </button>
      </div>
    </form>
  );
}
