import { useState } from 'react';
import styles from '@styles/components/Navbar.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdMenu, MdClose } from 'react-icons/md';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import items from './menuData.json';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <Container fluid className="h-100">
          <Row className="h-100 align-items-center justify-content-between">
            <Col>
              <button
                className={styles.menuButton}
                type="button"
                onClick={() => setShowNav(!showNav)}
              >
                {!showNav && <MdMenu style={{ fontSize: '24px', color: '#60B6F8' }} />}
                {showNav && <MdClose style={{ fontSize: '24px', color: '#60B6F8' }} />}
              </button>
            </Col>
            <Col className="text-right">
              <button className={styles.langButton} type="button">
                ES
              </button>
              <button className={styles.langButton} type="button">
                EN
              </button>
            </Col>
          </Row>
        </Container>
      </header>
      <nav className={showNav ? styles.navContainerOpen : styles.navContainer}>
        <ul className={styles.navList}>
          {items.map((item) => (
            <Link key={item.title} href={item.link}>
              <a
                onClick={() => setShowNav(false)}
                onKeyDown={() => setShowNav(false)}
                role="link"
                tabIndex={0}
              >
                <li>{item.title}</li>
              </a>
            </Link>
          ))}
        </ul>
        <div className={styles.socialMedia}>
          <IconContext.Provider value={{ size: '36px', color: '#AEB9C2' }}>
            <a href="https://www.linkedin.com/in/joaquin-peralta-1074291ba">
              <FaLinkedin className="mr-3" />
            </a>
            <a href="https://github.com/joaquin-peralta?tab=repositories">
              <FaGithub />
            </a>
          </IconContext.Provider>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
