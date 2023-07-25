"use client";

import { useState } from "react";
import Notification from "../app/pages/Notification";
import { useClient } from "./pages/UseClient";

const NotificationCount = ({ count, onClick }) => (
  <span onClick={onClick}>{count}</span>
);

export default function Home() {
  const shouldRender = useClient();
  const [allRead, setAllRead] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const handleMarkAllRead = () => {
    setAllRead((prevAllRead) => !prevAllRead);
    if (!allRead) {
      setNotificationCount(0);
    } else {
      setNotificationCount(3);
    }
  };

  const notifi = [
    {
      img: "/avatar-mark-webber.webp",
      name: " Mark Webber",
      info: "reacted to your recent post",
      detail: "My first tournament today!",
      time: "1m ago",
    },
    {
      img: "/angela.png",
      name: "  Angela Gray",
      info: "followed you",
      time: "5m ago",
    },
    {
      img: "/avatar-jacob-thompson.webp",
      name: " Jacob Thompson",
      info: "has joined your group",
      detail: " Chess Club",
      time: "1 day ago",
    },
    {
      img: "/three.webp",
      name: "   Rizky Hasanuddin ",
      info: "sent you a private message ",
      time: "5 days ago",
      message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
      I'm already having lots of fun and improving my game.`
    },
    {
      img: "/avatar-kimberly-smith.webp",
      name: "Kimberly Smith ",
      info: "commented on your picture",
      time: "1 week ago",
      folImg: "/image-chess.webp"
    },
    {
      img: "/avatar-nathan-peterson.webp",
      name: " Nathan Peterson ",
      info: "reacted to your recent post",
      detail: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
    },
    {
      img: "/anna.png",
      name: "   Anna Kim  ",
      info: "left the group",
      time: "2 weeks ago",
       },
  ];
  return (
    <>
      <div className="notification">
        <div className="notify-top">
          <h1>
            Notification {notificationCount > 0 && (
              <NotificationCount count={notificationCount} onClick={handleMarkAllRead} />
            )}
          </h1>
          <p onClick={handleMarkAllRead}>Mark all as read</p>
        </div>

        {shouldRender &&
          notifi.map((item, index) => (
            <Notification
              key={index} // Make sure to use a unique key for each item in the array
              img={item.img}
              name={item.name}
              info={item.info}
              detail={item.detail}
              message={item.message}
              time={item.time}
              allRead={allRead}
              folImg={item.folImg}
             />
          ))}
      </div>
    </>
  );
}
