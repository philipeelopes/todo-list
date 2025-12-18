import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${Styles.link} ${Styles.active}` : Styles.link
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/tarefas"
        className={({ isActive }) =>
          isActive ? `${Styles.link} ${Styles.active}` : Styles.link
        }
      >
        Tarefas
      </NavLink>

      <NavLink
        to="/nova-tarefa"
        className={({ isActive }) =>
          isActive ? `${Styles.link} ${Styles.active}` : Styles.link
        }
      >
        Nova Tarefa
      </NavLink>

    </nav>
  );
}
