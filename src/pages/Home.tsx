import React from 'react';
import Hero from '../components/home/Hero';
import SignatureDelights from '../components/home/SignatureDelights';

const Home: React.FC = () => {
    return (
        <div className="bg-[#0D0B0A] min-h-screen">
            {/* 1. Master Hero Section */}
            <Hero />

            {/* 2. Signature Delights Section */}
            <SignatureDelights />
        </div>
    );
};

export default Home;
