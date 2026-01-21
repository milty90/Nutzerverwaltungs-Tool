import "./UserCard.css";

interface UserCardProps {
  imageUrl: string;
  userName: string;
  userDescription: string;
}

function UserCard({ imageUrl, userName, userDescription }: UserCardProps) {
  return (
    <div className="custom-card">
      <div className="image-container">
        <img src={imageUrl} alt="User portrait" />
      </div>
      <div className="user-info">
        <div className="name-container">
          <p className="user-name">{userName}</p>
        </div>
        <div className="description-container">
          <p className="user-description">{userDescription}</p>
          <p className="user-description">{userDescription}</p>
          <p className="user-description">{userDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
