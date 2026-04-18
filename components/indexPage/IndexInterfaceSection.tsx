import Image from 'next/image';

export default function IndexInterfaceSection() {
    return (
        <section className="mb-32 overflow-hidden py-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-4">Interface Exploration</h2>
                    <p className="text-on-surface-variant">A bird's eye view of the design systems and component architecture deployed across projects.</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-outline">03 / DESIGN SYSTEMS</span>
            </div>

            <div className="relative h-[600px] perspective-container flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 rounded-[50%] blur-3xl"></div>
                <div className="relative w-full max-w-4xl h-full">
                    {/* UI Element 1 */}
                    <div className="absolute top-0 left-0 w-80 h-auto bg-white rounded-2xl shadow-2xl skew-card overflow-hidden z-10">
                        <img 
                            alt="UI Element 1" 
                            className="w-full h-auto" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuALC3raKcA0gnkjDCUiYSJPOfjXGPwo8iMS_z9GlSJCylUzJD1GrBy9_03_O57Q_FAqu_TVHbOufynMbLkGeHYljWbyinCkftJ-yvaZNyXUTCKz66thVRtcWZoUiiOPmjzeoOYbM3Zmu_v4wCeNh-mi5V4ccHeUPvDIUUVSAuPC7PHULYHrigsyvRDxlwpE4i50i2fJB6y6V6X2VN-Ow5l7-0DmTBJhcht5F2e82bH-V14YBX1g2MVnCjfa4Cqa6zq5HccL2T1XpM0" 
                        />
                    </div>
                    {/* Main UI Center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-auto bg-white rounded-3xl shadow-2xl skew-card overflow-hidden z-30">
                        <img 
                            alt="Main UI Center" 
                            className="w-full h-auto" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBURC2CSoMDX6CaX573cS5N-SxALl2s0TMZcmmV_U2wm_57H95cRRK9vLxy3gi3BMa9H8Zheyj1ZMwh6wEDvW6jtEY1fE3Tp_jmiUcSNqnqN2HU9DE-5UHYblFKOwPSHp4cNKgiasvNQlMnHtz2QrDwDXnKmXVvUc4IKGtbcZFFme_yHqHa2141WnDVCdDJXWSilc-5LaILruLFs2CUSd-P0ooG0kuzQrkZWqtAyVXrP9B8zY2sL6oAwbkFSVdY0O-ricOlbNhug9c" 
                        />
                    </div>
                    {/* UI Element 3 */}
                    <div className="absolute bottom-10 right-0 w-96 h-auto bg-white rounded-2xl shadow-2xl skew-card overflow-hidden z-20">
                        <img 
                            alt="UI Element 3" 
                            className="w-full h-auto" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSqddk04iYSigw71frS9cWgeI9ZVAY_Wez3vTTgyYtA_D4BtvWxQmPFsgfT2Mrh-yIu3ndi2ZrTohbR1aGhHUBGm4YXIYR-po1LD71JJgjlpCdsjVn-Ti-IqaFNo-eMC7zi2LYAitJVisssflWS3HeRJ75_g4clJzoFpm7VgvzjMeKDP-UAd5UlF6Ej4gH9Zwdnhx5GncwTD0FoB6QwpOCeqGmJX2v3Weizal9TnJg6UALa-HHRe9FvbZK6jYkVbdLKOK-o5dQ1IQ" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
