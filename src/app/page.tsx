'use client'

import CarouselComponent from '@/components/CarouselComponent';
import NavbarComponent from '@/components/NavbarComponent';
import AboutComponent from '@/sections/about/AboutComponent';
import ContactComponent from '@/sections/contact/ContactComponent';
import DataComponent from '@/components/DataComponent';
import FooterComponent from '@/sections/footer/FooterComponent';
import InicioComponent from '@/sections/inicio/InicioComponent';
import ServiceComponent from '@/sections/service/ServiceComponent';
import { Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react'


export default function Home() {
  return (
    <div>
      <NavbarComponent />

      <InicioComponent />

      <AboutComponent />

      <ServiceComponent />

      <section className="marcas">

        <div className="titulo">
          <h2>Especialistas en las siguientes <span>marcas</span></h2>
        </div>
      </section>

      <CarouselComponent />

      <ContactComponent />

      <DataComponent />

      <FooterComponent />
    </div>

  )
}
