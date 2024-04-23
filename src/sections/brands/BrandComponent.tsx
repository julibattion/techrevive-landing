import CarouselComponent from "@/components/CarouselComponent";
import React from "react";
import styles from './brands.module.css'

export default function BrandComponent() {
    return (
        <>
            <section className={styles.marcas}>
                <div className={styles.titulo}>
                    <h2>Especialistas en las siguientes <span>marcas</span></h2>
                </div>
            </section>
            <CarouselComponent />
        </>
    );
}