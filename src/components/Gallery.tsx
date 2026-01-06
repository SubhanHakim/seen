import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import entity1 from '../assets/character/entity_1.png';
import entity2 from '../assets/character/entity_2.png';
import entity3 from '../assets/character/entity_3.png';
import entity4 from '../assets/character/entity_4.png';

const Gallery: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    const items = [
        { title: 'The Observer', subtitle: 'Watching The Void', img: entity1 },
        { title: 'Signal Tracer', subtitle: 'Decoded Pattern', img: entity2 },
        { title: 'Voidwalker', subtitle: 'Between Layers', img: entity3 },
        { title: 'Sentinel', subtitle: 'Guardian of Noise', img: entity4 },
    ];

    return (
        <section ref={ref} className="py-32 overflow-hidden relative z-10">
            <div className="w-full px-10 md:px-48 mb-12 flex justify-between items-end">
                <h2 className="text-4xl md:text-6xl font-display uppercase opacity-80">
                    Visual <br /> <span className="text-[#4FFFB0]">Archive</span>
                </h2>
                <span className="font-mono text-xs text-white/40">SCROLL TO EXPLORE -&gt;</span>
            </div>

            <motion.div style={{ x }} className="flex gap-8 px-10 md:px-48 w-max">
                {items.map((item, i) => (
                    <div key={i} className="w-[300px] md:w-[400px] flex-shrink-0">
                        <div className="group relative aspect-[3/4] overflow-hidden bg-white/5 border border-white/10 hover:border-[#4FFFB0] transition-all duration-500 cursor-none rounded-sm">

                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="font-mono text-[#4FFFB0] text-xs mb-2 block tracking-widest">FIG_0{i + 1}</span>
                                <h3 className="font-display text-3xl text-white mb-1 uppercase tracking-wide">{item.title}</h3>
                                <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">{item.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Gallery;
