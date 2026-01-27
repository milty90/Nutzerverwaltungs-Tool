import "./UserCard.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import type { User } from "../../types/User";

type UserCardProps = {
  user: User;
  removeUser: (userId: number) => void;
  editUser?: (userId: number) => void;
};

function UserCard({ user, removeUser, editUser }: UserCardProps) {
  return (
    <div className="custom-card">
      <div className="image-container">
        <img src={user.imageUrl} alt="User portrait" />
      </div>
      <div className="user-info">
        <div className="name-container">
          <p className="user-name">{user.name}</p>
          <HighlightOffIcon
            onClick={() => removeUser(user.id)}
            className="close-icon"
          />
        </div>
        <div
          className="description-container"
          onClick={() => editUser && editUser(user.id)}
        >
          <p className="user-description">
            <CakeIcon className="user-description__icon" />
            {user.birthDate}
          </p>

          <p className="user-description">
            <LocationCityIcon className="user-description__icon" />
            {user.address}
          </p>
          <p className="user-description">
            <WcIcon className="user-description__icon" />
            {user.gender}
          </p>
          <p className="user-description">
            <LocalPhoneIcon className="user-description__icon" />
            {user.phone}
          </p>
          <p className="user-description">
            <AlternateEmailIcon className="user-description__icon" />
            {user.email}
          </p>
          <p className="user-description">
            <LanguageIcon className="user-description__icon" />
            {user.website}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
