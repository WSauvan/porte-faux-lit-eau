import './Contact.scss';
import { CContainer } from '@coreui/react';

const ContactPage = () =>
    <CContainer sm className='contact main-container'>
        <h1>Contact</h1>
        <a href='https://www.linkedin.com/in/williamsauvan/'>
            <i className='fab fa-linkedin'></i>
            LinkedIn
        </a>
    </CContainer>;

export default ContactPage;
