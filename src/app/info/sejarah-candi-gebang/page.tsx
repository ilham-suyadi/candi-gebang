import {promises as fs } from 'fs';
import Image from 'next/image';
import { Sejarah } from '../../lib/api';

export default async function SejarahPage() {
    const data = await Sejarah();

    return(
        <div>
            {data ? (
                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        <div>
                            <p className='text-4xl font-bold mb-5'>{data.title}</p>
                            <p className='text-justify' dangerouslySetInnerHTML={{ __html: data.body.replace(/\n/g, '<br />') }} />
                        </div>
                        <div className='flex justify-center col-span-2'>
                            <Image height={795} width={1000} alt='img-sejarah' src={"/img/img-sejarah.png"} className='object-contain w-[595px] h-[700px]'></Image>
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