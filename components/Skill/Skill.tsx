import { forwardRef } from 'react';
import styles from '@styles/components/Skill.module.scss';

type Props = {
  skill: string;
};

const Skill = forwardRef<HTMLParagraphElement, Props>(({ skill }, ref) => {
  return (
    <p ref={ref} className={styles.item}>
      {skill}
    </p>
  );
});

export default Skill;
