import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dexscreenerLogo from '../assets/dexscreener.svg';

const Hero: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#030303] z-10" />
                <div className="absolute inset-0 bg-black/20 z-10" /> {/* General dimming */}
                <img src="/seen.webp" alt="SEEN" className="w-full h-full object-cover grayscale-[30%] contrast-110" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center flex flex-col items-center gap-6 md:gap-8 px-4"
            >
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 100, opacity: 0, filter: "blur(20px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[18vw] md:text-[12vw] leading-none font-display font-bold text-white tracking-tighter drop-shadow-2xl mix-blend-overlay"
                    >
                        SEEN
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#4FFFB0]/50" />
                        <p className="text-sm md:text-lg font-mono text-[#4FFFB0] tracking-[0.3em] uppercase glow-text">
                            Intelligence, observed.
                        </p>
                        <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#4FFFB0]/50" />
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4 md:gap-6 mt-2">
                        <a
                            href="https://x.com/seen_universal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#4FFFB0]/50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[#4FFFB0]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10 flex items-center gap-3 font-mono text-xs md:text-sm font-bold tracking-widest text-white group-hover:text-[#4FFFB0] transition-colors">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                                [ X ]
                            </span>
                        </a>

                        <a
                            href="https://pump.fun/coin/HyTkZ12DFvKfbEGLGdRFcGgqn7pT834EU7dCwSgUpump"
                            className="group relative px-8 py-3 bg-[#4FFFB0] border border-[#4FFFB0] hover:bg-[#4FFFB0]/90 transition-all duration-300 shadow-[0_0_20px_rgba(79,255,176,0.3)] hover:shadow-[0_0_30px_rgba(79,255,176,0.5)] flex items-center gap-3"
                        >
                            {/* DexScreener Icon */}
                            <img src={dexscreenerLogo} alt="Dex" className="w-5 h-5 relative z-10" />
                            <span className="relative z-10 font-sans text-xs md:text-sm font-bold tracking-widest text-black">
                                PUMPFUN
                            </span>
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom HUD */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 w-full z-20 px-10 md:px-48 pb-8 pt-24 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent"
            >
                <div className="flex justify-between items-end w-full border-t border-white/20 pt-6">
                    {/* Left: Status */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4FFFB0] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4FFFB0]"></span>
                            </span>
                            <p className="font-mono text-xs md:text-sm text-[#4FFFB0] tracking-[0.2em] font-bold shadow-black drop-shadow-md">
                                SYSTEM ONLINE
                            </p>
                        </div>
                        <p className="font-mono text-[10px] md:text-xs text-white/70 tracking-[0.15em] uppercase">
                            SEEN_PROTOCOL_V.1.0 <span className="mx-2 text-white/40">|</span> OBSERVING
                        </p>
                    </div>

                    {/* Right: Technical Data */}
                    <div className="text-right flex flex-col items-end gap-1">
                        <p className="font-mono text-[10px] md:text-xs text-white/70 tracking-widest">
                            TARGET: <span className="text-white font-bold">UNKNOWN</span>
                        </p>
                        <div className="flex items-center gap-3 text-[10px] text-white/60 font-mono tracking-wider">
                            <span className="hidden md:inline">UPTIME: ∞</span>
                            <span className="hidden md:inline text-white/30">|</span>
                            <span>ENCRYPTED</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
