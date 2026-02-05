import React from 'react';
import { Network } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-black border-t border-white/10 pt-40 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <a href="#" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold tracking-[0.2em] text-white uppercase">
                                Black<span className="font-light">Fiber</span>
                            </span>
                        </a>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Empresa</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-text-dim hover:text-white transition-colors text-sm">Sobre nós</a></li>
                            <li><a href="#" className="text-text-dim hover:text-white transition-colors text-sm">Equipe</a></li>
                            <li><a href="#" className="text-text-dim hover:text-white transition-colors text-sm">Clientes</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Serviços</h4>
                        <ul className="space-y-4">
                            <li><a href="#servicos" className="text-text-dim hover:text-white transition-colors text-sm">Emenda Óptica</a></li>
                            <li><a href="#servicos" className="text-text-dim hover:text-white transition-colors text-sm">Infraestrutura</a></li>
                            <li><a href="#servicos" className="text-text-dim hover:text-white transition-colors text-sm">Certificação</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li><a href="tel:+5511999999999" className="text-text-dim hover:text-white transition-colors text-sm">WhatsApp</a></li>
                            <li><a href="mailto:contato@blackfiber.com" className="text-text-dim hover:text-white transition-colors text-sm">Email</a></li>
                            <li><a href="https://linkedin.com" className="text-text-dim hover:text-white transition-colors text-sm">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center bg-brand-black">
                    <p className="text-text-dim text-xs tracking-widest uppercase">
                        &copy; 2026 Black Fiber. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
