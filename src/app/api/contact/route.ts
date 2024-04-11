import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: any, response: any) {
    const { name, email, message, subject } = await request.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.NEXT_PUBLIC_USER,
            pass: process.env.NEXT_PUBLIC_PASS
        }
    });

    try {
        await transporter.sendMail({
            from: 'cresporodrigomanuel@gmail.com',
            to: 'cresporodrigomanuel@gmail.com',
            subject: `Mensaje de ${name} - ${subject}`,
            text: '',
            html: `<div><b>Correo Electrónico:</b> <p>${email}</p><b>Nombre:</b> <p>${name}</p></div><div><b>Mensaje:</b> <p>${message}</p></div>`
        });

        return NextResponse.json('Mensaje enviado correctamente.');
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        return NextResponse.json('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
}

