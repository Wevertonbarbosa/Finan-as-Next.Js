'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slide1 from './slides/slide1';
import Slide2 from './slides/slide2';
import Slide3 from './slides/slide3';
import Slide4 from './slides/slide4';

const slides = [Slide1, Slide2, Slide3, Slide4];

export default function Slides() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const controls = useAnimation();

    const handleDragEnd = (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (info.offset.x > 100) {
            prevSlide();
        } else if (info.offset.x < -100) {
            nextSlide();
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        console.log(currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        console.log(currentSlide - 1);
    };

    return (
        <div className="relative h-screen w-full bg-green-50 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                >
                    {slides[currentSlide]()}
                </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index
                                ? 'bg-green-600'
                                : 'bg-green-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-lg hidden md:block"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                disabled={currentSlide + 1 === 4}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-lg hidden md:block"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}
