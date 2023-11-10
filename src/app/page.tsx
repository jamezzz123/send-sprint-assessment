"use client";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import { Post, getPosts } from "@/services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const parPage = 10;
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<Post[]>([]);
  const [filteredData, setFilteredData] = useState<Post[]>([]);
  const router = useRouter();
  async function fetchPost() {
    try {
      let data = await getPosts();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function onPageChange(page: number, search = "") {
    const indexOfLastItem = page * parPage;
    const indexOfFirstItem = indexOfLastItem - parPage;
    const filteredData = data.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    setFilteredData(filteredData);
    setCurrentItems(currentItems);
    setCurrentPage(page);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto mb-3 w-full max-w-2xl">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
      <div className="flex justify-between flex-col px-4 mx-auto max-w-screen-xl ">
        <div className="mx-auto mb-3 w-full max-w-2xl">
          <SearchBar
            onChangeInput={(search: string) =>
              onPageChange(currentPage, search)
            }
          />

          {currentItems.length > 0 ? (
            currentItems.map((post, index: number) => (
              <h3
                key={index}
                onClick={() => router.push(`/post/${post.id}`)}
                className="mb-4 my-5 text-xl  font-medium leading-tight text-gray-900 lg:mb-3 lg:text-2xl hover:text-blue-600"
              >
                {" "}
                {post.id}) {post.title}
              </h3>
            ))
          ) : (
            <h4 className="text-xl font-medium leading-tight text-gray-900">
              No posts found
            </h4>
          )}
        </div>
        <Pagination
          onPageChange={onPageChange}
          totalItems={filteredData.length}
          currentPage={currentPage}
          perPage={10}
        />
      </div>
    </main>
  );
}
