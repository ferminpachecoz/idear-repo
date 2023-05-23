import React from 'react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';
import SectionDependencias from '../components/SectionDependencias';
import Footer from '../components/Footer';

export default function Dependencias() {
  let dependencias = [
    {
      title: "Idear Tigre",
      description: "Ullamco aute amet anim proident qui ut consequat. Ad nostrud occaecat tempor culpa consectetur esse et. Qui nostrud eu ut sunt est voluptate ullamco aliquip officia nulla ea dolore est. Incididunt velit Lorem minim commodo elit mollit excepteur do amet cillum. Do dolore tempor Lorem in elit adipisicing et occaecat mollit qui Lorem est.",
      image: "tigre-bg-2.jpg",
      url: "https://ideartigre.com",
      order1: "order-1",
      order2: "order-2"
    },
    {
      title: "Idear San Isidro",
      description: "Ullamco aute amet anim proident qui ut consequat. Ad nostrud occaecat tempor culpa consectetur esse et. Qui nostrud eu ut sunt est voluptate ullamco aliquip officia nulla ea dolore est. Incididunt velit Lorem minim commodo elit mollit excepteur do amet cillum. Do dolore tempor Lorem in elit adipisicing et occaecat mollit qui Lorem est.",
      image: "backgrounds/san-isidro-bg.jpg",
      url: "https://ideartigre.com",
      order1: "order-2",
      order2: "order-1"
    }
  ]
  return (
    <div>
      <Header />
      <PageBanner title="Dependencias" url="backgrounds/3409297.jpg" />
      <SectionDependencias dependencias={dependencias} />
      <Footer />
    </div>
  )
}
