import Image from 'next/image'
import React from 'react'

const PembuatanGulaAren = () => {
    const steps = [
        {
            title: "Penyadapan Nira Aren",
            description: "Dimulai dengan tradisi mengambil cairan manis (nira) dari tandan bunga pohon aren. Nira yang diperoleh kemudian disaring dan siap diolah.",
            image: "/assets/8.png",
            step: "01"
        },
        {
            title: "Pemasakan & Pengolahan Inti",
            description: "Nira direbus dalam wajan besar pada suhu tinggi selama beberapa jam. Proses ini menguapkan kandungan air dan memekatkan nira menjadi larutan kental yang disebut siram. Dari titik inilah, proses berlanjut ke pembuatan berbagai jenis gula.",
            image: "/assets/2.png",
            step: "02"
        },
        {
            title: "Pencetakan & Pembentukan",
            subtitle: "Gula Aren Cetak (Batok/Gula Padat)",
            description: "Siram yang masih panas dituang langsung ke dalam cetakan batok kelapa atau bambu, lalu dibiarkan memadat secara alami.",
            image: "/assets/11.png",
            step: "03"
        },
        {
            subtitle: "Gula Semut (Gula Kristal)",
            description: "Siram yang masih panas dituang langsung ke dalam cetakan batok kelapa atau bambu, lalu dibiarkan memadat secara alami.",
            image: "/assets/5.png",
        },
        {
            subtitle: "Gula Cair (Sirup)",
            description: "Siram tidak dibiarkan mengkristal atau memadat, melainkan diencerkan dan disaring kembali untuk mendapatkan konsistensi cair yang siap digunakan.",
            image: "/assets/9.png",
        }
    ]

    return (
        <div className='bg-white'>
            <div className='pad-x py-12 md:py-20 max-w-7xl mx-auto'>
                {/* Header */}
                <div className='mb-16 md:mb-24'>
                    <h1 className='font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center'>
                        Proses Pembuatan Gula Aren
                    </h1>
                </div>

                {/* Steps */}
                <div className='space-y-12 md:space-y-20'>
                    {steps.map((item, index) => (
                        <div key={index} className=''>
                            <div className={`
                                flex flex-col gap-6 md:gap-10
                                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                                ${!item.step ? 'md:pl-16 lg:pl-24' : ''}
                            `}>
                                {/* Image */}
                                <div className='w-full md:w-5/12 flex justify-center items-center'>
                                    <div className='relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64'>
                                        <Image
                                            src={item.image}
                                            fill
                                            alt={item.title || item.subtitle}
                                            className='object-contain'
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='w-full md:w-7/12 flex flex-col justify-center space-y-4'>
                                    {item.step && (
                                        <span className='font-playfair text-5xl md:text-6xl font-bold text-gray-200'>
                                            {item.step}
                                        </span>
                                    )}

                                    {item.subtitle && (
                                        <span className='text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider'>
                                            {item.subtitle}
                                        </span>
                                    )}

                                    {item.title && (
                                        <h2 className='font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900'>
                                            {item.title}
                                        </h2>
                                    )}

                                    <p className='text-base md:text-lg text-gray-600 leading-relaxed max-w-xl'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Divider - except for last item */}
                            {index < steps.length - 1 && (
                                <div className='mt-12 md:mt-20 w-full h-px bg-gray-200'></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PembuatanGulaAren