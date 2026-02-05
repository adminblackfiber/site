import React from 'react';
import ServiceCard from './ServiceCard';
import { Wrench, ShieldCheck, Server } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            title: 'Reparo de Fibra Óptica',
            description: 'Diagnóstico preciso e reparo ágil de rompimentos e atenuações. Utilizamos equipamentos de fusão de última geração para garantir a menor perda possível.',
            icon: Wrench,
            link: '/servicos',
            image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1000'
        },
        {
            title: 'Certificação de Fibra Óptica',
            description: 'Validação técnica com OTDR e Power Meter conforme normas nacionais e internacionais. Entregamos relatórios detalhados para garantia da sua rede.',
            icon: ShieldCheck,
            link: '/servicos',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=1000'
        },
        {
            title: 'Organização de Estrutura de Rede',
            description: 'Instalação e organização de racks, cabeamento estruturado e identificação de rotas. Otimize seu data center ou sala de telecomunicações.',
            icon: Server,
            link: '/servicos',
            image: 'https://images.unsplash.com/photo-1558494949-ef526b01201b?auto=format&fit=crop&q=80&w=1000'
        }
    ];

    return (
        <section className="py-20 bg-brand-black relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Nossas <span className="text-neon-blue">Especialidades</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Oferecemos um portfólio completo para manter sua infraestrutura óptica operando em performance máxima.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
