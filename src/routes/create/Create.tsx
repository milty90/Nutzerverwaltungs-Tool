import InputForm from "../../components/InputForm/InputForm";
import { useContext, useEffect } from "react";
import type { User } from "../../types/User";
import { userContext } from "../../context/userContext";
import { headerContext } from "../../context/headerContext";

function Create() {
  const { dispatchUsers } = useContext(userContext);
  const { setHeaderTitle } = useContext(headerContext);

  useEffect(() => {
    setHeaderTitle("Benutzer erstellen");
  }, []);

  function handleCreate(user: User) {
    dispatchUsers({
      type: "ADD_USER",
      user: user,
    });
    alert("Benutzer erfolgreich erstellt!");
  }

  return <InputForm user={null} onSubmit={handleCreate} />;
}

export default Create;
