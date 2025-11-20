import Image from 'next/image';
import React from 'react';

const listProduk = [
    {
        "title": "Gula Aren Cair",
        "pict": "/katalog/4.png",
        "price": "Rp. 55.000/liter",
    },
    {
        "title": "Gula Aren Semut",
        "pict": "/katalog/5.png",
        "price": "Rp. 65.000/kg",
    },
    {
        "title": "Gula Aren Padet",
        "pict": "/katalog/6.png",
        "price": "Rp. 30.000/kg",
    },
]

const Produk = () => {
    return (
        <div className='py-16 px-4 max-w-7xl mx-auto'>

            <div className='flex items-center justify-center gap-8 mb-16'>
                <div className='hidden md:block h-px bg-amber-200 flex-1 max-w-xs'></div>
                <h1 className='text-4xl md:text-6xl text-amber-900 font-playfair font-bold'>Produk Kami</h1>
                <div className='hidden md:block h-px bg-amber-200 flex-1 max-w-xs'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
                {listProduk.map((item, index) => (
                    <div
                        key={index}
                        className='group flex flex-col items-center text-center transition-transform hover:scale-105 duration-300'
                    >
                        <div className='relative w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-amber-50 shadow-lg'>
                            <div className='absolute inset-0 bg-linear-to-br from-amber-100/50 to-transparent'></div>
                            <Image
                                src={item.pict}
                                fill
                                alt={item.title}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                        </div>

                        <div className='space-y-3'>
                            <h2 className='text-2xl md:text-3xl text-amber-900 font-playfair font-semibold'>
                                {item.title}
                            </h2>
                            <p className='text-xl text-amber-700 font-medium'>
                                {item.price}
                            </p>

                            {/* Tombol WhatsApp */}
                            <a
                                href={`https://wa.me/6285741171957?text=Halo%20saya%20ingin%20memesan%20${encodeURIComponent(item.title)}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-4 inline-block px-8 py-3 bg-amber-800 text-white rounded-full hover:bg-amber-900 transition-colors duration-300 font-medium shadow-md hover:shadow-xl'
                            >
                                Pesan Sekarang
                            </a>

                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-16 flex justify-center'>
                <div className='w-24 h-1 bg-linear-to-r from-transparent via-amber-400 to-transparent'></div>
            </div>
        </div>
    );
}

export default Produk;
