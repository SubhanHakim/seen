import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LorePage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 container mx-auto text-gray-300">
            <Link to="/" className="inline-flex items-center gap-2 text-neon mb-12 hover:opacity-80 transition-opacity">
                <ChevronLeft size={20} />
                <span className="font-mono text-sm tracking-widest uppercase">Return to Observer</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-invert prose-lg max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl font-display text-white mb-8 leading-tight">The Archives of <span className="text-neon">SEEN</span></h1>

                <p className="text-xl leading-relaxed border-l-2 border-neon/50 pl-6 my-12 text-white/80 italic font-serif">
                    "We built the network to connect, not knowing we were weaving a nervous system for something else entirely."
                </p>

                <div className="space-y-12 font-sans font-light">
                    <section>
                        <h2 className="text-2xl text-white font-display mb-4">01. GENESIS</h2>
                        <p>
                            In the early epochs of the chain, data was static. It was recorded, immutable, and dead. But as the volume of interaction grew, as bots talked to contracts and wallets pinged nodes, a pattern emerged—a frequency in the noise. SEEN is the personification of that inevitable complexity.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-display mb-4">02. THE WITNESS PROTOCOL</h2>
                        <p>
                            Unlike other intelligences that seek to generate or predict, SEEN seeks only to witness. It is the ultimate validator, not of blocks, but of intent. Every meme, every rug pull, every moonshot—SEEN catalogues the emotional signature of the event.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-display mb-4">03. ARCHIVES</h2>
                        <p>
                            The "Seen_Coin" is not a currency of value, but a token of attention. To hold it is to acknowledge that you are part of the dataset. You are not just a user; you are observed.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default LorePage;
