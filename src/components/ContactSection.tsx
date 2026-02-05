import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! (Simulação)');
    };

    return (
        <section id="contato" className="bg-brand-gray py-40 md:py-64">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-widest"
                    >
                        Contato
                    </motion.h2>
                    <p className="text-text-muted text-lg font-light tracking-wide max-w-2xl mx-auto">
                        Inicie uma conversa sobre o futuro da sua infraestrutura.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <Phone className="h-6 w-6 text-white mt-1" />
                                <div>
                                    <p className="text-text-dim text-sm uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                                    <p className="text-white text-xl font-light">(11) 99999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <Mail className="h-6 w-6 text-white mt-1" />
                                <div>
                                    <p className="text-text-dim text-sm uppercase tracking-wider mb-1">E-mail</p>
                                    <p className="text-white text-xl font-light">contato@blackfiber.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <MapPin className="h-6 w-6 text-white mt-1" />
                                <div>
                                    <p className="text-text-dim text-sm uppercase tracking-wider mb-1">Endereço</p>
                                    <p className="text-white text-xl font-light">
                                        Rua da Tecnologia, 1000<br />
                                        São Paulo, SP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-text-dim text-xs uppercase tracking-widest">Nome</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-brand-black border-b border-white/20 px-0 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                                placeholder="DIGITE SEU NOME"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-text-dim text-xs uppercase tracking-widest">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-brand-black border-b border-white/20 px-0 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                                placeholder="DIGITE SEU E-MAIL"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-text-dim text-xs uppercase tracking-widest">Mensagem</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-brand-black border-b border-white/20 px-0 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors resize-none"
                                placeholder="COMO PODEMOS AJUDAR?"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-white text-black px-12 py-4 rounded-sm font-medium uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors w-full md:w-auto"
                        >
                            Enviar Mensagem
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
