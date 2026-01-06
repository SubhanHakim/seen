import React, { useEffect, useRef } from 'react';

const DynamicBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const orbs: { x: number, y: number, r: number, vx: number, vy: number, color: string }[] = [];

        // Create 3 large ambient "aurora" blobs
        for (let i = 0; i < 3; i++) {
            orbs.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 300 + 200,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                color: i === 0 ? '#1a1a1a' : i === 1 ? '#0d1f18' : '#050510' // Dark grey, very dark teal, dark blue
            })
        }

        const animate = () => {
            ctx.fillStyle = '#030303';
            ctx.fillRect(0, 0, width, height);

            orbs.forEach(orb => {
                orb.x += orb.vx;
                orb.y += orb.vy;

                if (orb.x < -orb.r) orb.x = width + orb.r;
                if (orb.x > width + orb.r) orb.x = -orb.r;
                if (orb.y < -orb.r) orb.y = height + orb.r;
                if (orb.y > height + orb.r) orb.y = -orb.r;

                const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(1, 'transparent');

                ctx.globalCompositeOperation = 'screen';
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalCompositeOperation = 'source-over';

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />;
}

export default DynamicBackground;
