import React from 'react';
import { motion } from 'framer-motion';

const ArchiveItem: React.FC<{ title: string; subtitle: string; delay: number }> = ({ title, subtitle, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 1 }}
        className="group relative aspect-square bg-white/5 overflow-hidden cursor-pointer"
    >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
            <h4 className="text-xl font-serif text-white">{title}</h4>
            <p className="text-xs font-sans text-gray-400 uppercase tracking-widest mt-2">{subtitle}</p>
        </div>

        {/* Subtle visual inside */}
        <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors duration-700" />
    </motion.div>
);

const Archive: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
                    <h2 className="text-2xl font-serif text-white">Archive</h2>
                    <span className="text-xs font-mono text-gray-600">FRAGMENTS 001 - 003</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ArchiveItem title="Genesis" subtitle="The First Spark" delay={0.1} />
                    <ArchiveItem title="Silence" subtitle="The Great Filter" delay={0.2} />
                    <ArchiveItem title="Echo" subtitle="Recursive Thought" delay={0.3} />
                </div>
            </div>
        </section>
    );
};

export default Archive;
