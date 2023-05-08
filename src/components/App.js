import './App.scss';
import NavBar from './layout/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import useImportStyle from '../customHooks/useImportStyle';
const HomeLink = lazy(() => import('./HomeLink/HomeLink'));
const ContactPage = lazy(() => import('./pages/Contact/Contact'));
const ProjectsPage = lazy(() => import('./pages/Projects/Projects'));
const SkillsPage = lazy(() => import('./pages/Skills/Skills'));
const HomePage = lazy(() => import('./pages/Home/Home'));

const App = () => {
    useImportStyle(
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    );
    return (
        <div id="App" data-testid="App" className="app">
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="projects" element={<ProjectsPage />} />
                        <Route path="skills" element={<SkillsPage />} />
                    </Routes>
                    <HomeLink />
                </Suspense>
                <NavBar />
            </BrowserRouter>
        </div>
    );
};

export default App;
