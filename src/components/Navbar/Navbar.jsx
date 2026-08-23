import { useState } from 'react';
import useTheme from '../../hooks/useTheme';
import styles from './Navbar.module.css';
import { FiSun, FiMoon } from 'react-icons/fi';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    return (
        <nav className={styles.navbar}>
            <div className={styles.inner}>
                <button
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <span className={styles.menuIcon} data-open={menuOpen} />
                </button>

                <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setMenuOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className={styles.themeToggle}
                    onClick={toggleTheme}
                    aria-label={`Switch to ${nextTheme} mode`}
                >
                    {theme === 'light' ? (
                        <FiMoon className={styles.moonIcon} />
                    ) : (
                        <FiSun className={styles.sunIcon} />
                    )}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
