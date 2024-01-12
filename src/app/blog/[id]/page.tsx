// interface BlogDetailProps {
//     pos
// }

import { Blog, getBlogData } from '../../lib/api';
import Image from "next/image";


async function getBlog({params}:{params: {id:number}}){
    const getBlog = await getBlogData();

    const data = getBlog.find((blog) => blog.id == params.id)
    return(
        <div>
            <div className="bg-white py-4">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                {data?.title}
                </h2>
                <p className="mt-2 text-sm leading-8 text-gray-600">
                {`${data?.author}, ${data?.date}`}
                </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-5 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-1">
                <Image
                className="object-cover rounded-t-lg h-50 w-full shadow-md"
                src={data?.thumbnailUrl ?? '/img/02.jpg'}
                alt="01"
                width={500}
                height={200}
                />
            </div>
            <p className="mt-2 text-lg leading-6 py-7 text-gray-600">
                {data?.content}
                </p>
            </div>
        </div>
    )
}

export default getBlog