import styles from './Projects.module.css';

function Projects() {
    return (
        <div id="projects" className={styles.outer}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.headerArea}>
                        <div className={styles.header}>My Projects</div>
                        <div className={styles.projectTitle}>Scrabble Game{/*depends on project title from component*/ }</div>
                    </div>
                    <div className={styles.contextArea}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;