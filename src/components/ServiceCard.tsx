import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    link: string;
    image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link, image }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-brand-gray border border-white/10 rounded-2xl overflow-hidden group hover:border-neon-blue/50 transition-all duration-300"
        >
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-black/50 group-hover:bg-brand-black/20 transition-all duration-300 z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-brand-black/80 p-2 rounded-lg border border-white/10 group-hover:border-neon-blue group-hover:text-neon-blue transition-colors">
                    <Icon className="h-6 w-6 text-white group-hover:text-neon-blue" />
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">{title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                    {description}
                </p>

                <Link
                    to={link}
                    className="inline-flex items-center text-neon-green hover:text-white font-medium transition-colors group/link"
                >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
