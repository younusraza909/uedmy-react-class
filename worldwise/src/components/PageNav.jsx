import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css"
//for Nav we can use Link and NavLink but with NavLink we know currently selected nav

function PageNav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
