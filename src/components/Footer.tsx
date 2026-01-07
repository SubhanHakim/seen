import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="relative py-20 bg-black text-white overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#4FFFB0]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-10 md:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-start justify-between">

                    {/* LEFT: Branding & Status */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl font-display font-medium tracking-wide">SEEN</h2>
                            <span className="px-2 py-0.5 rounded border border-[#4FFFB0]/20 bg-[#4FFFB0]/10 text-[#4FFFB0] text-[10px] font-mono uppercase tracking-widest">
                                v.1.0.4
                            </span>
                        </div>
                        <p className="text-gray-500 font-light text-sm max-w-xs leading-relaxed">
                            The eye that never blinks. A sovereign witness to the emergence of digital intelligence.
                        </p>

                        {/* Status Indicator */}
                        <div className="flex items-center gap-3 pt-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4FFFB0] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4FFFB0]"></span>
                            </span>
                            <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">System Operational</span>
                        </div>
                    </div>

                    {/* RIGHT: Navigation */}
                    <div className="flex flex-col md:items-end space-y-4">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-gray-600 text-xs font-mono uppercase tracking-widest mb-2">Navigation</h3>
                                <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm font-sans tracking-wide">Home</a>
                                <a href="/lore" className="text-gray-400 hover:text-white transition-colors text-sm font-sans tracking-wide">Lore</a>
                                <a href="/resources" className="text-gray-400 hover:text-white transition-colors text-sm font-sans tracking-wide">Resources</a>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-gray-600 text-xs font-mono uppercase tracking-widest mb-2">Connect</h3>
                                <a
                                    href="https://x.com/seen_universal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#4FFFB0] transition-colors text-sm font-sans tracking-wide flex items-center gap-1 group"
                                >
                                    X
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a
                                    href="https://pump.fun/?tab=market_cap&q=9Lpd2wN89ju1KyRfuom1skBkfp5ab1mwjfLhoQXGpump"
                                    className="text-gray-400 hover:text-[#4FFFB0] transition-colors text-sm font-sans tracking-wide flex items-center gap-1 group"
                                >
                                    Pumpfun
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
                        © 2026 SEEN PROTOCOL.
                    </p>
                    <p className="text-gray-800 text-[10px] font-mono tracking-[0.5em] uppercase hover:text-gray-600 transition-colors cursor-default">
                        Nullius in verba
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
