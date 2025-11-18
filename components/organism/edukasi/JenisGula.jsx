import Image from 'next/image'
import React from 'react'

const jenis = [
    {
        "title": "Gula Padat (Gula Aren Cetak)",
        "image": "/assets/6.png",
        "desc": "Gula aren yang dicetak dalam bentuk balok atau batok, biasa digunakan dalam masakan tradisional seperti kolak, rendang, atau saus."
    },
    {
        "title": "Gula Cair",
        "image": "/assets/17.png",
        "desc": "Sirup kental yang dihasilkan dari nira aren tanpa proses pengkristalan, cocok untuk topping pancake, campuran minuman, atau pelengkap dessert."
    },
    {
        "title": "Gula Semut (Gula Kristal)",
        "image": "/assets/18.png",
        "desc": "Gula aren yang diolah menjadi butiran kristal halus, praktis, mudah larut, dan ideal untuk pemanis minuman atau penambah rasa pada kue. "
    },
]

const JenisGula = () => {
    return (
        <>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-around pb-4'>
                    <Image
                        src="/assets/corak-home.png"
                        alt=''
                        width={500}
                        height={500}
                        className="hidden md:block scale-x-[-1]"
                    />
                    <h1 className='text-3xl md:text-5xl text-amber-900 font-playfair'>Jenis-Jenis Gula Aren</h1>
                    <Image src="/assets/corak-home.png" alt='' width={500} height={500} className='hidden md:block' />
                </div>
                <div className="pad-x grid grid-cols-1 md:grid-cols-3 gap-8">
                    {jenis.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                        >
                            <h1 className="font-playfair text-gray-900 text-2xl mb-4">
                                {item.title}
                            </h1>

                            <Image
                                src={item.image}
                                alt=""
                                width={250}
                                height={250}
                                className="object-contain mb-4 hover:scale-105 transition"
                            />

                            <p className="text-base text-gray-700 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default JenisGula