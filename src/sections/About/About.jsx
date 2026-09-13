import styles from './About.module.css';

function About() {
    return (
        <div id="about" className={styles.outer}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.frame} />
                    <div className={styles.textArea}>
                        <div className={styles.header}>About Me {/*<span className={styles.subHeader}>and ofdofs</span>*/}</div>
                        <p>
                            I'm a frontend developer who cares as much about the pixels as the
                            performance. I design and build interfaces.
                        </p>
                        <p>
                            I'm a frontend developer who cares as much about the pixels as the
                            performance. I design and build interfaces that feel considered — from
                            the motion on a hover state down to how a layout breathes at different
                            screen sizes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
