import useTheme from '../../hooks/useTheme';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    return (
        <nav>
            {/* ...other nav content... */}
            <button onClick={toggleTheme} aria-label={`Switch to ${nextTheme} mode`}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </nav>
    );
}

export default Navbar;
