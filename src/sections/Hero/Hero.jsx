import { useRef } from 'react';
import useRelativeMousePosition from '../../hooks/useRelativeMousePosition';
import styles from './Hero.module.css';

function Hero() {
    const innerRef = useRef(null);

    useRelativeMousePosition(innerRef);

    return (
        <section id="hero" className={styles.outer}>
            <div ref={innerRef} className={styles.inner}>
                {/*<div className={styles.dotOverlay} />
                <div className={styles.borderOverlay} />
                <div className={styles.gridOverlay} />*/}
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.eyebrow}>Frontend Developer</div>
                        <div className={styles.name}>
                            Yuuki
                            <br />
                            Watanabe
                        </div>
                    </div>
                    <div className={styles.frame} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
