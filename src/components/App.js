import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About/About';
import HomePage from './pages/Home/Home';
import ProjectsPage from './pages/Projects/Projects';

const App = () => (
    <div className="app">
        <div className="Home">Learn React</div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="projects" element={<ProjectsPage />} />
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;
