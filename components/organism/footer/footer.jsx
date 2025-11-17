export default function Footer() {
    return (
        <div className="bg-primary mt-8 text-white md:mt-16">
            <div className="pad-x-xl">
                <div className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
                    <div className="space-y-2 md:space-y-4">
                        <h1 className="font-semibold">Gula Aren Sriwulan</h1>
                        <div className="space-y-2 text-sm">
                            <p>Tentang Kami</p>
                            <p>Kontak Kami</p>
                            <p>Pertanyaan Umum</p>
                        </div>
                    </div>
                    <div className="space-y-2 md:space-y-4">
                        <h1 className="font-semibold">Jelajahi</h1>
                        <div className="space-y-2 text-sm">
                            <p>Edukasi</p>
                            <p>Katalog</p>
                        </div>
                    </div>
                    <div className="space-y-2 md:space-y-4">
                        <h1 className="font-semibold">Pusat Bantuan</h1>
                        <div className="space-y-2 text-sm">
                            <p>Syarat dan Ketentuan</p>
                            <p>Kebijakan Privasi</p>
                        </div>
                    </div>
                    <div className="space-y-2 md:space-y-4">
                        <h1 className="font-semibold">Ikuti Kami</h1>
                        <div className="space-y-2 text-sm">
                            <p>Instagram</p>
                            <p>Tiktok</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}