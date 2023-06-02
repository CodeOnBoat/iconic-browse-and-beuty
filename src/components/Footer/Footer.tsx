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
          <h4 className="footer-section title">Kontakter</h4>
          <div>
            <b>Telefonnummer: </b>
            <a target="_blank" href="tel:00460767031913">
              +460767031913
            </a>{" "}
            <br></br>
            <b>Adress:</b>{" "}
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Strandbodkilen+3,+753+24+Uppsala,+Sweden/@59.8584757,17.6537678,17z/data=!3m1!4b1!4m6!3m5!1s0x465fcbff01399ad5:0x84e1672ad2a72d0a!8m2!3d59.8584757!4d17.6563427!16s%2Fg%2F11c5qb57yv?entry=ttu"
            >
              Strandbodkilen 3, 753 24, Uppsala
            </a>
            <br></br>
            <b>E-post: </b>
            <a target="_blank" href="mailto:iconicbrowsandbeauty@hotmail.com">
              {" "}
              iconicbrowsandbeauty@hotmail.com
            </a>{" "}
          </div>
          <div className="media-container">
            <a
              href="https://www.instagram.com/iconicbrowsandbeauty/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              <img src={InstagramWhite} className="social-icon" alt="" />
            </a>
            <a href="https://wa.me/460767031913" target="_blank">
              <img src={WhatsAppWhite} className="social-icon" alt="" />
            </a>
          </div>
        </div>
        <div className="footer-sec workingHours-container">
          <h4 className="footer-section title">Öppettider</h4>
          <div className="working-hours-container">
            <ul className="workingHours-list">
              <li className="workingHours-list day">Måndag:</li>
              <li className="workingHours-list day">Tisdag:</li>
              <li className="workingHours-list day">Onsdag:</li>
              <li className="workingHours-list day">Torsdag:</li>
              <li className="workingHours-list day">Fredag:</li>
              <li className="workingHours-list day">Lördag:</li>
              <li className="workingHours-list day">Söndag:</li>
            </ul>
            <ul className="workingHours-list">
              <li className="workingHours-list day">10:30 - 19:00</li>
              <li className="workingHours-list day">10:30 - 19:00</li>
              <li className="workingHours-list day">10:30 - 19:00</li>
              <li className="workingHours-list day">10:30 - 19:00</li>
              <li className="workingHours-list day">10:30 - 19:00</li>
              <li className="workingHours-list day">10:00 - 19:00</li>
              <li className="workingHours-list day">11:00 - 19:00</li>
            </ul>
          </div>
        </div>
        <div className="footer-sec appointments-container">
          <h4 className="footer-section title">Appointments</h4>
          <p>Book your appointment here!</p>
          <a className="btn-bookAppointment">Boka Tid</a>
        </div>
      </div>
      <div className="footer-mobile-container">
        <div className="footer-lineGradient"></div>
        <div className="footer-section appointments-container">
          <h4 className="footer-section title">Appointments</h4>
          <p>Book your appointment here!</p>
          <button className="btn-bookAppointment">Boka Tid</button>
        </div>
        <div className="footer-lineGradient"></div>
        <div className="footer-section workingHours-container">
          <h4 className="footer-section title">Öppettider</h4>
          <ul className="workingHours-list">
            <li className="workingHours-list day">Måndag: 10:30 - 19:00</li>
            <li className="workingHours-list day">Tisdag: 10:30 - 19:00</li>
            <li className="workingHours-list day">Onsdag: 10:30 - 19:00</li>
            <li className="workingHours-list day">Torsdag: 10:30 - 19:00</li>
            <li className="workingHours-list day">Fredag: 10:30 - 19:00</li>
            <li className="workingHours-list day">Lördag: 10:00 - 19:00</li>
            <li className="workingHours-list day">Söndag: 11:00 - 19:00</li>
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
          <a
            href="https://www.instagram.com/iconicbrowsandbeauty/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
          >
            {" "}
            <img src={Instagram} className="social-icon" alt="" />
          </a>
          <a href="https://wa.me/460767031913">
            <img src={WhatsApp} className="social-icon" alt="" />
          </a>

          <img src={Mail} className="social-icon" alt="" />
        </div>
      </div>
    </div>
  );
};
