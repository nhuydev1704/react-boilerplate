import React from "react";
import NotificationItem from "./NotificationItem";
import { notifications } from "./data";
import Auxiliary from "../Auxiliary";
import CustomScrollbars from "../CustomScrollbars";

const AppNotification = () => {
  return (
    <Auxiliary>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Notifications</h3>
        <i className="gx-icon-btn icon icon-charvlet-down" />
      </div>
      <CustomScrollbars className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {notifications.map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
        </ul>
      </CustomScrollbars>
    </Auxiliary>
  );
};

export default AppNotification;
