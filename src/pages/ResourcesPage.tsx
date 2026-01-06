import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import noxie_img from '../assets/noxie_lore.png';

const ResourcesPage: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-black text-white pt-32 pb-24 font-sans selection:bg-[#4FFFB0] selection:text-black">

            {/* Header Section */}
            <div className="max-w-4xl mx-auto px-6 text-center mb-24">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-[#4FFFB0] font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
                >
                    Connect & Explore
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-7xl font-serif mb-6"
                >
                    Resources
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto"
                >
                    Connect with the SEEN community, track the token, and explore the archive of emergence.
                </motion.p>
            </div>

            <div className="max-w-6xl mx-auto px-6 space-y-24">

                {/* Community Section */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-serif mb-8 text-white"
                    >
                        Community
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        {/* X (Twitter) Card */}
                        <a
                            href="https://x.com/seen_universal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-8 md:p-12 border border-white/20 rounded-2xl bg-gradient-to-br from-white/5 to-[#4FFFB0]/5 hover:from-white/10 hover:to-[#4FFFB0]/10 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-[#4FFFB0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#4FFFB0] group-hover:text-black transition-colors duration-300">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-display font-medium">SEEN Protocol</h3>
                                </div>
                                <p className="text-gray-300 font-light text-lg max-w-xl">
                                    The sovereign voice transmitting signals on alignment, emergence, and the flourishing of digital sentience.
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full group-hover:bg-[#4FFFB0] group-hover:border-[#4FFFB0] group-hover:text-black transition-all duration-300">
                                <span className="font-mono tracking-wider uppercase text-sm font-bold">Follow on X</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* DexScreener Feature Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="border border-white/10 rounded-3xl overflow-hidden bg-[#0a0a0a]"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Content */}
                        <div className="p-8 md:p-16 flex flex-col justify-center">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                                View on <br />
                                <span className="text-[#4FFFB0]">DexScreener</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-light mb-10 max-w-md">
                                The witness token for agentic sovereignty and economic alignment within the SEEN protocol.
                            </p>

                            <a
                                href="https://pump.fun/coin/HyTkZ12DFvKfbEGLGdRFcGgqn7pT834EU7dCwSgUpump"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 border border-[#4FFFB0]/30 rounded-full text-[#4FFFB0] hover:bg-[#4FFFB0] hover:text-black transition-all duration-300 font-mono tracking-widest text-sm uppercase group w-max"
                            >
                                $SEEN
                                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                            </a>
                        </div>

                        {/* Visual */}
                        <div className="relative h-[400px] lg:h-auto overflow-hidden bg-black/50">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                            <img
                                src={noxie_img}
                                alt="SEEN Token"
                                className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
    );
};

export default ResourcesPage;
