'use client'

import CarouselComponent from '@/components/CarouselComponent';
import FormComponent from '@/components/FormComponent';
import NavbarComponent from '@/components/NavbarComponent';
import { Image } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react';


export default function Home() {
  return (
    <div>
      <NavbarComponent />

      <section className="index" id="inicio">
        <div>
        </div>
      </section>

      <section className="nosotros" id="nosotros">

        <div className="img-nosotros">
          <Image src="local.jpg" className="img-local" alt="imagen del frente del local" />
        </div>

        <div className="quienes-somos">
          <h2>Quiénes <span>somos</span></h2>
          <p>Somos una empresa dedicada a la reparación de notebooks, PC y consolas en Rosario con una trayectoria de más de 5 años en el rubro. Hemos pasado por varios domicilios, empresas y negocios de forma particular, hoy ponemos nuestro local para que tengas a disposición un taller y un laboratorio de alta complejidad especializado en microelectrónica para que dejes tu equipo en las mejores manos. En Techrevive entendemos la importancia y el valor que tiene en el día a día tu equipo, por ello tenemos como bastión la honestidad, la excelencia y la eficacia para poder brindarte el servicio que merece tu dispositivo.</p>
        </div>

      </section>

      <section className="servicios" id="servicios">

        <div className="nuestros-servicios">
          <h1>
            Nuestros <span>servicios</span>
          </h1>
        </div>

        <div className="arreglos1" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <Image src="display.jpg" alt="cambio de display" />
          <div>
            <p>Si tu pantalla sufrio un golpe, se agrieto, cambia de color, parpadea constantemente o presenta inconvenientes, no te preocupes, hay una solución. Contamos con un equipo especializado y un laboratorio de alta complejidad para realizar con precisión la extracción de tu pantalla dañada y reemplazarla por una completamente nueva. Además, disponemos de repuestos importados y utilizamos exclusivamente piezas originales, asegurando que tu dispositivo recupere su estado original y pueda ofrecerte un rendimiento óptimo a medio y largo plazo.</p>
            <div className="diagnosticos">
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
        </div>

        <div className="arreglos2" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <div>
            <p>¿Sabías que la demora en el encendido de tu equipo, la imposibilidad de abrir más de 3 pestañas de tu navegador sin que se tilde o la lentitud en programas administrativos tiene solución? Muy probablemente tu notebook o PC cuente con buenas prestaciones, pero al no contar con el hardware adecuado rinden al %50 de lo que debería.
              Sacale el %100 del rendimiento a tu equipo con la optimización de hardware: cambios de disco HDD a SSD, ampliación de memoria RAM y otras de las tantas soluciones que ofrecemos en Techrevive para que tu equipo trabaje de manera rápida y opere múltiples tareas sin problema alguno.</p>
            <div className="diagnosticos">
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
          <Image src="hardware.jpg" alt="optimizacion de hardware" />
        </div>

        <div className="arreglos1" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <Image src="placa-madre.jpg" alt="reparacion de placa madre" />
          <div>
            <p>Si tu equipo no volvió a encender, sufrió el derrame de algún líquido o un severo corte de luz, no te precipites a comprar uno nuevo, tiene solución. En Techrevive somos especialistas en la reparación de Notebook, All in One y PC. Contamos con un laboratorio de última tecnología que nos permite realizar cualquier tipo de reparación electrónica en las placas madre y otros componentes.</p>
            <div className="diagnosticos">
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
        </div>

        <div className="arreglos2" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <div>
            <p>Repuestos nuevos y originales. Si tu teclado presenta fallas en varias de sus teclas, sufrió algún derrame de líquido o dejo de funcionar en su totalidad, es normal y parte del uso propio de tu notebook. Llevamos a cabo un proceso de trabajo metódico para este tipo de problemas, ya que exige el desarme total del equipo para realizar el cambio efectivo del teclado.</p>
            <div className="diagnosticos">
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
          <Image src="teclado.jpg" alt="cambio de teclado" />
        </div>

        <div className="arreglos1" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <Image src="bisagras.jpg" alt="cambio de bisagras" />
          <div>
            <p>El problema más frecuente y demandante del service. Las bisagras cuentan con tornillos y soporte en cada uno de sus laterales, los mismos cuentan con una lubricación que se pierde a través del uso. Es importante realizar una reparación inmediata para no perjudicar otros componentes internos del equipo y que la falla sea más grave. Nuestro trabajo  metódico realiza la reparación y lubricación de manera efectiva para que tu equipo pueda seguir siendo utilizado a mediano y largo plazo.</p>
            <div className="diagnosticos">
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
        </div>

        <div className="arreglos2" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
          <div>
            <p>Contamos con baterías originales y alternativas, internas y externas. Es importante realizarle un cambio de batería a su equipo, ya que al pasar de los meses/años se va deteriorando su uso y produciendo hinchazón en las celdas de la misma. Esto puede causar derrame de líquido (litio) en el interior de su notebook, afectando así a componentes internos del dispositivo, y pudiendo causar hasta cortocircuitos no deseados. Además de los daños que ocasionaría en su laptop, puede afectar a su salud, ya que son propensas a explotar en algunos casos. Contamos con un equipo profesional y capacitado para manipular estos repuestos y brindar alternativas eficientes.</p>
            <div className="diagnosticos">
              <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
            </div>
          </div>
          <Image src="bateria.jpg" alt="cambio de batería" />
        </div>

      </section>

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

      <section className="datos">
        <ul className="info">
          <li className="card">
            <div className="imagenes"><Image src="horarios.png" alt="icono horarios" /></div>
            <div className="contenido">
              <h3>Horarios de atención al público</h3>
              <p>Lunes a viernes de <b>9 a 18hs.</b> <br /> Sábados de <b>9:30 a 13hs.</b></p>
            </div>
          </li>

          <li className="card">
            <div className="imagenes"><a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="wpp.png" alt="icono whatsapp" /></a></div>
            <div className="contenido">
              <h3>Whatsapp</h3>
              <p>3415024695</p>
            </div>
          </li>

          <li className="card">
            <div className="imagenes"><Image src="mail.png" alt="icono mail" /></div>
            <div className="contenido">
              <h3>Escribinos</h3>
              <p>techrevive.informatica@gmail.com</p>
            </div>
          </li>
        </ul>

      </section>

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
