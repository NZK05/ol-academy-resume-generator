import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Alert } from "reactstrap";
import angoraBlue from "../Photos/Angora-Blue.jpg";
import angoraPurple from "../Photos/Angora-Purple.jpg";
import blueprintBlue from "../Photos/Blueprint-Blue.jpg";
import blueprintPurple from "../Photos/Blueprint-Purple.jpg";
import ProgressBar from "./ProgressBar.jsx";
import "../style/chooseTemplate.css";
const progress = 40;
const ChooseTemplate = () => {
  const [theme, setTheme] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const queryParams = new URLSearchParams({
    Theme:theme,
    Color:color,
  }).toString();

  useEffect(()=>{
    localStorage.setItem ('url', queryParams)
  })


  const handleCreate = () => {
    if (theme === "" || color === "") {
      setError(
        <Alert color="danger">{`Please, select options in both inputs!`}</Alert>
      );
    } else {
      navigate(`/Create-page-contact?${queryParams}`);
    }
  };

  const getImageToShow = () => {
    switch (theme + color) {
      case "AngoraBlue":
        return <img src={angoraBlue} alt="Angora Blue" />;
      case "AngoraPurple":
        return <img src={angoraPurple} alt="Angora Purple" />;
      case "BlueprintBlue":
        return <img src={blueprintBlue} alt="Blueprint Blue" />;
      case "BlueprintPurple":
        return <img src={blueprintPurple} alt="Blueprint Purple" />;
      default:
        return null;
    }
  };

  return (
    <>
      <ProgressBar progress={progress} />
    <div className="themes">
      <div className="themeTitle">Choose A Theme</div>
      <div className="inputContainer">
        <div>
          <Input
            id="SelectTheme"
            name="select"
            type="select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option hidden>Theme</option>
            <option>Angora</option>
            <option>Blueprint</option>
          </Input>
        </div>
        <div>
          <Input
            id="SelectColor"
            name="select"
            type="select"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option hidden>Color</option>
            <option>Blue</option>
            <option>Purple</option>
          </Input>
        </div>
        <div>
          <Button className="button" onClick={handleCreate} color="primary">
            Select This Theme
          </Button>
        </div>
        <div className="error">{error}</div>
      </div>
      <div className="imageContainer">
        <div className="templateImage">{getImageToShow()}</div>
      </div>
    </div>
    </>
  );
};

export default ChooseTemplate;