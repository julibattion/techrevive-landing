import styles from './service.module.css';
import { Image } from '@nextui-org/react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ServiceComponent() {
  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  // Agrega más controles según sea necesario para cada sección

  const { ref: ref, inView: inView } = useInView();
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  const { ref: ref4, inView: inView4 } = useInView();
  const { ref: ref5, inView: inView5 } = useInView();
  // Agrega más referencias e inView según sea necesario para cada sección

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
    if (inView1) {
      controls1.start({ opacity: 1, scale: 1 });
    }
    if (inView2) {
      controls2.start({ opacity: 1, scale: 1 });
    }
    if (inView3) {
      controls3.start({ opacity: 1, scale: 1 });
    }
    if (inView4) {
      controls4.start({ opacity: 1, scale: 1 });
    }
    if (inView5) {
      controls5.start({ opacity: 1, scale: 1 });
    }
    // Agrega más condiciones y controles según sea necesario para cada sección
  }, [controls, controls1, controls2, controls3, controls4, controls5, inView, inView1, inView2, inView3, inView4, inView5]);

  return (
    <section className={styles.servicios} id="servicios">
      <div className={styles.container}>
        <div className={styles.nuestrosServicios}>
          <h1>
            Nuestros <span>servicios</span>
          </h1>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.arreglos1} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
            <Image src="display.jpg" alt="cambio de display" />
            <div>
              <p>Si tu pantalla sufrio un golpe, se agrieto, cambia de color, parpadea constantemente o presenta inconvenientes, no te preocupes, hay una solución. Contamos con un equipo especializado y un laboratorio de alta complejidad para realizar con precisión la extracción de tu pantalla dañada y reemplazarla por una completamente nueva. Además, disponemos de repuestos importados y utilizamos exclusivamente piezas originales, asegurando que tu dispositivo recupere su estado original y pueda ofrecerte un rendimiento óptimo a medio y largo plazo.</p>
              <div className={styles.diagnosticos}>
                <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
              </div>
            </div>
          </div>
        </motion.div>


        <motion.div
          ref={ref1}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls1}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.arreglos2} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
            <div>
              <p>¿Sabías que la demora en el encendido de tu equipo, la imposibilidad de abrir más de 3 pestañas de tu navegador sin que se tilde o la lentitud en programas administrativos tiene solución? Muy probablemente tu notebook o PC cuente con buenas prestaciones, pero al no contar con el hardware adecuado rinden al %50 de lo que debería.
                Sacale el %100 del rendimiento a tu equipo con la optimización de hardware: cambios de disco HDD a SSD, ampliación de memoria RAM y otras de las tantas soluciones que ofrecemos en Techrevive para que tu equipo trabaje de manera rápida y opere múltiples tareas sin problema alguno.</p>
              <div className={styles.diagnosticos}>
                <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
              </div>
            </div>
            <Image src="hardware.jpg" alt="optimizacion de hardware" />
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls2}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.arreglos1} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
            <Image src="placa-madre.jpg" alt="reparacion de placa madre" />
            <div>
              <p>Si tu equipo no volvió a encender, sufrió el derrame de algún líquido o un severo corte de luz, no te precipites a comprar uno nuevo, tiene solución. En Techrevive somos especialistas en la reparación de Notebook, All in One y PC. Contamos con un laboratorio de última tecnología que nos permite realizar cualquier tipo de reparación electrónica en las placas madre y otros componentes.</p>
              <div className={styles.diagnosticos}>
                <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls3}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.arreglos2} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
            <div>
              <p>Repuestos nuevos y originales. Si tu teclado presenta fallas en varias de sus teclas, sufrió algún derrame de líquido o dejo de funcionar en su totalidad, es normal y parte del uso propio de tu notebook. Llevamos a cabo un proceso de trabajo metódico para este tipo de problemas, ya que exige el desarme total del equipo para realizar el cambio efectivo del teclado.</p>
              <div className={styles.diagnosticos}>
                <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
              </div>
            </div>
            <Image src="teclado.jpg" alt="cambio de teclado" />
          </div>
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls4}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.arreglos1} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
            <Image src="bisagras.jpg" alt="cambio de bisagras" />
            <div>
              <p>El problema más frecuente y demandante del service. Las bisagras cuentan con tornillos y soporte en cada uno de sus laterales, los mismos cuentan con una lubricación que se pierde a través del uso. Es importante realizar una reparación inmediata para no perjudicar otros componentes internos del equipo y que la falla sea más grave. Nuestro trabajo  metódico realiza la reparación y lubricación de manera efectiva para que tu equipo pueda seguir siendo utilizado a mediano y largo plazo.</p>
              <div className={styles.diagnosticos}>
                <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref5}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls5}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.arreglos2} data-aos="zoom-in" data-aos-offset="300" data-aos-duration="400">
            <div>
              <p>Contamos con baterías originales y alternativas, internas y externas. Es importante realizarle un cambio de batería a su equipo, ya que al pasar de los meses/años se va deteriorando su uso y produciendo hinchazón en las celdas de la misma. Esto puede causar derrame de líquido (litio) en el interior de su notebook, afectando así a componentes internos del dispositivo, y pudiendo causar hasta cortocircuitos no deseados. Además de los daños que ocasionaría en su laptop, puede afectar a su salud, ya que son propensas a explotar en algunos casos. Contamos con un equipo profesional y capacitado para manipular estos repuestos y brindar alternativas eficientes.</p>
              <div className={styles.diagnosticos}>
                <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><Image src="diagnosticos.jpg" alt="diagnosticos sin cargo" /></a>
              </div>
            </div>
            <Image src="bateria.jpg" alt="cambio de batería" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}