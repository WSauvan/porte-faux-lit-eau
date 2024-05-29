import './Contact.scss';
import { CContainer } from '@coreui/react';

const ContactPage = () =>
    <CContainer sm className='contact main-container'>
        <h1>Contact</h1>
        <div className={'contact__info'}>
            <a href='https://www.linkedin.com/in/williamsauvan/' className={'contact__link'}>
                <i className='fab fa-linkedin'></i>
                LinkedIn
            </a>
            <a href='https://github.com/WSauvan' className={'contact__link'}>
                <i className='fab fa-github'></i>
                Github
            </a>
            <a href='https://github.com/WilliamSauvan' className={'contact__link'}>
                <i className='fab fa-github'></i>
                Github pro
            </a>
        </div>
    </CContainer>;

export default ContactPage;
