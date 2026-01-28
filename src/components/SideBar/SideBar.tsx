import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./SideBar.scss";

function SideBar() {
  return (
    <nav className="root-nav">
      <img className="logo" src="/dark-logo-text.png" alt="" />
      <img className="mobile" src="/logo-crop.png" alt="" />
      <hr className="line" />

      <Link to="/overview">
        <Button
          startIcon={
            <img
              className="sidebar-icon"
              src="/rectangles.svg"
              alt="Overview"
            />
          }
        >
          Übersicht
        </Button>
      </Link>

      <Link to="/create">
        <Button
          startIcon={
            <img className="sidebar-icon" src="/user-plus.svg" alt="Create" />
          }
        >
          Erstellen
        </Button>
      </Link>
    </nav>
  );
}
export default SideBar;
