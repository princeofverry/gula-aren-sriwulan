import Image from 'next/image'
import React from 'react'

const Eduwisata = () => {
    return (
        <>
            <div className='pad-x mt-4 md:mt-6 space-y-8'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <h1 className='text-green-900 text-3xl md:text-7xl font-bold'>Eduwisata Arenan</h1>
                    <Image src="/assets/corak-home.png" alt="" width={500} height={500} className="object-contain" />
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-4'>
                    <p className='flex-1 text-md md:text-2xl tracking-wider text-justify'>
                        &quot;Hidupkanlah pengalaman yang tak terlupakan dengan menyelami kearifan para pengrajin lokal, menikmati keaslian cita rasa yang otentik, serta meresapi kehangatan tradisi yang lestari. Setiap kunjungan Anda adalah sebuah dedikasi untuk menumbuhkan dampak sosial dan ekonomi yang positif, memberdayakan para petani dan menyinari masa depan masyarakat desa.&quot;
                    </p>
                    <div className="flex-1 max-w-[400px] h-auto overflow-hidden">
                        <Image
                            src="/assets/2-new.png"
                            alt=""
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Eduwisata