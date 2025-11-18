import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black mt-8 text-white md:mt-16">
            <div className="pad-x-xl py-12">
                {/* Logo Section */}
                <div className="flex items-center justify-center gap-8 mb-12 pb-8 border-b border-white/20">
                    <Image
                        src="/logo/arenankalikesek.png"
                        alt="Arena Kalikesek"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <Image
                        src="/logo/bemft.png"
                        alt="BEM FT"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Left Side - Links */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h3 className="font-semibold text-base mb-4">Gula Aren Sriwulan</h3>
                            <a href="#" className="block text-sm text-white/80 hover:text-white transition-colors">Tentang Kami</a>
                            <a href="#" className="block text-sm text-white/80 hover:text-white transition-colors">Kontak Kami</a>
                            <a href="#" className="block text-sm text-white/80 hover:text-white transition-colors">Pertanyaan Umum</a>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-semibold text-base mb-4">Jelajahi</h3>
                            <Link href="/edukasi" className="block text-sm text-white/80 hover:text-white transition-colors">Edukasi</Link>
                            <Link href="/katalog" className="block text-sm text-white/80 hover:text-white transition-colors">Katalog</Link>

                            <h3 className="font-semibold text-base mb-2 mt-6">Ikuti Kami</h3>
                            <a href="#" className="block text-sm text-white/80 hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="block text-sm text-white/80 hover:text-white transition-colors">Tiktok</a>
                        </div>
                    </div>

                    {/* Right Side - Map */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-base mb-4">Lokasi Kami</h3>
                        <div className="rounded-lg overflow-hidden border border-white/20">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307.4468070004316!2d110.30835391585654!3d-7.154670202509014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e707d47ea7ffe93%3A0xd9b25924aaf30b20!2sKalikesek%2C%20Sriwulan%2C%20Limbangan%2C%20Kendal%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1763450130786!5m2!1sen!2sid"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            />
                        </div>
                        <p className="text-xs text-white/70 mt-2">
                            Kalikesek, Sriwulan, Limbangan<br />
                            Kabupaten Kendal, Jawa Tengah
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
                        <p>© 2025 Gula Aren Sriwulan. All rights reserved. </p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Syarat dan Ketentuan</a>
                            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}