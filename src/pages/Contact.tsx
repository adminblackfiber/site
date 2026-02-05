import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Mensagem enviada com sucesso! (Simulação)');
    };

    return (
        <div className="bg-brand-black min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Vamos <span className="text-neon-blue">Conversar?</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Estamos prontos para atender sua demanda. Entre em contato para orçamentos, dúvidas ou suporte técnico.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-brand-gray p-8 rounded-3xl border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-brand-black rounded-lg text-neon-blue">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Telefone / WhatsApp</p>
                                        <p className="text-white font-medium text-lg">(11) 99999-9999</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-brand-black rounded-lg text-neon-blue">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">E-mail</p>
                                        <p className="text-white font-medium text-lg">contato@blackfiber.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-brand-black rounded-lg text-neon-blue">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Endereço</p>
                                        <p className="text-white font-medium text-lg">
                                            Rua da Tecnologia, 1000<br />
                                            Sala 304 - São Paulo, SP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 bg-brand-gray rounded-3xl border border-white/5 overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-brand-black/50">
                                <MapPin className="h-12 w-12 mb-2 text-neon-green" />
                                <span className="ml-2">Mapa Interativo (Google Maps)</span>
                            </div>
                            {/* Real map iframe would go here */}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-brand-gray p-8 rounded-3xl border border-white/5"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-gray-400 text-sm">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                                        placeholder="Seu nome"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-gray-400 text-sm">Telefone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-gray-400 text-sm">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-gray-400 text-sm">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                                    placeholder="Como podemos ajudar?"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-neon-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center"
                            >
                                Enviar Mensagem
                                <Send className="ml-2 h-5 w-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
