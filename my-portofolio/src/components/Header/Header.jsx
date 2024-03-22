import { useState } from 'react';
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import styles from './Header.module.scss';

const Header = () => {
  const [isLight, setIsLight] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imgContainer}>
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
                className={styles.sunIcon}
              />
            ) : (
              <MoonIcon
                onClick={() => setIsLight(!isLight)}
                className={styles.moonIcon}
              />
            )}
            <button className={styles.downloadBtn}>
              <p>Download CV</p>
            </button>
          </div>
        </div>
        <div className={styles.drawerIconContainer}>
          <Bars3Icon onClick={toggleDrawer} className={styles.barsIcon} />
        </div>
      </header>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className={styles.drawerContainer}>
          <img src="/logo.png" alt="logo" />
          <hr />
          <h1 style={{ color: 'red' }}>Hello World</h1>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
