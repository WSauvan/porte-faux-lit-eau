import styles from './Home.module.scss';
import homeGif from '../../../assets/full-stack-development.gif';
import ModalButton from '../../layout/Modal/ModalButton/ModalButton.lazy';
import NavigateButton from '../../NavigateButton/NavigateButton.lazy';

const HomePage = () => (
    <div className={styles.Home} data-testid="Home">
        <div className={styles.Home_title}>Still another portfolio</div>
        <div className={styles.Home_paragraph}>
            This is William Sauvan, a full stack curious developer
        </div>
        <div className={styles.Home_paragraph}>
            <NavigateButton label="Know more about me" link="/skills">
                Know more about me
            </NavigateButton>
        </div>
        <div className={styles.Home_homegif}>
            <img
                className={styles.Home_homegif_image}
                src={homeGif}
                alt="gif animation"
            />
        </div>
        <div className={styles.Home_homegif}>
            <ModalButton>
                <div className={styles.Home_modalContent}>
                    Why did you click on me ?
                </div>
            </ModalButton>
        </div>
    </div>
);

export default HomePage;
