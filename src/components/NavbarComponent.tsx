'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Image } from "@nextui-org/react";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Incio",
        "Servicios",
        "Nosotros",
        "Clientes",
        "Contactos"
    ];

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen} className="bg-secondary opacity-90 mt-[-4rem] px-5 max-[600px]:px-0">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white"
                />
                <NavbarBrand>
                    <Image src="logo.png" alt="logo" width={40} height={40} radius="none" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                <NavbarItem>
                    <p className="text-white cursor-pointer" onClick={() => scrollToSection('inicio')}>
                        Inicio
                    </p>
                </NavbarItem>
                <NavbarItem>
                    <p className="text-white cursor-pointer" onClick={() => scrollToSection('nosotros')}>
                        Nosotros
                    </p>
                </NavbarItem>
                <NavbarItem>
                    <p className="text-white cursor-pointer" onClick={() => scrollToSection('servicios')}>
                        Servicios
                    </p>
                </NavbarItem>
                <NavbarItem>
                    <p className="text-white cursor-pointer" onClick={() => scrollToSection('clientes')}>
                        Clientes
                    </p>
                </NavbarItem>
                <NavbarItem>
                    <p className="text-white cursor-pointer" onClick={() => scrollToSection('contacto')}>
                        Contactos
                    </p>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-secondary opacity-90">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-white"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
