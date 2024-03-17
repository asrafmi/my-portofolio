import { useState } from 'react';
import {
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import styles from './header.module.scss';

const Header = () => {
  const [isLight, setIsLight] = useState(true);
  return (
    <header className={styles.header}>
      <div className="img-container">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.listMenuContainer}>
          <ul className={styles.listMenu}>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">Testimonials</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.hrWrapper}>
          <hr />
        </div>
        <div className={styles.downloadContainer}>
          {isLight ? (
            <SunIcon
              onClick={() => setIsLight(!isLight)}
              style={{ height: 35, width: 35 }}
            />
          ) : (
            <MoonIcon
              onClick={() => setIsLight(!isLight)}
              style={{ height: 35, width: 35 }}
            />
          )}
          <button className={styles.downloadBtn}>Download CV</button>
        </div>
      </div>
    </header>
  );
};

export default Header;