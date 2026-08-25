import { useRef } from 'react';
import styles from './Home.module.css';

function Home() {
    const outerRef = useRef(null);
    const gridOverlayRef = useRef(null);
    const borderOverlayRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = outerRef.current.getBoundingClientRect();
        borderOverlayRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        borderOverlayRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        gridOverlayRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        gridOverlayRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    const handleMouseEnter = () => {
        gridOverlayRef.current.dataset.active = 'true';
    };

    const handleMouseLeave = () => {
        gridOverlayRef.current.dataset.active = 'false';
    };

    return (
        <div ref={outerRef} className={styles.outer} onMouseMove={handleMouseMove}>
            <div
                className={styles.inner}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={styles.dotOverlay} />
                <div ref={borderOverlayRef} className={styles.borderOverlay} />
                <div ref={gridOverlayRef} className={styles.gridOverlay} data-active="false" />
            </div>
        </div>
    );
}

export default Home;
