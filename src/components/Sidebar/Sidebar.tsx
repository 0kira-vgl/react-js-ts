import { PencilLine } from "phosphor-react";
import styles from "../Sidebar/Sidebar.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/400x/3e/06/69/3e0669b78067e08f2f7678769ae4e9ac.jpg"
      />

      <div className={styles.profile}>
        <Avatar src="https://i.pinimg.com/564x/f0/9e/93/f09e93c3a92bc9532638ef384ce3ea46.jpg" />

        <strong>Akira Hayama</strong>
        <span>Programador</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
