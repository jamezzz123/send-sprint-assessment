import { getPost } from "@/services";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getPost(params.id);
  const currentDate = new Date().toDateString();
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl">
          <header className="mb-4 lg:mb-6">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src="https://api.dicebear.com/7.x/big-ears-neutral/svg"
                  alt="avatar"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900"
                  >
                    User with id - {data.userId}
                  </a>
                  <p className="text-base text-gray-500">
                    Insta Blog Press Team
                  </p>
                  <p className="text-base text-gray-500">{currentDate}</p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              {data.title}
            </h1>
          </header>
          <p className="">{data.body}</p>
        </article>
      </div>
    </main>
  );
}
