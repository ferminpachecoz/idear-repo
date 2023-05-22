import React from 'react';
import ContactoSection from '../components/ContactoSection'
import Header from '../components/Header';

export default function Contacto() {
  return (
    <div>
      <Header />
      <div style={{
        backgroundImage: "url('backgrounds/5106989.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{
          padding: "14em 5em 8em 5em",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }}>
          <h1 style={{
            color: "rgb(223, 223, 223)",
            fontWeight: 600,
            fontSize: "3.5em"
          }}>
            Contáctanos
          </h1>
        </div>
      </div>
      <ContactoSection />
    </div>
  )
}
