// 카드 기울기

import { useState, useCallback } from "react"

const useTilt = (maxRotateX = 30, maxRotateY = 20) => {
    const [style, setStyle] = useState({
        transform: "perspective(1000px) rotateX(0deg) rotate(0deg)",
        transition: "transform .5s ease",
    });

    const handleMouseMove = (e) => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();

        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        const rotateX = -y * maxRotateX;
        const rotateY = x * maxRotateY;

        setStyle({
            transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`,
            transition: "transform .1s ease-out",
        }, [maxRotateX, maxRotateY]);
    };

    const handleMouseLeave = useCallback(() => {
        setStyle({
            transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
            transition: "transform .5s ease-in-out",
        });
    }, []);

    return {
        style,
        handleMouseMove,
        handleMouseLeave,
    };
};

export default useTilt;