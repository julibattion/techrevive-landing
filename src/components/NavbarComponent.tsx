'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

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
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">TECHREVIVE</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                <NavbarItem isActive>
                    <Link href="inicio" aria-current="page">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="nosotros">
                        Nosotros
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="servicios">
                        Servicios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="clientes">
                        Clientes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="contactos">
                        Contactos
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
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
