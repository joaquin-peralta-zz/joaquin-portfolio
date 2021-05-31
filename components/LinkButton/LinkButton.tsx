import { MouseEventHandler } from 'react';
import styles from '@styles/components/LinkButton.module.scss';
import { MdArrowForward } from 'react-icons/md';

type Props = {
  children: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const LinkButton = ({ children, className, onClick }: Props) => {
  return (
    <div className={className}>
      <MdArrowForward style={{ color: '#AEB9C2' }} />
      <button className={styles.button} type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

LinkButton.defaultProps = {
  className: 'inline-block',
  onClick() {
    return false;
  },
};

export default LinkButton;
