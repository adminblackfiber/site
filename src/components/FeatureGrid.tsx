import React from 'react';
import { motion } from 'framer-motion';
import { Square, Circle, Triangle } from 'lucide-react';

const FeatureGrid = () => {
    const features = [
        {
            icon: Square,
            title: 'Emenda Óptica',
            description: 'Execução técnica, perdas mínimas e precisão absoluta em cada fusão.'
        },
        {
            icon: Circle,
            title: 'Infraestrutura',
            description: 'Implantação limpa, documentação avançada e projetos sob medida.'
        },
        {
            icon: Triangle,
            title: 'Certificação',
            description: 'Medidas OTDR de ponta, relatórios detalhados e garantia Black Fiber.'
        }
    ];

    return (
        <section id="servicos" className="bg-brand-black py-40 md:py-64 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-widest"
                    >
                        Nossos Serviços
                    </motion.h2>
                    <p className="text-text-muted text-lg font-light tracking-wide">
                        O Padrão Black de Conectividade
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group text-center"
                        >
                            <div className="flex justify-center mb-8">
                                <div className="p-6 border border-white/20 rounded-full group-hover:border-white transition-colors duration-500">
                                    <feature.icon className="h-8 w-8 text-white stroke-1" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{feature.title}</h3>
                            <p className="text-text-dim leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
