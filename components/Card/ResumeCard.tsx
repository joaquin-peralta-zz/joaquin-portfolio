import styles from '@styles/components/Card.module.scss';

type Props = {
  title: string;
  years: string[];
  institution: string;
};

const ResumeCard = ({ title, years, institution }: Props) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.years}>{`${years[0]} - ${years[1]}`}</p>
      <p className={styles.institution}>{institution}</p>
    </div>
  );
};

export default ResumeCard;
