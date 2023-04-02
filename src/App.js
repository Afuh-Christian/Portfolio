import './App.css';
import Nav from './Components/NavC/Nav';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import SkillsPage from './Pages/SkillsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from './Pages/SharedLayout/SharedLayout';
import AboutPage from './Pages/AboutPage';


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<HomePage />}/>
            <Route path='contact' element={<ContactPage />}/>
            <Route path='skill' element={<SkillsPage />}/>
            <Route path='project' element={<ProjectPage />}/>
            <Route path='about' element={<AboutPage />}/>
          </Route>
      </Routes>
      </BrowserRouter>



   {/* <HomePage/> */}

      {/* <ContactPage/> */}
      {/* <ProjectPage/> */}
      {/* <SkillsPage/> */}

      {/* <Nav>
    
    </Nav> */}
      </>
  );
}

export default App;
