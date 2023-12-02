import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import styles from './Header.module.css';
import ThemeSwitch from './ThemeSwitch';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className="wrapper center-y justify-between  h-full">
        {pathname !== '/' ? (
          <Link to="/">
            <Logo />
          </Link>
        ) : (
          <Logo />
        )}
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
