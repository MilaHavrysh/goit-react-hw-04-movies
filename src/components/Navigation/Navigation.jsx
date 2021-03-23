import { Link } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_list_item}>
            <Link to={routes.home} className={styles.nav_list_link}>
              HOME
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link to={routes.movies} className={styles.nav_list_link}>
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
