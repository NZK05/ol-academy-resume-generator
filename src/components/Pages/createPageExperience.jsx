import React, { useState, useEffect } from "react";
import { Input, Button, Alert, FormGroup, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar.jsx";
import "../style/experience.css";

const progress = 80;

const CreatePageExperience = () => {
  const [position, setPosition] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedPosition = localStorage.getItem("position");
    const storedJobTitle = localStorage.getItem("jobTitle");
    const storedEmployer = localStorage.getItem("employer");
    const storedEducation = localStorage.getItem("education");
    const storedExperience = localStorage.getItem("Experience");
    const storedSkills = localStorage.getItem("skills");
    if (storedPosition) setPosition(storedPosition);
    if (storedJobTitle) setJobTitle(storedJobTitle);
    if (storedEmployer) setEmployer(storedEmployer);
    if (storedEducation) setEducation(storedEducation);
    if (storedExperience) setExperience(storedExperience);
    if (storedSkills) setSkills(storedSkills);
  }, []);

  useEffect(() => {
    localStorage.setItem("position", position);
    localStorage.setItem("jobTitle", jobTitle);
    localStorage.setItem("employer", employer);
    localStorage.setItem("education", education);
    localStorage.setItem("Experience", experience);
    localStorage.setItem("skills", skills);
  }, [position, jobTitle, employer, education, experience, skills]);

  const handleCreate = () => {
    if (
      position === "" ||
      jobTitle === "" ||
      employer === "" ||
      education === "" ||
      experience === "" ||
      skills === ""
    ) {
      setError(<Alert color="danger">{`Please, fill out everything!`}</Alert>);
    } else {
      navigate(`/export?${localStorage.url}`);
    }
  };

  const handleBack = () => {
    navigate(`/Create-page-contact?${localStorage.url}`);
  };

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="container">
        <div>
          <h3 className="heading">Experience Details</h3>
          <h4 className="subheading">Let's Start With Your Most Recent Job.</h4>
          <div className="form-group">
            <Label for="position" className="label">
              Position:
            </Label>
            <Input
              type="text"
              id="position"
              className="input"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="e.g. Front-end developer"
            />
          </div>
          <div className="form-group">
            <Label for="jobTitle" className="label">
              Job Title:
            </Label>
            <Input
              type="text"
              id="jobTitle"
              className="input"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g. NZK"
            />
          </div>
          <div className="form-group">
            <Label for="employer" className="label">
              Employer:
            </Label>
            <Input
              type="text"
              id="employer"
              className="input"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
              placeholder="e.g. Luka Khoriashvili"
            />
          </div>
          <FormGroup>
            <Label for="experience" className="label">
              Experience:
            </Label>
            <Input
              id="experience"
              value={experience}
              className="textarea"
              name="text"
              type="textarea"
              onChange={(e) => setExperience(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="skills" className="label">
              Skills:
            </Label>
            <Input
              id="skills"
              value={skills}
              className="textarea"
              name="text"
              type="textarea"
              onChange={(e) => setSkills(e.target.value)}
            />
          </FormGroup>
          <div className="form-group">
            <Label for="education" className="label">
              Education:
            </Label>
            <Input
              type="text"
              id="education"
              className="input"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="e.g. Your Text"
            />
          </div>
        </div>

        <div className="buttons">
          <Button className="button" onClick={handleBack} color="primary">
            Back
          </Button>
          <Button className="button" onClick={handleCreate} color="primary">
            Next
          </Button>
        </div>
        <div>{error}</div>
      </div>
    </>
  );
};

export default CreatePageExperience;
