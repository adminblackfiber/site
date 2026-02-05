import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ContentSectionProps {
    id: string;
    title: string;
    backgroundColor: 'black' | 'gray';
    layout: 'twoColumn' | 'textCTA';
    content?: string | { type: string; content: string }[];
    cta?: {
        text: string;
        url: string;
        style: 'primary' | 'secondary';
    };
}

const ContentSection: React.FC<ContentSectionProps> = ({
    id,
    title,
    backgroundColor,
    layout,
    content,
    cta
}) => {
    const bgClass = backgroundColor === 'black' ? 'bg-brand-black' : 'bg-brand-gray';

    return (
        <section id={id} className={`${bgClass} py-40 md:py-64`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    <div className="mt-4 h-1 w-24 bg-white" />
                </div>

                {layout === 'twoColumn' && Array.isArray(content) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        {content.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <p className="text-text-muted text-lg leading-relaxed font-light">
                                    {item.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                )}

                {layout === 'textCTA' && typeof content === 'string' && (
                    <div className="max-w-4xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-text-muted text-xl md:text-2xl leading-relaxed font-light mb-12"
                        >
                            {content}
                        </motion.p>

                        {cta && (
                            <motion.a
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                href={cta.url}
                                className="inline-flex items-center text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors uppercase tracking-widest text-sm"
                            >
                                {cta.text}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.a>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContentSection;
