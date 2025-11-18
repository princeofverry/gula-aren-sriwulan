import React from 'react'
import HeroKatalog from './HeroKatalog'
import Quotes from './Quotes'
import Produk from './Produk'

const KatalogWrapper = () => {
    return (
        <>
            <section>
                <HeroKatalog />
                <Quotes />
                <Produk />
            </section>
        </>
    )
}

export default KatalogWrapper