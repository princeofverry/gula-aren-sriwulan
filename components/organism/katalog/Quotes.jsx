import Image from 'next/image'
import React from 'react'

const Quotes = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center justify-between my-6'>
                <Image src="/katalog/element-katalog.png" alt='' width={200} height={500} className='hidden md:block scale-x-[-1]' />
                <h1 className='text-3xl md:text-7xl text-amber-900 font-playfair'>MANFAAT GULA AREN</h1>
                <Image src="/katalog/element-katalog.png" alt='' width={200} height={500} className='hidden md:block' />
            </div>
            <p className='text-justify text-lg md:text-2xl tracking-wider pad-x'>Rasakan warisan rasa nusantara yang terpelihara dalam setiap produk kami, yang lahir dari kearifan lokal warga Desa Wisata Arenan Kalikesek. Di sini, kami menghadirkan kelezatan gula aren berkualitas tinggi, diolah secara tradisional dari nira pilihan untuk menjaga cita rasa otentik dan kebaikan alaminya.</p>
        </div>
    )
}

export default Quotes