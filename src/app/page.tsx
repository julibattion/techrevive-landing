'use client'

import CarouselComponent from '@/components/CarouselComponent';
import FormComponent from '@/components/FormComponent';
import NavbarComponent from '@/components/NavbarComponent';
import AboutComponent from '@/sections/about/AboutComponent';
import DataComponent from '@/sections/data/DataComponent';
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

      <section className="contacto" id="contacto">
        <div className="container">
          <div className="iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.5691423024623!2d-60.650340725242!3d-32.96238307268196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abba747e52e1%3A0x831fb2c051968541!2sTechrevive%20-%20Servicios%20Informaticos!5e0!3m2!1ses-419!2sar!4v1705963580049!5m2!1ses-419!2sar"
              width="600"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">

            </iframe>
          </div>

          <div className="form-container">

            <div className="inputs">

              <div className="contactanos">
                <h2>Contacto</h2>
                <p>Contactate con nosotros, dejá tu consulta y/o comentario y te responderemos a la brevedad.</p>
              </div>

              <FormComponent />
            </div>
          </div>
        </div>
      </section>

      <DataComponent />

      <footer className="footer bg-secondary">
        <div className="tech-footer">
          <Image src="techrevive.png" alt="logo empresa" className="techrevive" radius='none' />
        </div>
        <hr />
        <div className="info">
          <p>Paraguay 2215
          </p>
          <p>3415024695</p>
          <p>techrevive.informatica@gmail.com</p>
          <div className="redes"><a href="https://www.instagram.com/techrevive.service/" target="_blank"><Image src="instagram.png" alt="logo instagram" /></a><p>@techrevive.service</p></div>
        </div>
      </footer>
    </div>

  )
}
