'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './contact.module.css';

interface FormModel {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
}

const COOLDOWN_SECONDS = 20;
const FormComponent = () => {
    const [formData, setFormData] = useState<FormModel>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [cooldown, setCooldown] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (cooldown <= 0 && timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, [cooldown]);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const startCooldown = () => {
        setCooldown(COOLDOWN_SECONDS);
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCooldown((s) => s - 1);
        }, 1000);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading || cooldown > 0) return;

        const { name, email, subject, message } = formData;
        if (
            name.trim().length < 2 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
            subject.trim().length < 3 ||
            message.trim().length < 10
        ) {
            alert('Completá todos los campos correctamente.');
            return;
        }

        try {
            setLoading(true);

            const jitter = Math.floor(800 + Math.random() * 400);
            await sleep(jitter);

            await axios.post('/api/contact', formData, {
                headers: { 'Content-Type': 'application/json' },
            });

            alert('¡Mensaje enviado correctamente!');
            setFormData({ name: '', email: '', subject: '', message: '' });

            startCooldown();
        } catch (err: any) {
            console.error('Error al enviar el mensaje:', err);
            const msg =
                err?.response?.data?.error ??
                'Hubo un error al enviar el mensaje. Intentá más tarde.';
            alert(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="m-auto max-w-[600px]">
            <div>
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className={styles.inputGroup}>
                        <div className={styles.inputRow}>
                            <div className={styles.name}>
                                <input
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    minLength={2}
                                    className="mb-2 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className={styles.email}>
                                <input
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="mb-2 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div className="subject">
                            <input
                                value={formData.subject}
                                onChange={handleChange}
                                type="text"
                                name="subject"
                                id="subject"
                                required
                                minLength={3}
                                className="mb-2 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Asunto"
                            />
                        </div>

                        <div className="message">
                            <textarea
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                id="message"
                                required
                                minLength={10}
                                className="mb-2 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Mensaje"
                                style={{ height: 120 }}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading || cooldown > 0}
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-2 disabled:opacity-50"
                            >
                                {loading
                                    ? 'Enviando…'
                                    : cooldown > 0
                                        ? `Reintentar en ${cooldown}s`
                                        : 'Enviar'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;

