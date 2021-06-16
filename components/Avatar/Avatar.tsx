import { forwardRef } from 'react';
import styles from '@styles/components/Avatar.module.scss';
import Image from 'next/image';

type AvatarProps = {
  src: string;
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({ src }, ref) => {
  return (
    <div ref={ref} className={styles.avatarContainer}>
      <Image
        src={src}
        alt="My profile picture"
        width={256}
        height={256}
        layout="intrinsic"
        className={styles.avatar}
      />
    </div>
  );
});

export const AvatarInfo = () => {
  return (
    <ul className={styles.desktopList}>
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
  );
};
