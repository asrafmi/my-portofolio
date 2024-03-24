import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Chip from '../Chip/Chip';
import styles from './Work.module.scss';
import { Work as WorkItems } from './Work';

const Work = () => {
  return (
    <section className={styles.work}>
      <Chip title="Work" />
      <div className={styles.workContainer}>
        <p className={styles.descriptionText}>
          Some of the noteworthy projects I have built:
        </p>
        <div className={styles.listWorkContainer}>
          {WorkItems.list.map((work) => (
            <div
              key={work.id}
              className={styles.workCard}
              style={{ flexDirection: work.reverse ? 'row-reverse' : null }}
            >
              <div className={styles.imgContainer}>
                <img
                  src={work.img}
                  alt="work-logo"
                  className={styles.workImg}
                />
              </div>
              <div className={styles.descriptionContainer}>
                <p className={styles.workTitle}>{work.title}</p>
                <p className={styles.workDescription}>{work.description}</p>
                <div className={styles.techStack}>
                  {work.techStack.map((tech) => (
                    <Chip title={tech} key={tech} />
                  ))}
                </div>
                <ArrowTopRightOnSquareIcon className={styles.redirectIcon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
