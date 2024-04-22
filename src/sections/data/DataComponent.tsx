import React from "react";
import styles from './data.module.css';
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

export default function ContactComponent() {
    return (
        <section className='px-40 py-20 max-[600px]:px-5 max-[600px]:py-10'>
            <div className='flex justify-between gap-20 max-[600px]:flex-wrap max-[600px]:gap-10'>
                <Card shadow='none' className='w-[100%] bg-transaparent'>
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

                <Card shadow='none' className='w-[100%] bg-transaparent'>
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

                <Card shadow='none' className='w-[100%] bg-transaparent'>
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