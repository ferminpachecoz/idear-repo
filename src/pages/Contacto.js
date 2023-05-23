import React from 'react';
import ContactoSection from '../components/ContactoSection'
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';

export default function Contacto() {
  return (
    <div>
      <Header />
      <PageBanner title="Contactános" url="backgrounds/3409297.jpg" />
      <ContactoSection />
      <Footer />
    </div>
  )
}
