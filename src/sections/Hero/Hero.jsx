import { useRef } from 'react';
import useRelativeMousePosition from '../../hooks/useRelativeMousePosition';
import styles from './Hero.module.css';

function Hero() {
    const innerRef = useRef(null);

    useRelativeMousePosition(innerRef);

    return (
        <div id='hero' className={styles.outer}>
            <div ref={innerRef} className={styles.inner}>
                <div className={styles.dotOverlay} />
                <div className={styles.borderOverlay} />
                <div className={styles.gridOverlay} />
                <div className={styles.content} />
            </div>
        </div>
    );
}

export default Hero;
