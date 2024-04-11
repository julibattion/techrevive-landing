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
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nombre
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                        Asunto
                    </label>
                    <div className="mt-2">
                        <input
                            id="subject"
                            name="subject"
                            type="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                        Mensaje
                    </label>
                    <div className="mt-2">
                        <input
                            id="message"
                            name="message"
                            type="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Consultar
                    </button>
                </div>
            </form>


            {/* <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="subjetc">Subject:</label>
                    <input type="text" id="subjetc" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Consulta:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit">Enviar</button>
            </form> */}
        </div>
    );
};

export default FormComponent;
