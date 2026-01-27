import { useContext, useEffect, useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import { userContext } from "../../context/userContext";
import type { User } from "../../types/User";
import { useParams } from "react-router-dom";
import { headerContext } from "../../context/headerContext";

function Edit() {
  const { users, dispatchUsers } = useContext(userContext);
  const { setHeaderTitle } = useContext(headerContext);
  const [editUser, setEditUser] = useState<User | null>(null);

  const { id } = useParams();
  console.log("Editing user with id:", id);

  useEffect(() => {
    const user = users.find((u) => u.id.toString() === id) || null;
    setEditUser(user);
  }, [id, users]);

  useEffect(() => {
    setHeaderTitle("Benutzer bearbeiten");
  }, []);

  function handleEdit(updatedUser: User) {
    dispatchUsers({
      type: "UPDATE_USER",
      user: updatedUser,
    });
    alert("Benutzer erfolgreich bearbeitet!");
  }

  if (!editUser) {
    return <p>Benutzer nicht gefunden.</p>;
  }

  return <InputForm user={editUser} onSubmit={handleEdit} />;
}
export default Edit;
