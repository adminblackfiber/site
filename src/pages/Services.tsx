import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const sections = [
        {
            id: 'reparo',
            title: 'Reparo de Fibra Óptica',
            icon: Wrench,
            description: 'Nossa equipe especializada realiza reparos emergenciais e programados em cabos de fibra óptica. Utilizamos máquinas de fusão de alta precisão para garantir emendas com perda mínima, restabelecendo a conectividade da sua rede com rapidez e qualidade.',
            details: [
                'Fusão de fibra óptica (Monimodo e Multimodo)',
                'Localização exata de falhas com VFL e OTDR',
                'Reparo de cabos rompidos ou atenuados',
                'Manutenção preventiva e corretiva',
                'Atendimento 24/7 para emergências'
            ],
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 'certificacao',
            title: 'Certificação de Rede',
            icon: ShieldCheck,
            description: 'A certificação é essencial para garantir que sua infraestrutura óptica atenda aos paDrões internacionais de desempenho. Fornecemos relatórios detalhados que comprovam a qualidade da instalação e a capacidade de tráfego da rede.',
            details: [
                'Testes de perda óptica (Power Meter)',
                'Reflectometria no Domínio do Tempo (OTDR)',
                'Geração de laudos técnicos completos',
                'Diagnóstico de performance',
                'Certificação de links novos e legados'
            ],
            image: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 'organizacao',
            title: 'Organização de Estrutura',
            icon: Server,
            description: 'Uma infraestrutura organizada reduz o tempo de manutenção e o risco de falhas. Projetamos e organizamos racks, distribuidores ópticos (DIOs) e cabeamento estruturado, garantindo escalabilidade e facilidade de gestão.',
            details: [
                'Instalação e organização de racks e gabinetes',
                'Montagem de DIOs (Distribuidores Internos Ópticos)',
                'Identificação e etiquetagem de cabos',
                'Limpeza técnica de conectores',
                'Reestruturação de data centers e salas de telecom'
            ],
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=1000'
        }
    ];

    return (
        <div className="bg-brand-black min-h-screen pb-20">
            {/* Header */}
            <div className="bg-brand-gray py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-blue/5 z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Nossos <span className="text-neon-blue">Serviços</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Excelência técnica e equipamentos de ponta para atender todas as necessidades da sua infraestrutura óptica.
                    </p>
                </div>
            </div>

            {/* Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-24">
                {sections.map((section, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 bg-brand-gray/30 p-8 md:p-12 rounded-3xl border border-white/5 hover:border-neon-blue/30 transition-all duration-300`}
                        >
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-brand-black rounded-lg border border-neon-blue/30 text-neon-blue">
                                        <section.icon className="h-8 w-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {section.description}
                                </p>

                                <ul className="space-y-3 pt-4">
                                    {section.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-400">
                                            <ArrowRight className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6">
                                    <Link
                                        to="/contato"
                                        className="inline-flex items-center justify-center px-6 py-3 border border-neon-blue text-base font-medium rounded-full text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    >
                                        Solicitar este serviço
                                    </Link>
                                </div>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                    <div className="absolute inset-0 bg-neon-blue/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
