import React from "react";
import "./Contacts.css";
import { Map } from "../../components/Map/Map";

export const Contacts = () => {
  const workingHours = [
    "Måndag: 10:30 - 19:00",
    "Tisdag: 10:30 - 19:00",
    "Onsdag: 10:30 - 19:00",
    "Torsdag: 10:30 - 19:00",
    "Fredag: 10:30 - 19:00",
    "Lördag: 10:00 - 19:00",
    "Söndag: 11:00 - 19:00",
  ];

  return (
    <div className="contact-container">
      <>
        <div className="contact-block">
          <h1 className="main-title-left">Öppettider</h1>
          <p>
            {workingHours.map((w) => (
              <div>{w}</div>
            ))}
          </p>
        </div>
        <div className="contact-block">
          <h1 className="main-title-left">Kontakter</h1>
          <div>
            <b>Telefonnummer: </b>
            <a
              className="contact-info"
              target="_blank"
              href="tel:00460767031913"
            >
              +460767031913
            </a>{" "}
            <br></br>
            <b>Adress:</b>{" "}
            <a
              className="contact-info"
              target="_blank"
              href="https://www.google.com/maps/place/Strandbodkilen+3,+753+24+Uppsala,+Sweden/@59.8584757,17.6537678,17z/data=!3m1!4b1!4m6!3m5!1s0x465fcbff01399ad5:0x84e1672ad2a72d0a!8m2!3d59.8584757!4d17.6563427!16s%2Fg%2F11c5qb57yv?entry=ttu"
            >
              Strandbodkilen 3, 753 24, Uppsala
            </a>
            <br></br>
            <b>E-post: </b>
            <a
              className="contact-info"
              target="_blank"
              href="mailto:iconicbrowsandbeauty@hotmail.com"
            >
              {" "}
              iconicbrowsandbeauty@hotmail.com
            </a>{" "}
          </div>
        </div>
      </>
      <div className="contact-block">
        <Map />
        <p>Strandbodkilen 3, 753 24, Uppsala.</p>
      </div>
    </div>
  );
};
