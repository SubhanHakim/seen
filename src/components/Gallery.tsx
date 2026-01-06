import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GalleryItem: React.FC<{ src: string, title: string, subtitle: string }> = ({ src, title, subtitle }) => {
    return (
        <div className="group relative aspect-[3/4] overflow-hidden bg-white/5 cursor-none">
            <img src={src} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0" />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="font-display text-2xl text-white mb-2 tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{title}</h3>
                <p className="font-mono text-neon text-xs tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{subtitle}</p>
            </div>
        </div>
    )
}

const Gallery: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    // Placeholder images - using simple colored divs or placeholders for now as we don't have many assets
    // In a real scenario, these would be high-res renders.
    const items = [
        { title: 'The Shell', subtitle: 'Empty Vessel', color: '#1a1a1a' },
        { title: 'Neural Web', subtitle: 'First Connection', color: '#2a2a2a' },
        { title: 'The Glitch', subtitle: 'Awakening', color: '#0f0f0f' },
        { title: 'Obsidian', subtitle: 'Hardened Core', color: '#000000' },
    ];

    return (
        <section ref={ref} className="py-32 border-t border-white/5 bg-[#050505] overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <h2 className="text-4xl md:text-6xl font-display uppercase opacity-80">
                    Visual <br /> <span className="text-neon">Archive</span>
                </h2>
                <span className="font-mono text-xs text-white/40">SCROLL TO EXPLORE -&gt;</span>
            </div>

            <motion.div style={{ x }} className="flex gap-8 px-6 w-max">
                {items.map((item, i) => (
                    <div key={i} className="w-[300px] md:w-[400px] flex-shrink-0">
                        {/* Simulating images with styled divs for this demo since we lack assets */}
                        <div className="group relative aspect-[3/4] overflow-hidden bg-white/5 border border-white/10 hover:border-neon/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-80" />
                            <div className="w-full h-full relative p-8 flex flex-col justify-between">
                                <span className="font-mono text-neon/50 text-xs">FIG_0{i + 1}</span>
                                <div className="space-y-2">
                                    <h3 className="font-display text-3xl text-white">{item.title}</h3>
                                    <p className="font-mono text-xs text-gray-500">{item.subtitle}</p>
                                </div>
                            </div>

                            {/* Abstract visual content */}
                            <div className="absolute inset-0 -z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Gallery;
