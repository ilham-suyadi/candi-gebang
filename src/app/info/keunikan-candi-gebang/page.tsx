import {promises as fs } from 'fs';
import Image from 'next/image';
import { Keunikan } from '../../lib/api';

export default async function KeunikanPage() {
    const data = await Keunikan();

    return(
        <div>
            {data ? (
                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className=' col-span-1'>
                            <Image height={795} width={1000} alt='img-sejarah' src={data.img} className='object-contain w-[495px] h-[600px]'></Image>
                        </div>
                        <div>
                            <p className='text-4xl font-bold mb-5'>{data.title}</p>
                            <p className='text-justify' dangerouslySetInnerHTML={{ __html: data.body.replace(/\n/g, '<br />') }} />
                        </div>
                    </div>
                </div>
            ):(
                <p>
                    no data
                </p>
            )}
        </div>
    )
    
}