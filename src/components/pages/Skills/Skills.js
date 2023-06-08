import './Skills.scss';
import ProgressBar from '../../layout/ProgressBar/ProgressBar';

const SkillsPage = () => (
    <div className="skills">
        <div className="skills__group">
            <div className="skills__group-title">Languages</div>
            <div className="skills__group-bars">
                <ProgressBar skillLevel={95} label={'Php'}></ProgressBar>
                <ProgressBar skillLevel={90} label={'css/scss'}></ProgressBar>
                <ProgressBar skillLevel={90} label={'js'}></ProgressBar>
                <ProgressBar skillLevel={70} label={'SQL'}></ProgressBar>
            </div>
        </div>
        <div className="skills__group">
            <div className="skills__group-title">Frameworks&CMS</div>
            <div className="skills__group-bars">
                <ProgressBar skillLevel={80} label={'Laravel'}></ProgressBar>
                <ProgressBar skillLevel={95} label={'Drupal'}></ProgressBar>
                <ProgressBar skillLevel={85} label={'Wordpress'}></ProgressBar>
                <ProgressBar skillLevel={60} label={'Magento'}></ProgressBar>
                <ProgressBar skillLevel={60} label={'VueJs'}></ProgressBar>
                <ProgressBar skillLevel={50} label={'React'}></ProgressBar>
                <ProgressBar
                    skillLevel={20}
                    label={'React native'}
                ></ProgressBar>
            </div>
        </div>
    </div>
);

export default SkillsPage;
