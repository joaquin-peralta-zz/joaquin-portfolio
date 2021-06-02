import styles from '@styles/components/Avatar.module.scss';
import gsap from 'gsap';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Transition } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';

type AvatarProps = {
  src: string;
  transform: boolean;
};

type AvatarInfoProps = {
  transform: boolean;
};

export const Avatar = ({ src, transform }: AvatarProps) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' });
  return (
    <Transition
      in={transform}
      addEndListener={(node, done) => {
        gsap.to(node, {
          x: isDesktopOrLaptop ? -20 : 0,
          duration: 1,
          onComplete: done,
        });
      }}
    >
      <div className={styles.avatarContainer}>
        <Transition
          in={transform}
          addEndListener={(node, done) => {
            gsap.to(node, {
              borderRadius: '50% 50%',
              scale: 0.75,
              boxShadow: '0px 0px 2px 5px #60B6F8',
              duration: 1,
              onComplete: done,
            });
          }}
        >
          <Image
            src={src}
            alt="My profile picture"
            width={256}
            height={256}
            layout="intrinsic"
            className={styles.avatar}
          />
        </Transition>
      </div>
    </Transition>
  );
};

export const AvatarInfo = ({ transform }: AvatarInfoProps) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' });

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      appear
      in={transform}
      addEndListener={(node, done) => {
        gsap.to(node, {
          opacity: 1,
          duration: 1,
          delay: 0.3,
          onComplete: done,
        });
      }}
    >
      <ul className={isDesktopOrLaptop ? styles.desktopList : styles.mobileList}>
        <li>
          <span className="font-weight-bold">Nombre: </span>Joaquín Peralta.
        </li>
        <li>
          <span className="font-weight-bold">Edad: </span>25 años.
        </li>
        <li>
          <span className="font-weight-bold">Email: </span>joaquinperalta1406@gmail.com
        </li>
        <li>
          <span className="font-weight-bold">Residencia: </span>Buenos Aires, Argentina.
        </li>
        <li>
          <span className="font-weight-bold">Disponibilidad: </span>Full-time inmediata.
        </li>
      </ul>
    </Transition>
  );
};
