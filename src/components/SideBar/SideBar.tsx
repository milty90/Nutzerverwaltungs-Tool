import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./SideBar.scss";

type SideBarProps = {
  setHeaderTitle: (title: string) => void;
};

function SideBar({ setHeaderTitle }: SideBarProps) {
  return (
    <nav className="root-nav">
      <img className="logo" src="/dark-logo.png" alt="" />
      <hr className="line" />

      <Link to="/overview">
        <Button
          onClick={() => setHeaderTitle("Übersicht")}
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
          onClick={() => setHeaderTitle("Nutzer erstellen")}
          startIcon={
            <img className="sidebar-icon" src="/user-plus.svg" alt="Create" />
          }
        >
          Erstellen
        </Button>
      </Link>

      <Link to="/edit">
        <Button
          onClick={() => setHeaderTitle("Nutzer bearbeiten")}
          startIcon={
            <img className="sidebar-icon" src="/user-plus.svg" alt="Overview" />
          }
        >
          Bearbeiten
        </Button>
      </Link>
    </nav>
  );
}
export default SideBar;
