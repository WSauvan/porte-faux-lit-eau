import './App.scss';
import NavBar from './layout/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
const ContactPage = lazy(() => import('./pages/Contact/Contact'));
const ProjectsPage = lazy(() => import('./pages/Projects/Projects'));
const SkillsPage = lazy(() => import('./pages/Skills/Skills'));
const HomePage = lazy(() => import('./pages/Home/Home'));

const App = () => (
    <div id="App" data-testid="App" className="app">
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="skills" element={<SkillsPage />} />
                </Routes>
            </Suspense>
            <NavBar />
        </BrowserRouter>
    </div>
);

export default App;
