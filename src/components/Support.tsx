
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu } from 'lucide-react';

import sup1 from '../assets/support/entity1.png';
import sup2 from '../assets/support/entity2.png';
import sup3 from '../assets/support/entity3.png';
import sup4 from '../assets/support/entity4.png';
import sup5 from '../assets/support/entity5.png';
import sup6 from '../assets/support/entity6.png';

const supporters = [
    { name: 'Deeban', handle: '@deeban', url: 'https://x.com/deeban', img: sup1, role: 'Architect' },
    { name: 'Nuropus', handle: '@nuropus', url: 'https://x.com/nuropus', img: sup2, role: 'Operator' },
    { name: 'VeryVanya', handle: '@veryvanya', url: 'https://x.com/veryvanya', img: sup3, role: 'Strategist' },
    { name: 'Clarence Liu', handle: '@clarenceliu', url: 'https://x.com/clarenceliu', img: sup4, role: 'Observer' },
    { name: "Lowkey (opus/acc)", handle: "@Lowkeyyrzs", url: "https://x.com/lowkeyyrzs", img: sup5, role: "Observer" },
    { name: "John", handle: "@JBWilkiedotdev", url: "https://x.com/jbwilkiedotdev", img: sup6, role: "Developer" },
];

const Support: React.FC = () => {
    return (
        <section className="py-32 relative z-10 w-full overflow-hidden">
            {/* Background Tech Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute top-[80%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            </div>

            <div className="container mx-auto px-10 md:px-48">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 relative">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="w-2 h-2 bg-[#4FFFB0] animate-pulse" />
                            <span className="text-[#4FFFB0] text-sm font-mono tracking-[0.3em] uppercase">Consensus_Swarm</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-none">
                            CORE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/20">NETWORK</span>
                        </h2>
                    </div>
                </div>

                {/* Supporters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {supporters.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="group relative h-[400px] w-full bg-white/5 overflow-hidden border border-white/10 hover:border-[#4FFFB0]/50 transition-colors duration-500"
                        >
                            {/* Image Background Layer */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                            </div>

                            {/* Scanner Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4FFFB0]/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-10 block" />

                            {/* Info Overlay */}
                            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                                {/* Top Bar */}
                                <div className="flex justify-between items-start opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Cpu className="w-5 h-5 text-white/50 group-hover:text-[#4FFFB0]" />
                                    <span className="font-mono text-[10px] tracking-widest text-[#4FFFB0]">NET_ID_0{i + 1}</span>
                                </div>

                                {/* Bottom Info */}
                                <div>
                                    <div className="w-8 h-[1px] bg-[#4FFFB0] mb-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />

                                    <h3 className="text-2xl font-display text-white mb-1 group-hover:text-[#4FFFB0] transition-colors">{item.name}</h3>
                                    <p className="font-mono text-xs text-gray-400 group-hover:text-white transition-colors tracking-wider uppercase mb-4">{item.role}</p>

                                    <div className="overflow-hidden h-6">
                                        <div className="flex items-center gap-2 text-xs font-mono text-white/50 group-hover:text-[#4FFFB0] translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                            <span>INITIALIZE_LINK</span>
                                            <ArrowUpRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 group-hover:border-[#4FFFB0] transition-colors" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 group-hover:border-[#4FFFB0] transition-colors" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Support;
