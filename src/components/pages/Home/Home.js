import styles from './Home.module.scss';
import homeGif from '../../../assets/full-stack-development.gif';

const HomePage = () => (
    <div className={styles.Home} data-testid="Home">
        <div className={styles.Home_title}>Still another portfolio</div>
        <div className={styles.Home_subtitle}>
            This is William Sauvan, a full stack curious developer
        </div>
        <div className={styles.Home_homegif}>
            <img src={homeGif} alt="gif animation" />
        </div>
    </div>
);

export default HomePage;
