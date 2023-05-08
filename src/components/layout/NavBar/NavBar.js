import React from 'react';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const navbarActiveCheckboxId = 'navbaractive';
const getLinkClass = ({ isActive }) =>
    isActive
        ? styles.NavBar_link + ' ' + styles.NavBar_link___active
        : styles.NavBar_link;
const onNavLinkClick = () => {
    document.getElementById(navbarActiveCheckboxId).checked = false;
};
const NavBar = () => {
    return (
        <div className={styles.NavBar} data-testid="NavBar">
            <input
                type="checkbox"
                className={styles.NavBar_activeInput}
                id={navbarActiveCheckboxId}
            />
            <label
                htmlFor={navbarActiveCheckboxId}
                className={styles.NavBar_activeLabel}
            >
                <i className="fas fa-bars"></i>
            </label>
            <div className={styles.NavBar_wrapper}>
                <NavLink
                    to="/"
                    className={getLinkClass}
                    onClick={onNavLinkClick}
                >
                    <label htmlFor="navbaractive">Home</label>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={getLinkClass}
                    onClick={onNavLinkClick}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/projects"
                    className={getLinkClass}
                    onClick={onNavLinkClick}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/skills"
                    className={getLinkClass}
                    onClick={onNavLinkClick}
                >
                    Skills
                </NavLink>
            </div>
        </div>
    );
};

NavBar.defaultProps = {};

export default NavBar;
