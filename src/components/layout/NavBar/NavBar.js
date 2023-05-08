import React from 'react';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={styles.NavBar} data-testid="NavBar">
            <input
                type="checkbox"
                className={styles.NavBar_activeInput}
                id="navbaractive"
            />
            <label htmlFor="navbaractive" className={styles.NavBar_activeLabel}>
                <i className="fas fa-bars"></i>
            </label>
            <div className={styles.NavBar_wrapper}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? styles.NavBar_link___active
                            : styles.NavBar_link
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? styles.NavBar_link___active
                            : styles.NavBar_link
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive
                            ? styles.NavBar_link___active
                            : styles.NavBar_link
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                        isActive
                            ? styles.NavBar_link___active
                            : styles.NavBar_link
                    }
                >
                    Skills
                </NavLink>
            </div>
        </div>
    );
};

NavBar.defaultProps = {};

export default NavBar;
