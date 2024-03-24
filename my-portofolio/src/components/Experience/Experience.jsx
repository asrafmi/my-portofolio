import styles from './Experience.module.scss';
import Chip from '../Chip/Chip';
import Upwork from '../../assets/experiences/logo-upwork.png';
import { experience } from './Experience';

const Experience = () => {
  return (
    <section className={styles.experience}>
      <Chip title={experience.title} />
      <div className={styles.experienceContainer}>
        <p className={styles.descriptionText}>{experience.description}</p>
        <div className={styles.listExperienceContainer}>
          {experience.list.map((item) => (
            <div key={item.id} className={styles.experienceCard}>
              <img
                src={Upwork}
                alt="experience-logo"
                className={styles.experienceLogo}
              />
              <div className={styles.experienceCardWrapper}>
                <p className={styles.timeRange}>{item.date}</p>
                <div>
                  <p className={styles.position}>{item.position}</p>

                  <ul className={styles.listDescription}>
                    {item.description.map((desc) => (
                      <li key={desc.id}>{desc.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
