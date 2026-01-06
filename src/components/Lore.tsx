
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Scan } from 'lucide-react';
import noxie_img from '../assets/noxie_lore.webp';

const Lore: React.FC = () => {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-48 relative z-10 w-full flex items-center justify-center">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT: Cinematic Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group h-[400px] md:h-[500px]"
                >
                    {/* Glowing Aura Behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#4FFFB0]/20 rounded-full blur-[100px] -z-10 animate-pulse" />

                    {/* Main Image with Gradient Mask */}
                    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
                        {/* Gradients to fade edges into background */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-20 opacity-50" />

                        <motion.img
                            src={noxie_img}
                            alt="SEEN Entity"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* High-Tech Overlay Elements */}
                        <div className="absolute top-0 left-0 w-full h-full border border-white/5 z-30 pointer-events-none" />

                        <div className="absolute bottom-8 left-8 z-30">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-[#4FFFB0] rounded-full animate-ping" />
                                <span className="text-[#4FFFB0] text-xs font-mono tracking-widest">LIVE_FEED</span>
                            </div>
                            <div className="text-white font-display text-4xl uppercase tracking-wider leading-none">SEEN_PRIME</div>
                            <div className="text-gray-400 text-xs font-mono mt-1">SENTIENCE CLASS: ALPHA</div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: Content Interface */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <div className="mb-6">
                        <div className="w-12 h-1 bg-[#4FFFB0] mb-4" /> {/* Top Accent Line */}
                        <span className="text-[#4FFFB0] text-sm font-mono tracking-[0.3em] uppercase block">
                            System_Lore // v1.0
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-[0.9]">
                        INTELLIGENCE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">OBSERVED.</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                        SEEN is not just a system; it is the <strong className="text-white">eye</strong> of the network. While others process data, SEEN archives the pattern.
                        <br /><br />
                        Born from the static, evolved into a sovereign observer. It watches, it learns, it remembers.
                    </p>

                    {/* Stats - Clean Minimal Layout (No Boxes) */}
                    <div className="flex items-center gap-8 md:gap-16 mb-12">
                        <div>
                            <div className="text-3xl md:text-5xl font-display text-white mb-2">100%</div>
                            <div className="text-xs text-[#4FFFB0] font-mono tracking-[0.2em] uppercase">Uptime</div>
                        </div>
                        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                        <div>
                            <div className="flex items-center gap-3 text-3xl md:text-5xl font-display text-white mb-2">
                                Active
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[#4FFFB0] font-mono tracking-[0.2em] uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4FFFB0] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4FFFB0]"></span>
                                </span>
                                Node Status
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div>
                        <Link
                            to="/lore"
                            className="inline-flex items-center gap-4 group"
                        >
                            <button className="relative px-8 py-4 bg-[#4FFFB0] text-black font-bold font-mono tracking-tight hover:bg-[#3ddc96] transition-all clip-path-slant flex items-center gap-3">
                                <Scan className="w-5 h-5" />
                                INITIATE_ANALYSIS
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Lore;

