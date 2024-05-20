import './Projects.scss';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody, CContainer } from '@coreui/react';

const ProjectsPage = () =>
    <CContainer sm className='projects main-container'>
        <h1>Projects</h1>
        <CAccordion activeItemKey={1}>
            <CAccordionItem itemKey={1}>
                <CAccordionHeader>St Laurent Dot portal</CAccordionHeader>
                <CAccordionBody>
                    <h2>Technologies : Laravel, Backpack, Vue.js</h2>
                    <p>
                        Development of a web platform for the St Laurent group, aimed at facilitating direct product
                        sales. The project involved:
                    </p>
                    <ul>
                        <li>
                            <strong>Technical Environment:</strong> Using Laravel for the backend structure, Backpack
                            for administrative management, and Vue.js for a dynamic and responsive user interface.
                        </li>
                        <li>
                            <strong>API Integration:</strong> Connecting to multiple internal group APIs to automate and
                            synchronize product data in real-time.
                        </li>
                        <li>
                            <strong>Mobile API:</strong> Deployment of a dedicated API allowing interaction with the
                            group's mobile application, ensuring seamless integration between web and mobile platforms.
                        </li>
                    </ul>

                    <h2>Results:</h2>
                    <ul>
                        <li>
                            <strong>Automation:</strong> Reduction of manual tasks through data flow automation.
                        </li>
                        <li>
                            <strong>User Experience:</strong> Improved user experience via a modern and responsive
                            interface.
                        </li>
                        <li>
                            <strong>Scalability:</strong> Infrastructure ready to evolve to meet the group's future
                            needs.
                        </li>
                    </ul>

                    <p>
                        This project demonstrated solid expertise in full-stack development and API integration,
                        contributing to the digital transformation of the St Laurent group.
                    </p>
                </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={2}>
                <CAccordionHeader>Laravel API for Notin's caravan configurator</CAccordionHeader>
                <CAccordionBody>
                    <h2>Technologies: Laravel backend and Nuxt frontend</h2>

                    <h2>Description:</h2>
                    <p>
                        Development of a dedicated API for a decoupled Nuxt frontend used in a caravan configurator.
                        This configurator allows users to create a quote (in PDF and email format) following a series of
                        steps.
                    </p>
                    <ul>
                        <li>
                            <strong>Management Constraints:</strong> Strict rules for each step, including
                            incompatibility, exclusivity, and grouping constraints.
                        </li>
                    </ul>

                    <h2>Results:</h2>
                    <ul>
                        <li>
                            <strong>Automation:</strong> Automation of the quotation process with PDF and email
                            generation.
                        </li>
                        <li>
                            <strong>Complex Rule Handling:</strong> Efficient management of complex business rules at
                            each step.
                        </li>
                        <li>
                            <strong>Integration:</strong> Seamless integration between the Laravel backend and Nuxt
                            frontend.
                        </li>
                    </ul>

                    <p>
                        This project showcased expertise in backend and frontend development, complex rule management,
                        and API integration, significantly enhancing the user experience for the caravan configurator.
                    </p>
                </CAccordionBody>
            </CAccordionItem>
        </CAccordion>
    </CContainer>
;

export default ProjectsPage;
