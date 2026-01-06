import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X as CloseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'LORE', href: '/lore' },
        { name: 'RESOURCES', href: '/resources' },
        { name: '$SEEN', href: '#' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-10 md:px-48 h-20 md:h-24 ${isScrolled
                    ? 'bg-black/40 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-black/20'
                    : 'bg-transparent'
                    }`}
            >
                {/* Logo Section (Left) */}
                <div className="flex-shrink-0 z-50">
                    <Link to="/" className="block group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                        >
                            <img src={logo} alt="SEEN Logo" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    </Link>
                </div>

                {/* Desktop Navigation (Center) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10 lg:gap-14">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="relative group py-2"
                        >
                            <span className={`text-xs font-sans font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${link.name === '$SEEN' ? 'text-[#4FFFB0] drop-shadow-[0_0_5px_rgba(79,255,176,0.6)]' : 'text-gray-300 group-hover:text-white'}`}>
                                {link.name}
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                        </Link>
                    ))}
                </div>

                {/* Right Section (Socials) */}
                <div className="hidden md:flex items-center gap-5 z-50">
                    {/* Twitter / X */}
                    <a
                        href="https://x.com/Noxie_world"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-10 h-10 transition-all duration-300 text-gray-400 hover:text-white"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current transition-colors duration-300">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/90 md:hidden flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-2xl font-sans font-medium tracking-[0.2em] uppercase transition-colors ${link.name === '$SEEN' ? 'text-[#4FFFB0]' : 'text-gray-300 hover:text-white'}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <motion.span
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            ))}
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="flex gap-8 mt-12"
                        >
                            <a
                                href="https://x.com/Noxie_world"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
