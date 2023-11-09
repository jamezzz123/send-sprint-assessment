import React, { useEffect } from "react";

export default function Pagination({
  totalItems,
  currentPage,
  perPage,
  onPageChange,
}: {
  totalItems: number;
  currentPage: number;
  perPage: number;
  onPageChange: (page: number) => void;
}) {
  useEffect(() => {
    onPageChange(1);
  }, []);
  return (
    <div className="flex mx-auto  max-w-2xl">
      <button
        onClick={() => {
          onPageChange(currentPage - 1);
        }}
        className="flex items-center justify-center px-6 py-3  text-base font-medium text-blue-600 bg-white rounded-lg hover:bg-blue-200 disabled:text-gray-400"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <button
        onClick={() => {
          onPageChange(currentPage + 1);
          console.log("clicked");
        }}
        disabled={currentPage === Math.ceil(totalItems / perPage)}
        className="flex items-center justify-center px-6 py-3  text-base font-medium text-blue-600 bg-white rounded-lg hover:bg-blue-200 disabled:text-gray-400"
      >
        Next
      </button>
    </div>
  );
}
