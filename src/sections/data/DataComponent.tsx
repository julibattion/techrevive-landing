import React from "react";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import styles from './data.module.css'

export default function DataComponent() {
    return (
        <section className={styles.data}>
            <div className={styles.container}>
                <Card shadow='none' className='w-[100%]'>
                    <CardHeader>
                        <div className="w-[100%] flex items-center justify-center gap-2 mb-2">
                            <Image width={25} height={25} src="horarios.png" alt="icono horarios" />
                            <h3 className='font-semibold'>Horarios de atención al público</h3>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className='text-center'>
                        <p>Lunes a viernes de <b>9 a 18hs.</b> <br /> Sábados de <b>9:30 a 13hs.</b></p>
                    </CardBody>
                </Card>

                <Card shadow='none' className='w-[100%]'>
                    <CardHeader>
                        <div className="w-[100%] flex items-center justify-center gap-2 mb-2">
                            <Image radius='none' width={25} height={25} src="wpp.png" alt="icono whastapp" />
                            <h3 className='font-semibold'>Whatsapp</h3>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className='text-center'>
                        <p>Tel. 3415024695</p>
                    </CardBody>
                </Card>

                <Card shadow='none' className='w-[100%]'>
                    <CardHeader>
                        <div className="w-[100%] flex items-center justify-center gap-2 mb-2">
                            <Image radius='none' width={25} height={25} src="mail.png" alt="icono whastapp" />
                            <h3 className='font-semibold'>Escribinos</h3>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className='text-center'>
                        <p>techrevive.informatica@gmail.com</p>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}