import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./SideBar.scss";

function SideBar({
  setHeaderTitle,
}: {
  setHeaderTitle: (title: string) => void;
}) {
  return (
    <nav className="root-nav">
      <img className="logo" src="./public/dark-logo.png" alt="" />
      <hr className="line" />

      <Link to="/overview">
        <Button
          onClick={() => setHeaderTitle("Übersicht")}
          startIcon={
            <img
              className="sidebar-icon"
              src="./public/rectangles.svg"
              alt="Overview"
            />
          }
        >
          Übersicht
        </Button>
      </Link>

      <Link to="/create">
        <Button
          onClick={() => setHeaderTitle("Nutzer erstellen")}
          startIcon={
            <img
              className="sidebar-icon"
              src="./public/user-plus.svg"
              alt="Create"
            />
          }
        >
          Erstellen
        </Button>
      </Link>

      <Link to="/edit">
        <Button
          onClick={() => setHeaderTitle("Nutzer bearbeiten")}
          startIcon={
            <img
              className="sidebar-icon"
              src="./public/user-plus.svg"
              alt="Overview"
            />
          }
        >
          Bearbeiten
        </Button>
      </Link>
    </nav>
  );
}
export default SideBar;
