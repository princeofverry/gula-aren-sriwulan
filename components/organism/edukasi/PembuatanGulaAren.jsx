import Image from 'next/image'
import React from 'react'

const PembuatanGulaAren = () => {
    return (
        <>
            <div className='pad-x space-y-4'>
                <h1 className='text-center font-bold text-3xl md:text-5xl font-playfair'>Proses Pembuatan Gula Aren</h1>
                <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 '>
                    <Image src="/assets/8.png" height={200} width={200} alt='' />
                    <div className='space-y-8'>
                        <h1 className='font-playfair text-3xl md:text-4xl text-amber-900'>1. Penyadapan Nira Aren</h1>
                        <p className='text-lg md:text-xl tracking-widest'>Dimulai dengan tradisi mengambil cairan manis (nira) dari tandan bunga pohon aren. Nira yang diperoleh kemudian disaring dan siap diolah.</p>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 '>
                    <Image src="/assets/2.png" height={200} width={200} alt='' />
                    <div className='space-y-8'>
                        <h1 className='font-playfair text-3xl md:text-4xl text-amber-900'>2. Pemasakan & Pengolahan Inti</h1>
                        <p className='text-lg md:text-xl tracking-widest'>Nira direbus dalam wajan besar pada suhu tinggi selama beberapa jam. Proses ini menguapkan kandungan air dan memekatkan nira menjadi larutan kental yang disebut siram. Dari titik inilah, proses berlanjut ke pembuatan berbagai jenis gula.</p>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 '>
                    <Image src="/assets/11.png" height={200} width={200} alt='' />
                    <div className='space-y-4'>
                        <h1 className='font-playfair text-3xl md:text-4xl text-amber-900'>3. Pencetakan & Pembentukan</h1>
                        <h3 className='font-semibold text-lg md:text-2xl tracking-wider'>Gula Aren Cetak (Batok/Gula Padat)</h3>
                        <p className='text-lg md:text-xl tracking-widest'>Siram yang masih panas dituang langsung ke dalam cetakan batok kelapa atau bambu, lalu dibiarkan memadat secara alami.</p>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 '>
                    <Image src="/assets/5.png" height={200} width={200} alt='' />
                    <div className='space-y-4'>
                        <h3 className='font-semibold text-xl md:text-2xl tracking-wider'>Gula Aren Cetak (Batok/Gula Padat)</h3>
                        <p className='text-lg tracking-widest'>Siram yang masih panas dituang langsung ke dalam cetakan batok kelapa atau bambu, lalu dibiarkan memadat secara alami.</p>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 '>
                    <Image src="/assets/9.png" height={200} width={200} alt='' />
                    <div className='space-y-4'>
                        <h3 className='font-semibold text-xl md:text-2xl tracking-wider'>Gula Cair (Sirup)</h3>
                        <p className='text-lg tracking-widest'>Siram tidak dibiarkan mengkristal atau memadat, melainkan diencerkan dan disaring kembali untuk mendapatkan konsistensi cair yang siap digunakan.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PembuatanGulaAren