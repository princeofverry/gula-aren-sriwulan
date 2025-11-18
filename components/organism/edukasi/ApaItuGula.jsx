import Image from 'next/image'
import React from 'react'

const ApaItuGula = () => {
    return (
        <div className='pad-x my-8'>
            <div>
                <h1 className='text-center md:text-right font-bold text-3xl md:text-5xl font-playfair'>APA ITU GULA AREN?</h1>
                <div className='flex flex-col md:flex-row items-center justify-center gap-6 pb-4'>
                    <Image src="/edukasi/16.png" alt="" width={250} height={250} className="" />
                    <p className='text-lg tracking-widest text-justify'>Gula aren, si pemanis alami berwarna cokelat keemasan, berasal dari nira pohon aren (Arenga pinnata). Bahan bakunya diperoleh melalui proses tradisional, yaitu dengan menyadap mayang bunga jantan pohon tersebut. Hasilnya adalah pemanis dengan rasa karamel yang khas, yang telah lama menjadi jiwa dalam berbagai hidangan dan minuman tradisional Nusantara.</p>
                </div>
            </div>
            <div>
                <div className='md:space-y-0 space-y-4'>
                    <h1 className='text-center md:text-left font-bold text-3xl md:text-5xl font-playfair'>Potensi Gula Aren di Sriwulan</h1>
                    <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-6'>
                        <p className='text-lg tracking-widest text-justify'>Desa Sriwulan memiliki fondasi kuat sebagai penghasil gula aren berkat komunitas petani turun-temurun dan tradisi penyadapan yang terjaga. Bukti nyata terlihat dari peningkatan produksi 40% dan tumbuhnya UMKM olahan gula aren. Dengan modal ini, Sriwulan memiliki potensi besar tidak hanya untuk berkembang menjadi sentra gula aren unggulan, tetapi juga untuk memperkuat rantai ekonomi hijau dan menancapkan identitasnya di peta kuliner nasional.</p>
                        <Image src="/edukasi/mask-7.png" alt="" width={320} height={320} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApaItuGula