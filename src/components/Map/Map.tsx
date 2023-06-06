import React from "react";

export const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.4378419552402!2d17.6563427!3d59.8584757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fcbff01399ad5%3A0x84e1672ad2a72d0a!2sStrandbodkilen%203%2C%20753%2024%20Uppsala%2C%20Suecia!5e0!3m2!1ses!2ses!4v1685389395430!5m2!1ses!2ses"
      width="100%"
      height="350"
      style={{
        borderRadius: "5px",
        border: "2px solid var(--primary-color)",
        maxWidth: "350px",
        maxHeight: "320px",
      }}
      loading="lazy"
      className="map"
    ></iframe>
  );
};
