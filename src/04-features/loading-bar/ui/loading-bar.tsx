import {animate, motion, useMotionValue, useTransform} from 'motion/react';
import {useEffect, useRef} from 'react';
import './loading-bar.css';
import {SocialLinks} from "../../social-links/ui/social-links.tsx";

export const LoadingBar = () => {
    const progress = useMotionValue(0);
    const width = useTransform(progress, [0, 100], ['0%', '100%']);
    const scaleY = useMotionValue(1);
    const opacity = useMotionValue(1);
    const animationRef = useRef<any>(null);

    useEffect(() => {
        const runAnimation = async () => {
            // Cancel any existing animation
            if (animationRef.current) {
                animationRef.current.stop();
            }

            // Loading animation (0 to 100)
            const loadDuration = 2 + Math.random() * 1;
            await animate(progress, 100, {
                duration: loadDuration,
                ease: [0.43, 0.13, 0.23, 0.96],
            });

            // Subtle "breathing" effect - vertical expansion
            await Promise.all([
                animate(scaleY, [1, 1.05, 1], {
                    duration: 0.6,
                    ease: "easeInOut",
                }),
                animate(opacity, [1, 0.9, 1], {
                    duration: 0.6,
                    ease: "easeInOut",
                })
            ]);

            // Small pause
            await new Promise(resolve => setTimeout(resolve, 200));

            // Deloading animation (100 to 0)
            const deloadDuration = 1.5 + Math.random() * 0.5;
            await animate(progress, 0, {
                duration: deloadDuration,
                ease: [0.23, 0.96, 0.43, 0.13], // Reversed easing
            });

            // Small pause before restarting
            await new Promise(resolve => setTimeout(resolve, 300));

            // Restart the animation
            runAnimation();
        };

        runAnimation();

        return () => {
            if (animationRef.current) {
                animationRef.current.stop();
            }
        };
    }, [progress, scaleY, opacity]);

    return (
        <div className="loading-container">
            <h1 className="loading-text">
                <span className="text-bg">RYNER GOLD</span>
                <motion.span
                    className="text-fill"
                    style={{width, scaleY, opacity, transformOrigin: 'left center'}}
                >
                    RYNER GOLD
                </motion.span>
            </h1>
            <div className="loading-subtitle">
                <div>PORTFOLIO</div>
                <div>UNDER CONSTRUCTION</div>
            </div>
            <SocialLinks/>
        </div>
    );
};