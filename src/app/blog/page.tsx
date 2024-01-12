/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Blog } from "../lib/api";
import Image from "next/image";

export default async function BlogPage() {
  const posts: Blog[] = await Blog();

  return (
    <div className="bg-white py-4">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Blogs
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Dapatkan info terbaru mengenai Candi Gebang.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-5 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex max-w-xl flex-col items-start justify-between"
          >
            <Image
              className="object-cover rounded-t-lg h-50 w-auto shadow-md"
              src={post.thumbnailUrl}
              alt="01"
              width={500}
              height={200}
            />
            <div className="flex items-center gap-x-4 pt-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link href={`/blog/${post.id}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
