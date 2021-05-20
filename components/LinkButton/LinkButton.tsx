import styles from '@styles/components/LinkButton.module.scss';
import { MdArrowForward } from 'react-icons/md';

type Props = {
  children: string;
  className?: string;
};

const LinkButton = ({ children, className }: Props) => {
  return (
    <div className={className}>
      <MdArrowForward style={{ color: '#AEB9C2' }} />
      <button className={styles.button} type="button">
        {children}
      </button>
    </div>
  );
};

LinkButton.defaultProps = {
  className: 'inline-block',
};

export default LinkButton;
