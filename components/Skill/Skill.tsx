import styles from '@styles/components/Skill.module.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Transition } from 'react-transition-group';
import gsap from 'gsap';

type Props = {
  skill: string;
  index: number;
  show: boolean;
};

const Skill = ({ skill, index, show }: Props) => {
  return (
    <Transition
      mountOnEnter
      unmountOnExit
      appear
      in={show}
      addEndListener={(node, done) => {
        gsap.from(node, {
          rotationY: 360,
          autoAlpha: show ? 1 : 0,
          backgroundColor: '#60B6F8',
          opacity: 0,
          duration: 0.5,
          onComplete: done,
          delay: !show ? 0 : (index + 1) * 0.15,
        });
      }}
    >
      <p className={styles.item}>{skill}</p>
    </Transition>
  );
};

export default Skill;
