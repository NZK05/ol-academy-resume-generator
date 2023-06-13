import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../style/finalResume.css";
import "../style/blueprint.css"

export default function Angora() {
  const element = document.getElementById('resume');
  
  const [textColor, setTextColor] = useState("black");
  const [showBlueprint, setShowBlueprint] = useState("");
  const [showAngora, setShowAngora] = useState("flex");
  const navigate = useNavigate();
  const storedResume = Object.entries(localStorage);
  
  useEffect(()=>{
    localStorage.setItem('storedResume' , storedResume )
  })

  const Finish = () =>{
    navigate(`/stored-resumes`);
  };


  useEffect(() => {
    const url = localStorage.url;

    if (url === "Theme=Angora&Color=Blue") {
      setTextColor("blue");
      setShowBlueprint("none");
    } else if (url === "Theme=Angora&Color=Purple") {
      setTextColor("purple");
      setShowBlueprint("none");
    } else {
      setTextColor("black");
      setShowBlueprint("block");
      setShowAngora("none");
    }
    if (url === "Theme=Blueprint&Color=Blue" || "Theme=Angora&Color=Blue") {
      setTextColor("blue");
    } else if (url === "Theme=Blueprint&Color=Purple" || "Theme=Angora&Color=Purple") {
      setTextColor("purple");
    } else {
      setTextColor("black");
    }
    
  }, []);

 

  const captureWebPage = () => {
    html2canvas(element).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png'); 
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'webpage.png'; 
      link.click();
    });
  };

  const exportJson = () => {
    navigate(`/json`);
  };


  
  const downloadPDF = () => {
    const input = document.getElementById('resume');
    
    html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', -115, 0, pdfWidth - -230, pdfHeight - 20);
      pdf.save('Resume.pdf');
    });
  };

  return (
    <>
      <div id="resume" className="resume-body">
        <div style={{ display: showAngora }}  className="resume-page">
          <div className="resume-info">
            <header className="header">
              <h1 className="title" style={{ color: textColor }}>
                {localStorage.name}
              </h1>
              <p>
                {localStorage.country}, {localStorage.city}
              </p>
              <p>{localStorage.email}</p>
              <h5>Professional Summary</h5>
            </header>
            <div className="skills">
              <div className="info">{localStorage.skills}</div>
              <h5 className="title" style={{ color: textColor }}>
                Skills
              </h5>
            </div>
            <section className="experience">
              <div className="info">{localStorage.Experience}</div>
              <h5 className="title" style={{ color: textColor }}>
                Experience
              </h5>
              <div className="experience-item">
                <h3>{localStorage.position}</h3>
                <p>Company: {localStorage.jobTitle}</p>
              </div>
            </section>
          </div>
        </div>
   
      
       <div style={{display: showBlueprint}} className="resume-page">
      <div className="resume-header">
        <h1 style={{color: textColor}}>{localStorage.name}</h1>
        <p className="bp3-text-muted">{localStorage.position}</p>
      </div>
      <div className="resume-content">
        <h2 style={{color: textColor}}>Education</h2>
        <div className="bp3-callout">
          {localStorage.education}
        </div>

        <h2 style={{color: textColor}}>Experience</h2>
        <div className="bp3-callout">
          {localStorage.Experience}
        </div>

        <h2 style={{color: textColor}}>Skills</h2>
        <div className="bp3-callout">
          {localStorage.skills}
        </div>
      </div>
      <div className="resume-footer">
        <p className="bp3-text-muted">Contact: {localStorage.email} | Phone: {localStorage.phone}</p>
      </div>
    </div>   
    </div>
      <div className="export-buttons">
        <Button onClick={downloadPDF} color="primary">Export PDF</Button>
        <Button onClick={captureWebPage} color="primary">Export Image</Button>
        <Button onClick={exportJson} color="primary">Export JSON</Button>
        <Button onClick={Finish} color="primary">Finish</Button>
      </div>
    </>
  );
}
