import React, { useEffect } from "react";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import styles from './data.module.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DataComponent() {
    const controls = useAnimation();
    const { ref: refData, inView: inViewData } = useInView();

    useEffect(() => {
        if (inViewData) {
            controls.start({ opacity: 1, scale: 1 });
        }
    }, [controls, inViewData,]);

    return (
        <section className={styles.data}>
            <motion.div
                ref={refData}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.container}>
                    <Card className="w-full">
                        <CardHeader className="flex gap-3">
                            <div className="p-1 rounded-md bg-primary-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-md">Horarios de atención al público</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Lunes a viernes de <b>9:30 a 18:30hs.</b> <br /> Sábados <b>solo con cita previa.</b></p>
                        </CardBody>
                    </Card>

                    <Card className="w-full">
                        <CardHeader className="flex gap-3">
                            <div className="p-1 rounded-md bg-primary-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>

                            </div>
                            <div className="flex flex-col">
                                <p className="text-md">Whatsapp</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                        <a href="https://api.whatsapp.com/send/?phone=3415024695" target="_blank"><p>Tel. 3415024695</p></a>
                        </CardBody>
                    </Card>

                    <Card className="w-full">
                        <CardHeader className="flex gap-3">
                            <div className="p-1 rounded-md bg-primary-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-md">Correo</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>techrevive.informatica@gmail.com</p>
                        </CardBody>
                    </Card>
                </div>
            </motion.div>
        </section>
    );
}