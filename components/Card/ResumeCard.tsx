import styles from '@styles/components/Card.module.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Transition } from 'react-transition-group';
import gsap from 'gsap';

type Props = {
  title: string;
  years: string[];
  institution: string;
  show: boolean;
};

const ResumeCard = ({ title, years, institution, show }: Props) => {
  return (
    <Transition
      in={show}
      addEndListener={(node, done) => {
        gsap.from(node, {
          autoAlpha: show ? 1 : 0,
          scale: 0.5,
          backgroundColor: '#071D30',
          color: '#071D30',
          duration: 2,
          ease: 'elastic',
          onComplete: done,
        });
      }}
    >
      <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        <p className={styles.years}>{`${years[0]} - ${years[1]}`}</p>
        <p className={styles.institution}>{institution}</p>
      </div>
    </Transition>
  );
};

export default ResumeCard;
