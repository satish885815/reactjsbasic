import React, { useState } from "react";
import "./Notifications.css";

const notifications = [
  {
    id: 1,
    type: "order",
    status: "success",
    message: "Thank you for placing your order at ZopFashion...",
    daysAgo: 20,
    imgSrc: "path/to/monsoon-essential.jpg",
  },
  {
    id: 2,
    type: "order",
    status: "error",
    message: "Your order, #8 was cancelled.",
    daysAgo: 20,
    imgSrc: "path/to/brooklyn-candle-studio.jpg",
  },
  {
    id: 3,
    type: "cart",
    status: "info",
    message:
      "You have few items left in your cart that have not been purchased.",
    daysAgo: 30,
    imgSrc: "path/to/brooklyn-candle-studio.jpg",
  },
];

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleNotifications, setVisibleNotifications] =
    useState(notifications);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "All") {
      setVisibleNotifications(notifications);
    } else if (tab === "Order Update") {
      setVisibleNotifications(notifications.filter((n) => n.type === "order"));
    } else if (tab === "Promotions") {
      setVisibleNotifications(notifications.filter((n) => n.type === "cart"));
    }
  };

  const handleClose = (id) => {
    setVisibleNotifications(visibleNotifications.filter((n) => n.id !== id));
  };

  return (
    <div className="notifications">
      <div className="arrow-up"></div> {/* Add this div for the upward arrow */}
      <div className="tabs">
        <button
          className={activeTab === "All" ? "active" : ""}
          onClick={() => handleTabClick("All")}
        >
          All
        </button>
        <button
          className={activeTab === "Order Update" ? "active" : ""}
          onClick={() => handleTabClick("Order Update")}
        >
          Order Update
        </button>
        <button
          className={activeTab === "Promotions" ? "active" : ""}
          onClick={() => handleTabClick("Promotions")}
        >
          Promotions
        </button>
      </div>
      <div className="notifications-list">
        {visibleNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.status}`}
          >
            <div className="notification-header">
              <span className="status-icon">
                {notification.status === "success" && "✔️"}
                {notification.status === "error" && "❌"}
                {notification.status === "info" && "ℹ️"}
              </span>
              <span className="message">{notification.message}</span>
              <span
                className="close-icon"
                onClick={() => handleClose(notification.id)}
              >
                ❌
              </span>
            </div>
            <img src={notification.imgSrc} alt="Notification" />
            <div className="footer">
              <span className="days-ago">{notification.daysAgo} days ago</span>
              <span className="promo-message">
                Shop secure - fit and lightweight Crocs starting at Rs.599 😊
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
