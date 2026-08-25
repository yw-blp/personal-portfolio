import { useRef } from 'react';
import styles from './Home.module.css';

function Home() {
    const innerRef = useRef(null);
    const gridOverlayRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = innerRef.current.getBoundingClientRect();
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
        <div className={styles.outer}>
            <div
                ref={innerRef}
                className={styles.inner}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className={styles.dotOverlay} />
                <div ref={gridOverlayRef} className={styles.gridOverlay} data-active="false" />
            </div>
        </div>
    );
}

export default Home;
