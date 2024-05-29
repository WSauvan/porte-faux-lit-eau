import './Projects.scss';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody, CContainer } from '@coreui/react';

const ProjectsPage = () =>
    <CContainer sm className='projects main-container'>
        <h1>Projects</h1>
        <CAccordion activeItemKey={1} className={'projects__project'}>
            <CAccordionItem itemKey={1} className={'projects__project'}>
                <CAccordionHeader className={'projects__header'}>St Laurent Dot portal</CAccordionHeader>
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
            <CAccordionItem itemKey={2} className={'projects__project'}>
                <CAccordionHeader className={'projects__header'}>Laravel Webqam Installer</CAccordionHeader>
                <CAccordionBody>
                    <h2>Technologies: Laravel</h2>

                    <h2>Description:</h2>
                    <p>
                        Contribution to the development of an installer script designed to initialize a Laravel project.
                        The script ensures that the project adheres to the company's standards and security
                        prerequisites.
                    </p>
                    <ul>
                        <li>
                            <strong>Company Standards:</strong> Enforces coding standards, directory structure, and
                            project configurations as specified by the company.
                        </li>
                        <li>
                            <strong>Security Prerequisites:</strong> Integrates security best practices, including
                            configuration of environment variables, CSRF protection, and secure database connections.
                        </li>
                    </ul>

                    <h2>Results:</h2>
                    <ul>
                        <li>
                            <strong>Consistency:</strong> Ensures all Laravel projects start with a consistent and
                            secure setup.
                        </li>
                        <li>
                            <strong>Time-saving:</strong> Reduces the initial setup time for new projects by automating
                            repetitive tasks.
                        </li>
                        <li>
                            <strong>Compliance:</strong> Guarantees that all new projects comply with the company’s
                            development and security guidelines.
                        </li>
                    </ul>

                    <p>
                        This project highlights my ability to contribute to tools that enhance development efficiency
                        and maintain high security standards.
                    </p>
                </CAccordionBody>
            </CAccordionItem>

            <CAccordionItem itemKey={3} className={'projects__project'}>
                <CAccordionHeader className={'projects__header'}>Laravel API for Notin's caravan
                    configurator</CAccordionHeader>
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
            <CAccordionItem itemKey={4} className={'projects__project'}>
                <CAccordionHeader className={'projects__header'}>Development of multiple WordPress
                    sites</CAccordionHeader>
                <CAccordionBody>
                    <h2>Technologies: WordPress</h2>

                    <h2>Description:</h2>
                    <p>
                        Development of several WordPress sites using a multisite and multilingual setup. The project
                        featured a highly specific graphic theme and aimed to achieve high performance metrics on
                        platforms such as GTmetrix and Lighthouse.
                    </p>
                    <ul>
                        <li>
                            <strong>Multisite and Multilingual Setup:</strong> Implemented a robust multisite network
                            with seamless multilingual support for each site.
                        </li>
                        <li>
                            <strong>Specific Graphic Theme:</strong> Designed and developed a unique, visually appealing
                            theme tailored to the client's branding requirements.
                        </li>
                        <li>
                            <strong>Performance Optimization:</strong> Focused on achieving top scores on GTmetrix and
                            Lighthouse by optimizing site speed, implementing caching strategies, and minimizing asset
                            load times.
                        </li>
                    </ul>

                    <h2>Results:</h2>
                    <ul>
                        <li>
                            <strong>High Performance:</strong> Achieved excellent performance metrics, ensuring fast
                            load times and a smooth user experience.
                        </li>
                        <li>
                            <strong>Scalability:</strong> Created a scalable infrastructure capable of supporting
                            multiple sites and languages without compromising performance.
                        </li>
                        <li>
                            <strong>User Engagement:</strong> Enhanced user engagement through a visually stunning and
                            highly responsive design.
                        </li>
                    </ul>

                    <p>
                        This project demonstrates my ability to manage complex WordPress setups, optimize site
                        performance, and deliver visually appealing, high-performing websites.
                    </p>
                </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={5} className={'projects__project'}>
                <CAccordionHeader className={'projects__header'}>Group of projects on Drupal versions 7 to
                    10</CAccordionHeader>
                <CAccordionBody>
                    <h2>Technologies: Drupal 7 to 10</h2>

                    <h2>Description:</h2>
                    <p>
                        Development and maintenance of multiple projects across various versions of Drupal, from 7 to
                        10. These projects involved complex migrations, custom module development, and continuous
                        enhancements to meet evolving business needs.
                    </p>
                    <ul>
                        <li>
                            <strong>Version Upgrades:</strong> Managed upgrades from Drupal 7 to 10, ensuring smooth
                            transitions and minimal downtime.
                        </li>
                        <li>
                            <strong>Custom Module Development:</strong> Developed custom modules to extend Drupal’s core
                            functionality according to specific project requirements.
                        </li>
                        <li>
                            <strong>Performance Optimization:</strong> Implemented best practices for performance,
                            enhancing site speed and user experience.
                        </li>
                    </ul>

                    <h2>Results:</h2>
                    <ul>
                        <li>
                            <strong>Seamless Migrations:</strong> Successfully migrated multiple sites to newer Drupal
                            versions without data loss.
                        </li>
                        <li>
                            <strong>Enhanced Functionality:</strong> Delivered robust custom modules, providing tailored
                            solutions to complex problems.
                        </li>
                        <li>
                            <strong>Improved Performance:</strong> Achieved significant performance gains, ensuring fast
                            and responsive websites.
                        </li>
                    </ul>

                    <p>
                        These projects highlight my expertise in managing and upgrading Drupal sites, developing custom
                        solutions, and optimizing performance across various versions.
                    </p>
                </CAccordionBody>
            </CAccordionItem>
        </CAccordion>
    </CContainer>
;

export default ProjectsPage;
