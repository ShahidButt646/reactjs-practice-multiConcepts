import React from "react";
import sidebarData from "../../data/components/sidebar/SidebarSection.json";
import { Outlet } from "react-router";

const Sidebar = () => {
  return (
    <div className="row">
      <div className="main-sidebar col-12 col-sm-2 d-flex">
        <ul>
          {sidebarData.map((elm) => {
            return (
              <li key={elm.id}>
                <a href={elm.name}>{elm.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-12 col-sm-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
