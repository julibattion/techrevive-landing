import CarouselComponent from "@/components/CarouselComponent";
import React from "react";

export default function BrandComponent() {
    return (
        <>
            <section className="marcas">
                <div className="titulo">
                    <h2>Especialistas en las siguientes <span>marcas</span></h2>
                </div>
            </section>
            <CarouselComponent />
        </>
    );
}