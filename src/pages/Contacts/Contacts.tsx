import React from "react";
import "./Contacts.css";
import { Map } from "../../components/Map/Map";

export const Contacts = () => {
  const workingHours = [
    "Monday : 09:00 - 17:00",
    "Tuesday : 09:00 - 17:00",
    "Wednesday : 09:00 - 17:00",
    "Thursday : 09:00 - 17:00",
    "Friday : 09:00 - 17:00",
    "Saturday : closed",
    "Sunday : closed",
  ];

  const contact = [
    "Email : mailto:iconicbrowsandbeauty@hotmail.com",
    "Tel: +40274917282",
    "Whatsapp : www.whatsap.com",
    "Instagram : www.instagram.com",
    "Facebook : www.facebook.com",
  ];

  return (
    <div className="contact-container">
      <>
        <div className="contact-block">
          <h1 className="main-title">Working hours</h1>
          <p>
            {workingHours.map((w) => (
              <div>{w}</div>
            ))}
          </p>
        </div>
        <div className="contact-block">
          <h1 className="main-title">Contact</h1>
          <p>
            {contact.map((c) => (
              <div>{c}</div>
            ))}
          </p>
        </div>
      </>
      <div className="contact-block">
        <Map />
        <p>Strandbodkilen 3, 753 24, Uppsala.</p>
      </div>
    </div>
  );
};
