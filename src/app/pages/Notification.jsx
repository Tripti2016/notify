import React, { useState } from "react";
import Image from "next/image";

const Notification = ({
  img,
  name,
  detail,
  info,
  time,
  message,
  allRead,
  folImg,
  mes,
}) => {
  const [showMessage, setShowMessage] = useState(true);

  const handleToggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="notification-main">
      <div
        className={`notification-box ${
          allRead ? "notification-all-read" : "notification-unread"
        }`}
      >
        <div className="notification-item" onClick={handleToggleMessage}>
          <div className="notification-img">
            <Image src={img} alt="img" width={100} height={100} />
          </div>
          <div className="notification-content">
            <div className="notification-content-top">
              <h3 className="name">
                {name}
                <span className="info">{info}</span>
                <span>
                  <a href="#" className="detail">
                    {detail}
                  </a>
                </span>
                <span className="notify-dot"></span>
              </h3>
            </div>
            <div className="notification-content-bottom">
              <a href="#" className="time">
                {time}
              </a>
            </div>
          </div>
          <div className={`follw-img ${!folImg ? "empty" : ""}`}>
            {folImg && (
              <Image src={folImg} alt="img" width={100} height={100} />
            )}
          </div>
        </div>
      </div>
      {showMessage && (
        <div className="notification-message">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
