import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={styles.NavBar} data-testid="NavBar">
            <div>
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

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
