import React from 'react';
import { Zap, Clock, Award, Users } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: Zap,
            title: 'Alta Velocidade',
            description: 'Equipamentos de ponta para diagnósticos e reparos rápidos.'
        },
        {
            icon: Clock,
            title: 'Atendimento Ágil',
            description: 'Disponibilidade para chamados emergenciais 24/7.'
        },
        {
            icon: Award,
            title: 'Certificação Oficial',
            description: 'Laudos técnicos que garantem a conformidade da sua rede.'
        },
        {
            icon: Users,
            title: 'Equipe Especializada',
            description: 'Técnicos altamente treinados e experientes em campo.'
        }
    ];

    return (
        <section className="py-20 bg-brand-gray relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Por que escolher a <span className="text-neon-green">Black Fiber</span>?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="bg-brand-black p-8 rounded-2xl border border-white/5 hover:border-neon-green/30 transition-all duration-300 hover:transform hover:-translate-y-2 group">
                                <div className="w-14 h-14 bg-brand-gray rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-green/10 transition-colors">
                                    <Icon className="h-7 w-7 text-white group-hover:text-neon-green transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
