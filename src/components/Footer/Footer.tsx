import React from "react";
import "./Footer.css";
import Facebook from "../../images/Facebook.svg";
import Instagram from "../../images/Instagram.svg";
import WhatsApp from "../../images/WhatsApp.svg";
import Mail from "../../images/Mail.svg";
import FacebookWhite from "../../images/FacebookWhite.svg";
import InstagramWhite from "../../images/InstagramWhite.svg";
import WhatsAppWhite from "../../images/WhatsAppWhite.svg";
import MailWhite from "../../images/MailWhite.svg";
import LogoFooter from "../../images/logoFooter.png";

export const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer-desktop-container">
        <div className="header-logo-container">
          <img src={LogoFooter} alt="" className="logoFooter" />
        </div>
        <div className="footer-sec contacts-container">
          <h4 className="footer-section title">Contacts</h4>
          <div>
            Phone Number: +00040404596 <br></br>
            Location, Country, City, Street Number
          </div>
          <div className="media-container">
            <img src={FacebookWhite} className="social-icon" alt="" />
            <img src={InstagramWhite} className="social-icon" alt="" />
            <img src={WhatsAppWhite} className="social-icon" alt="" />
          </div>
        </div>
        <div className="footer-sec workingHours-container">
          <h4 className="footer-section title">Working Hours</h4>
          <ul className="workingHours-list">
            <li className="workingHours-list day">Monday: 09:00-17:00</li>
            <li className="workingHours-list day">Tuesday: 09:00-17:00</li>
            <li className="workingHours-list day">Wednesday: 09:00-17:00</li>
            <li className="workingHours-list day">Thursday: 09:00-17:00</li>
            <li className="workingHours-list day">Friday: 09:00-17:00</li>
            <li className="workingHours-list day">Saturday: Closed</li>
            <li className="workingHours-list day">Sunday: Closed</li>
          </ul>
        </div>
        <div className="footer-sec appointments-container">
          <h4 className="footer-section title">Appointments</h4>
          <p>Book your appointment here!</p>
          <button className="btn-bookAppointment">Boka nu!</button>
        </div>
      </div>
      <div className="footer-mobile-container">
        <div className="footer-lineGradient"></div>
        <div className="footer-section appointments-container">
          <h4 className="footer-section title">Appointments</h4>
          <p>Book your appointment here!</p>
          <button className="btn-bookAppointment">Boka nu!</button>
        </div>
        <div className="footer-lineGradient"></div>
        <div className="footer-section workingHours-container">
          <h4 className="footer-section title">Working Hours</h4>
          <ul className="workingHours-list">
            <li className="workingHours-list day">Monday: 09:00-17:00</li>
            <li className="workingHours-list day">Tuesday: 09:00-17:00</li>
            <li className="workingHours-list day">Wednesday: 09:00-17:00</li>
            <li className="workingHours-list day">Thursday: 09:00-17:00</li>
            <li className="workingHours-list day">Friday: 09:00-17:00</li>
            <li className="workingHours-list day">Saturday: Closed</li>
            <li className="workingHours-list day">Sunday: Closed</li>
          </ul>
        </div>
        <div className="footer-lineGradient"></div>
        <div className="footer-section contacts-container">
          <h4 className="footer-section title">Contacts</h4>
          <div>
            Phone Number: +00040404596 <br></br>
            Location, Country, City, Street Number
          </div>
        </div>
        <div className="social-media-container">
          <img src={Facebook} className="social-icon" alt="" />
          <img src={Instagram} className="social-icon" alt="" />
          <img src={WhatsApp} className="social-icon" alt="" />
          <img src={Mail} className="social-icon" alt="" />
        </div>
      </div>
    </div>
  );
};
