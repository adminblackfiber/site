import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div id="hero" className="relative h-screen flex items-center justify-center bg-brand-black overflow-hidden">

            {/* Background - Pure Black with subtle texture or completely solid for high contrast */}
            <div className="absolute inset-0 bg-brand-black z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
                        O Sinal em um <br />
                        <span className="text-gray-500">Mar de Ruído.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
                        Black Fiber: excelência em infraestrutura de rede e fibra óptica.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#padrao-black"
                            className="bg-white text-black px-8 py-4 rounded-sm font-medium uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors min-w-[200px]"
                        >
                            Conheça o padrão
                        </a>

                        <a
                            href="#contato"
                            className="bg-transparent border border-white text-white px-8 py-4 rounded-sm font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all min-w-[200px]"
                        >
                            Fale conosco
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative vertical line */}
            <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-transparent via-white/20 to-transparent transform -translate-x-1/2" />
        </div>
    );
};

export default Hero;
