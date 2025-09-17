import {motion} from 'motion/react';
import cowboyImage from '../../../06-shared/images/cowboy-me.png';
import './cowboy-avatar.css';

export const CowboyAvatar = () => {
    return (
        <motion.div
            className="wanted-poster-container"
            initial={{scale: 0.8, rotate: -5, opacity: 0}}
            animate={{scale: 1, rotate: 3, opacity: 1}}
            transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 10
            }}
        >
            <div className="wanted-poster">
                <div className="poster-background">
                    <img
                        src={cowboyImage}
                        alt="Cowboy Ryner"
                        className="poster-bg-image"
                    />
                </div>

                <h2 className="wanted-text">WANTED</h2>

                {/* Bullet holes */}
                <div className="bullet-hole hole-1"></div>
                <div className="bullet-hole hole-2"></div>
                <div className="bullet-hole hole-3"></div>

                {/* Torn edges effect */}
                <div className="torn-edge top"></div>
                <div className="torn-edge bottom"></div>
            </div>
        </motion.div>
    );
};