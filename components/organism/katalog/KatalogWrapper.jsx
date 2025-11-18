import React from 'react'
import HeroKatalog from './HeroKatalog'
import Quotes from './Quotes'
import Produk from './Produk'

const KatalogWrapper = () => {
    return (
        <>
            <section className='space-y-8'>
                <HeroKatalog />
                <Quotes />
                <Produk />
            </section>
        </>
    )
}

export default KatalogWrapper