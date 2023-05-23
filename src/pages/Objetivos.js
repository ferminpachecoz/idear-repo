import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ObjetivosSection from '../components/ObjetivosSection';
import PageBanner from '../components/PageBanner';

export default function Objetivos() {
  return (
    <>
      <Header />
      <PageBanner title="Perspectivas" url="backgrounds/3409297.jpg" />
      <ObjetivosSection />
      <Footer />
    </>
  )
}
