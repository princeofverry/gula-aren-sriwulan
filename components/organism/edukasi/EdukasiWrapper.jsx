import React from 'react'
import HeroEdukasi from './HeroEdukasi'
import ApaItuGula from './ApaItuGula'
import PembuatanGulaAren from './PembuatanGulaAren'
import ManfaatGulaAren from './ManfaatGulaAren'

const EdukasiWrapper = () => {
    return (
        <>
            <section className="">
                <HeroEdukasi />
                <ApaItuGula />
                <PembuatanGulaAren />
                <ManfaatGulaAren />
            </section>
        </>
    )
}

export default EdukasiWrapper