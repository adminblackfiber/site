import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-brand-black min-h-screen">
            {/* Hero Section */}
            <div className="relative py-24 bg-brand-gray overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-transparent z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600")' }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Nossa <span className="text-neon-blue">História</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Fundada com o propósito de elevar o padrão de conectividade no Brasil, a Black Fiber nasceu da união de especialistas com mais de 15 anos de experiência em telecomunicações.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Missão',
                            icon: Target,
                            text: 'Prover infraestrutura óptica de alta performance, garantindo a continuidade dos negócios de nossos clientes através de soluções técnicas precisas e ágeis.'
                        },
                        {
                            title: 'Visão',
                            icon: Eye,
                            text: 'Ser referência nacional em manutenção e certificação de redes de fibra óptica, reconhecida pela excelência técnica e inovação constante.'
                        },
                        {
                            title: 'Valores',
                            icon: Heart,
                            text: 'Compromisso com a qualidade, transparência nos diagnósticos, segurança em primeiro lugar e valorização do capital humano.'
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-brand-gray/50 p-8 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all hover:bg-brand-gray cursor-default"
                        >
                            <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center mb-6 text-neon-green">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Team Preview (Optional/Placeholder) */}
            <div className="py-20 bg-brand-gray/20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">Quem faz a <span className="text-neon-blue">Black Fiber</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((member) => (
                            <div key={member} className="group">
                                <div className="aspect-square bg-brand-black rounded-2xl mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-neon-blue/10 group-hover:bg-transparent transition-colors" />
                                    {/* Placeholder for team images */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                                        Foto {member}
                                    </div>
                                </div>
                                <h3 className="text-white font-bold text-lg">Nome Sobrenome</h3>
                                <p className="text-neon-green text-sm">Cargo / Especialidade</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
