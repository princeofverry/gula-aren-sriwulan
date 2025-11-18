import React from 'react'
import HeroEdukasi from './HeroEdukasi'
import ApaItuGula from './ApaItuGula'
import PembuatanGulaAren from './PembuatanGulaAren'
import ManfaatGulaAren from './ManfaatGulaAren'
import JenisGula from './JenisGula'

const EdukasiWrapper = () => {
    return (
        <>
            <section className="">
                <HeroEdukasi />
                <ApaItuGula />
                <PembuatanGulaAren />
                <ManfaatGulaAren />
                <JenisGula />
            </section>
        </>
    )
}

export default EdukasiWrapper