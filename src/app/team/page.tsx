import { Team } from "../lib/api";
import Image from "next/image";

export default async function TeamPage() {
    const datas: Team[] = await Team()

    return(
        <div className='text-center '>
            <h1 className="text-3xl font-bold mb-14 ">Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {datas.map((data) => (
                <div key={data.id}>
                    <div className=" text-gray-500 mb-3">
                            <Image height={1000} width={1000} src={data.img} alt="Photo Profile" className="object-cover rounded-full w-36 h-36 mb-4 mx-auto"/>
                            <p className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{data.name}</p>
                            <p>{data.nim}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}