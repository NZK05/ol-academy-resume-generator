import React, { useState, useEffect } from "react";
import { Button, Input, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar.jsx";
import '../style/contact.css'
const CreatePageContact = () => {
  const progress = 60;
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedCountry = localStorage.getItem("country");
    const storedCity = localStorage.getItem("city");
    const storedEmail = localStorage.getItem("email");
    const storedPhone = localStorage.getItem("phone");

    if (storedName) setName(storedName);
    if (storedCountry) setCountry(storedCountry);
    if (storedCity) setCity(storedCity);
    if (storedEmail) setEmail(storedEmail);
    if (storedPhone) setPhone(storedPhone);
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("country", country);
    localStorage.setItem("city", city);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    if (
      name === "" ||
      country === "" ||
      city === "" ||
      email === "" ||
      phone === ""
    ) {
      localStorage.setItem("lastVisitedPage", "/Create-page-contact");
    } else {
      localStorage.setItem("lastVisitedPage", "/Create-page-experience");
    }
  }, [name, country, city, email, phone]);

  const handleNext = () => {
    if (
      name === "" ||
      country === "" ||
      city === "" ||
      email === "" ||
      phone === ""
    ) {
      setError(<Alert color="danger">{`Please, fill out everything!`}</Alert>);
    } else {
      navigate(`/Create-page-experience?${localStorage.url}`);
    }
  };

  const handleBack = () => {
    navigate(`/Choose-template?`);
  };

  return (
    <>
      <ProgressBar progress={progress} />
      <div className="container">
        <h4>Let's start with</h4>
        <h3>Contact Information</h3>
        <div>
          <label>
            Name:
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Luka Khoriashvili"
            />
          </label>
          <br />
          <label>
            Country:
            <Input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g. Spain"
            />
          </label>
          <br />
          <label>
            City:
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Valencia"
            />
          </label>
          <br />
          <label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. lukakhoriashvili@gmail.com"
            />
          </label>
          <br />
          <label>
            Phone:
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 123456789"
            />
          </label>
        </div>
        <Button className="button" onClick={handleBack} color="primary">
          Back
        </Button>
        <Button className="button" onClick={handleNext} color="primary">
          Next
        </Button>
        <div className="error2">{error}</div>
      </div>
    </>
  );
};

export default CreatePageContact;