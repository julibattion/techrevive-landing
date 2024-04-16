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

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-secondary opacity-95 mt-[-4rem]">
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
                    <Link href="inicio" aria-current="page" className="text-white">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="nosotros" className="text-white">
                        Nosotros
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="servicios" className="text-white">
                        Servicios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="clientes" className="text-white">
                        Clientes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="contactos" className="text-white">
                        Contactos
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-secondary">
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
