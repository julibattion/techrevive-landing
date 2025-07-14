'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const brands = [
    { src: '/acer.png', alt: 'Acer' },
    { src: '/dell.png', alt: 'Dell' },
    { src: '/hp.png', alt: 'HP' },
    { src: '/lenovo.png', alt: 'Lenovo' },
    { src: '/asus.png', alt: 'Asus' },
    { src: '/bangho.png', alt: 'Bangho' },
];

export default function CarouselComponent() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 500) setVisibleCount(1);
            else if (width < 768) setVisibleCount(2);
            else setVisibleCount(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const container = carouselRef.current;
        if (!container) return;

        const scrollStep = () => {
            if (isDragging.current || !container) return;

            const blockWidth = container.clientWidth / visibleCount;
            container.scrollBy({ left: blockWidth, behavior: 'smooth' });

            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            }
        };

        const interval = setInterval(scrollStep, 3000);
        return () => clearInterval(interval);
    }, [visibleCount]);

    const handleMouseDown = (e: React.MouseEvent) => {
        const container = carouselRef.current;
        if (!container) return;
        isDragging.current = true;
        startX.current = e.pageX - container.offsetLeft;
        scrollLeft.current = container.scrollLeft;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !carouselRef.current) return;
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = x - startX.current;
        carouselRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const stopDrag = () => {
        isDragging.current = false;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const container = carouselRef.current;
        if (!container) return;
        isDragging.current = true;
        startX.current = e.touches[0].pageX - container.offsetLeft;
        scrollLeft.current = container.scrollLeft;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current || !carouselRef.current) return;
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = x - startX.current;
        carouselRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const stopTouch = () => {
        isDragging.current = false;
    };

    const loopedBrands = [...brands, ...brands];

    const getBasisClass = () => {
        if (visibleCount === 1) return 'basis-full';
        if (visibleCount === 2) return 'basis-1/2';
        return 'basis-1/3';
    };

    return (
        <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide"
            style={{
                width: '100%',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                cursor: isDragging.current ? 'grabbing' : 'grab',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={stopTouch}
        >
            {loopedBrands.map((brand, i) => (
                <div
                    key={i}
                    className={`flex-shrink-0 flex justify-center items-center ${getBasisClass()}`}
                    style={{ scrollSnapAlign: 'start' }}
                >
                    <div
                        style={{
                            width: '85%',
                            maxWidth: '160px',
                            height: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            src={brand.src}
                            alt={brand.alt}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}









