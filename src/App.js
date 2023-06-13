import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/Pages/HomePage";
import CreatePageContact from "./components/Pages/CreatePageContact";
import CreatePageExperience from "./components/Pages/createPageExperience";
import ChooseTemplate from "./components/Pages/ChooseTemplate";
import ImportResume from "./components/Pages/importResume";
import Export from './components/Pages/Export'
import Json from './components/Pages/Json'
import StoredResumes from "./components/Pages/storedResume";
function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Choose-template" element={<ChooseTemplate />} />
      <Route path="/Create-page-contact" element={<CreatePageContact />}/>
      <Route path="/Create-page-experience" element={<CreatePageExperience/>}/>
      <Route path="/import-resume" element={<ImportResume/>} />
      <Route path="/export" element={<Export/>} />
      <Route path="/json" element={<Json/>} />
      <Route path="/stored-resumes" element={<StoredResumes/>} />
    </Routes>
    </>
  );
}

export default App;
