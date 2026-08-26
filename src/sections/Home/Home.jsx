import { useRef } from 'react';
import useRelativeMousePosition from '../../hooks/useRelativeMousePosition';
import styles from './Home.module.css';

function Home() {
    const innerRef = useRef(null);

    useRelativeMousePosition(innerRef);

    return (
        <div className={styles.outer}>
            <div ref={innerRef} className={styles.inner}>
                <div className={styles.dotOverlay} />
                <div className={styles.borderOverlay} />
                <div className={styles.gridOverlay} />
            </div>
        </div>
    );
}

export default Home;
