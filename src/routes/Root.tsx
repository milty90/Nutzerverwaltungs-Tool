import { Outlet } from "react-router-dom";
import "../routes/Root.scss";
import { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
function Root() {
  const [headerTitle, setHeaderTitle] = useState("Nutzerverwaltung");
  return (
    <div className="root-body">
      {/* Side Bar*/}
      <SideBar setHeaderTitle={setHeaderTitle} />
      <div className="root-container">
        <header className="root-header">
          <h1 className="header">{headerTitle}</h1>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Root;
