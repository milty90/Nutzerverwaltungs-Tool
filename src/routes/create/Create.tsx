import DropDownList from "../../components/DropDown/DropDownList";
import InputField from "../../components/InputField/InputField";
import { Button } from "@mui/material";

function Create() {
  return (
    <>
      <InputField
        title={"Benutzername"}
        type={"text"}
        placeholder={"Benutzername"}
      />
      <InputField
        title={"Geburtsdatum"}
        type={"date"}
        placeholder={"Geburtsdatum"}
      />
      <DropDownList
        label={"Geschlecht"}
        options={[
          { value: "male", label: "Männlich" },
          { value: "female", label: "Weiblich" },
          { value: "other", label: "Divers" },
        ]}
      />
      <InputField title={"E-Mail"} type={"email"} placeholder={"E-Mail"} />
      <InputField
        title={"Post Adresse"}
        type={"text"}
        placeholder={"Post Adresse"}
      />
      <InputField
        title={"Telefonnummer"}
        type={"tel"}
        placeholder={"Telefonnummer"}
      />
      <InputField title={"Website"} type={"url"} placeholder={"Website"} />
      <Button
        className="sidebar-button"
        style={{
          backgroundColor: "#333",
          color: "#fff",
          marginTop: "0.5rem",
          marginLeft: "0.5rem",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
        }}
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

      {/* <div
        style={{
          backgroundColor: "#F4F4F5",
          border: "10px solid #10B981",
          color: "#27272A",
          padding: "1rem",
        }}
      >
        Gray + Green
      </div>
      <div
        style={{
          backgroundColor: "#18181B",
          border: "10px solid #059669",
          color: "#75ab9a",
          padding: "1rem",
        }}
      >
        Gray + Green
      </div>
      <Card style={{ marginTop: "1rem", padding: "1rem" }}>
        first MUI Card component
      </Card>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#18181B",
          color: "#75ab9a",
        }}
      >
        first MUI Card component with custom styles.
      </Card>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#D1FAE5",
          color: "#065F46",
        }}
      >
        last MUI Card component with custom styles.
      </Card>
      <div
        className="custom-card"
        style={{
          marginTop: "1rem",
          background:
            "linear-gradient(0deg, #18181B, #18181B 70%, white 49%, white 51%)",
        }}
      >
        <div className="image-container">
          <img
            src={"https://randomuser.me/api/portraits/men/1.jpg"}
            alt="User portrait"
          />
        </div>
        <div className="user-info">
          <div className="name-container">
            <p className="user-name">Max Mustermann</p>
          </div>
          <div className="description-container" style={{ color: "#75ab9a" }}>
            <p className="user-description" style={{ color: "#75ab9a" }}>
              Ipsum dolor sit amet.
            </p>
            <p className="user-description" style={{ color: "#75ab9a" }}>
              Ipsum dolor sit amet.
            </p>
            <p className="user-description" style={{ color: "#75ab9a" }}>
              Ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Create;
