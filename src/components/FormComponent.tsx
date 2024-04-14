'use client'

import React, { useState } from 'react';
import axios from 'axios';

interface FormModel {
    name: string;
    email: string;
    message: string;
    subject: string;
}

const FormComponent = () => {
    const [formData, setFormData] = useState<FormModel>({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', formData);
            alert('¡Mensaje enviado correctamente!');
            setFormData({
                name: '',
                email: '',
                message: '',
                subject: '',
            });
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div className='m-auto my-10 px-4 max-w-[600px]'>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-row">
                        <div className="name">
                            <input
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                name="name"
                                id="name"
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="email">
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type="text"
                                name="email"
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                id="email"
                                placeholder="Email" />
                        </div>
                    </div>
                    <div className="subject">
                        <input
                            value={formData.subject}
                            onChange={handleChange}
                            type="text"
                            name="subject"
                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="subject"
                            placeholder="Asunto"
                        />
                    </div>
                    <div className="message">
                        <textarea
                            name="message"
                            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="message"
                            placeholder="Mensaje">
                        </textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-2"
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
