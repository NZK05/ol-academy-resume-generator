import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import ProgressBar from "./ProgressBar.jsx";
import '../style/HomePage.css'

export default function HomePage() {
  const progress = 20;
  const navigate = useNavigate()
  const getLastVisitedPage = () => {
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");
    return lastVisitedPage ? lastVisitedPage : "/lastVisitedPage";
  };



  const handleContinueClick = () => {
    if(localStorage.length===0){
      navigate(`/`)
    }else{
      const lastVisitedPage = getLastVisitedPage();
      window.location.href = lastVisitedPage;
    }
  };

  const clearStorage = () => {
    localStorage.clear();
  };


  return (
    <>
    
      <div className="progressBar-container">
        <ProgressBar progress={progress} />
      </div>
      
      <div className="homepage-container">
        <div className="button-group">
          <div className="button-container">
            <Button 
              onClick={clearStorage}
              color="primary"
              className="primary-button"
            >
              <Link className="Button"  to={"/Choose-template"}>
                Create a new resume
              </Link>
            </Button>
          </div>
          <div onClick={handleContinueClick} className="button-container">
            <Button
              color="primary"
              className="primary-button"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
