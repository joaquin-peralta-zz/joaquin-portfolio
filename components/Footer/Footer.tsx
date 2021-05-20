import styles from '@styles/components/Footer.module.scss';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <hr className={styles.divisor} />
        <IconContext.Provider value={{ size: '36px', color: '#AEB9C2' }}>
          <FaLinkedin className="mr-3" />
          <FaGithub />
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
