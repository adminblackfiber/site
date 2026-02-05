import React from 'react';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import FeatureGrid from '../components/FeatureGrid';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div className="bg-brand-black min-h-screen">
            <Hero />

            <ContentSection
                id="filosofia"
                title="Filosofia de Excelência"
                backgroundColor="gray"
                layout="twoColumn"
                content={[
                    { type: 'text', content: 'Nossa atuação vai além da conectividade: buscamos precisão técnica, organização impecável e entrega confiável em cada metro de fibra óptica. Não aceitamos atalhos nem improvisos.' },
                    { type: 'text', content: 'Na Black Fiber, a estética da organização é tão importante quanto a velocidade da luz. Nossa presença é discreta, focada na perfeição técnica e resultados concretos em qualquer escala.' }
                ]}
            />

            <FeatureGrid />

            <ContentSection
                id="padrao-black"
                title="Padrão Black"
                backgroundColor="gray"
                layout="textCTA"
                content="Racks e dutos impecáveis, fibras alinhadas, identificações precisas: nosso padrão é a ordem absoluta dos bastidores, resultado de anos no segmento premium de engenharia óptica. Aqui, cada detalhe importa."
                cta={{
                    text: 'Explore nossos cases',
                    url: '#clientes', // Assuming #cases maps to #clientes or future section
                    style: 'secondary'
                }}
            />

            <ContactSection />
        </div>
    );
};

export default Home;

