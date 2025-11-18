import Image from 'next/image'
import React from 'react'

const manfaat = [
    {
        "title": "Lebih Sehat untuk Gula Darah",
        "image": "/assets/10.png"
    },
    {
        "title": "Sumber Mineral Alami",
        "image": "/assets/11.png"
    },
    {
        "title": "Bebas Kimia & Pengawet",
        "image": "/assets/12.png"
    },
    {
        "title": "Baik untuk Pencernaan",
        "image": "/assets/13.png"
    },
    {
        "title": "Meningkatkan Energi",
        "image": "/assets/14.png"
    },
    {
        "title": "Dapat menjadi alternatif pemanis",
        "image": "/assets/15.png"
    },
]
const ManfaatGulaAren = () => {
    return (
        <>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <Image src="/assets/components.png" alt='' width={500} height={500} className='hidden md:block' />
                    <h1 className='text-3xl md:text-6xl text-amber-900 font-playfair'>MANFAAT GULA AREN</h1>
                    <Image src="/assets/components.png" alt='' width={500} height={500} className='hidden md:block' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 pad-x gap-4 place-items-center my-10'>
                    {manfaat.map((item, index) => (
                        <div key={index} className='space-y-4'>
                            <Image src={item.image} alt='' width={300} height={300} className='hover:scale-105 transition object-contain' />
                            <h1 className='font-semibold text-gray-700 text-center pt-1'>{item.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ManfaatGulaAren