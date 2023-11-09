"use client";
import Pagination from "@/components/Pagination";
import { Post, getPosts } from "@/services";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<Post[]>([]);
  async function fetchPost() {
    try {
      let data = await getPosts();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function onPageChange(page: number){
    const indexOfLastItem = page * 10;
    const indexOfFirstItem = indexOfLastItem - 10;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(currentItems);
    setCurrentPage(page);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
      <div className="flex justify-between flex-col px-4 mx-auto max-w-screen-xl ">
        <div className="mx-auto mb-3 w-full max-w-2xl">
          {/* <ul className="list-decimal px-3 mx-5"> */}
            {currentItems.map((post, index: number) => (
              <h3
                key={index}
                className="mb-4 my-5 text-xl  font-medium leading-tight text-gray-900 lg:mb-3 lg:text-2xl"
              > {post.id})  
                {" "}{post.title}
              </h3>
            ))}
          {/* </ul> */}
        </div>
        <Pagination
          onPageChange={onPageChange}
          totalItems={data.length}
          currentPage={currentPage}
          perPage={10}
        />
      </div>
    </main>
  );
}
