import { MapPinIcon } from '@heroicons/react/24/outline';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.avatarWrapper}>
            <img src="/avatar.jpeg" alt="avatar" className={styles.avatar} />
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionWrapper}>
            <h1 className={styles.titleDescription}>Hi, I'm Asraf 👋</h1>
            <p className={styles.textDescription}>
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className={styles.locationContainer}>
            <div className={styles.iconContainer}>
              <MapPinIcon className={styles.locationIcon} />
              <div className={styles.dot}></div>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.locationText}>Bandung, Indonesia</p>
              <p className={styles.locationText}>Available for new projects</p>
            </div>
          </div>
          <div className={styles.socialWrapper}>
            <img src="/icons/github.png" alt="github" />
            <img src="/icons/twitter.png" alt="twitter" />
            <img src="/icons/figma.png" alt="figma" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
