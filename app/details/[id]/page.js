import Link from "next/link";
import satoshi from "@/public/img/satoshi.jpg";
import Image from "next/image";
import Navbar from "@/components/navbar";
import fetchData, { fetchDetails } from "@/utils/util";

export default async function details({ params }) {
  const { id } = await params;
  //   console.log(params);
  const detailLink = `https://api.themoviedb.org/3/movie/${id}?api_key=ab225bf836e9ac7a9c8ca1f03b741a66`;
  const data = await fetchDetails(detailLink);
  const bdImage = data?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${data?.backdrop_path}`
    : satoshi;

  return (
    <>
      <section className="dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Movie Poster */}
            <div className="relative w-full h-60 md:w-1/3">
              <Image
                src={bdImage}
                alt={data.original_title}
                fill
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Movie Info */}
            <div className="flex flex-col w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-800">
                {data.original_title}
              </h1>
              <p className="text-gray-500">{data.release_date}</p>

              {/* Ratings */}
              <div className="flex items-center mt-4">
                <div className="flex items-center text-yellow-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 14.97 22 10.74l-7.19-.61L12 4.5 9.19 10.13l-7.19.61 5.46 4.23L5.82 21 12 17.27z" />
                  </svg>
                </div>
                <span className="text-gray-600 font-semibold">
                  {data.vote_average}
                </span>
              </div>

              {/* Summary */}
              <p className="mt-4 text-gray-700 leading-relaxed">
                {data.overview}
              </p>

              {/* Cast */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Genre</h2>
                <ul className="mt-2 flex flex-wrap gap-4">
                  {data.genres.map((genre) => (
                    <li
                      key={genre.id}
                      className="bg-gray-200 px-3 py-1 rounded-lg text-gray-700"
                    >
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* User Reviews */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Production Compaines
                </h2>
                <ul className="mt-2 flex flex-wrap gap-4">
                  {data.production_companies.map((ele) => (
                    <li
                      key={ele.id}
                      className="bg-gray-200 px-3 py-1 rounded-lg text-gray-700"
                    >
                      {ele.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  //   const posts = await fetchData();

  //   return posts.map((post) => ({
  //     id: post.id.toString(),
  //   }));
  return [];
}
