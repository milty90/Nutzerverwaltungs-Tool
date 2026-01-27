import UserCard from "../../components/Card/UserCard";
import { useContext, useEffect } from "react";
import { userContext } from "../../context/userContext";
import type { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import { headerContext } from "../../context/headerContext";

function Overview() {
  const navigate = useNavigate();
  const { dispatchUsers, users } = useContext(userContext);
  const { setHeaderTitle } = useContext(headerContext);

  useEffect(() => {
    setHeaderTitle("Benutzerübersicht");
  }, []);

  function handleRemove(userId: number) {
    dispatchUsers({
      type: "REMOVE_USER",
      user: { id: userId } as User,
    });
  }

  function handleEdit(userId: number) {
    navigate(`/edit/${userId}`);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "1rem",
      }}
    >
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          removeUser={handleRemove}
          editUser={handleEdit}
        />
      ))}
    </div>
  );
}
export default Overview;
